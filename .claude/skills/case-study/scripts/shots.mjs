#!/usr/bin/env node
// Turns raw, unframed screenshots into uniform case study images: the same canvas height, the same
// margin around the subject, the same stage color, and a drawn device frame (phone, browser or
// window) where the screenshot needs one. Run with --help for the options.

import { readdir, stat, mkdir, writeFile } from 'node:fs/promises'
import path from 'node:path'
import sharp from 'sharp'

const HELP = `Usage: node .claude/skills/case-study/scripts/shots.mjs <files or folders...> [options]

Frames and pads screenshots so every image in a case study looks like part of one set.

Choosing a frame (per file, by adding a token before the extension):
  today.phone.png     phone frame
  home.browser.png    browser window with a URL pill (needs --url, otherwise it falls back to window)
  editor.window.png   window title bar with traffic lights, no URL
  board.bare.png      no device, just rounded corners and a hairline
Without a token, portrait images (taller than 1:1.55) get a phone frame and everything else is bare.
Use --kind to change that default for the whole batch.

Options:
  --slug <name>        prefix for output names, e.g. dispatch -> dispatch-today.webp
  --out <dir>          output folder (default: src/assets)
  --url <text>         text for the browser URL pill, e.g. dispatch.app
  --kind <kind>        default frame for files without a token: auto | phone | browser | window | bare
  --format <fmt>       webp (default) | png | jpg
  --quality <1-100>    webp/jpg quality (default 92)
  --height <px>        canvas height (default 1280). Everything else scales from this
  --padding <px>       margin around the frame (default 80 at height 1280)
  --min-aspect <n>     narrowest canvas as width/height (default 0.75, so phones sit on a 3:4 card).
                       Use 0 to hug the frame with only the margin
  --crop-top <px>      cut this many pixels off the top of every source first, e.g. to remove a browser
                       toolbar that is baked into the screenshot before drawing a fresh frame
  --max-upscale <n>    never enlarge a source more than this (default 1.25). A small source is drawn
                       at that size on the same canvas with a larger margin, which keeps it crisp.
                       Use 0 to always fill the card
  --stage <hex>        background color (default #181716)
  --chrome <dark|light>  color of the window chrome (default dark)
  --no-island          leave the dynamic island off phone frames
  --dry-run            report what would happen without writing files
  --strict             exit with an error if any image is too low-resolution
  --json <file>        also write a JSON report
  --snippet            print import lines and gallery entries for caseStudies.ts
`

const KINDS = ['phone', 'browser', 'window', 'bare']
const IMAGE_EXT = new Set(['.png', '.jpg', '.jpeg', '.webp', '.tif', '.tiff', '.avif'])

// How much an image may be enlarged before it looks soft. 1 is exact pixels.
const SOFT_AT = 1.25
const LOW_RES_AT = 1.6

// ---------- args ----------

function parseArgs(argv) {
  const opts = {
    out: 'src/assets',
    kind: 'auto',
    format: 'webp',
    quality: 92,
    height: 1280,
    padding: null,
    minAspect: 0.75,
    stage: '#181716',
    chrome: 'dark',
    island: true,
    cropTop: 0,
    maxUpscale: SOFT_AT,
  }
  const inputs = []
  const valueFlags = new Set([
    '--slug', '--out', '--url', '--kind', '--format', '--quality', '--height', '--padding',
    '--min-aspect', '--stage', '--chrome', '--json', '--crop-top', '--max-upscale',
  ])
  for (let i = 0; i < argv.length; i++) {
    const a = argv[i]
    if (a === '--help' || a === '-h') opts.help = true
    else if (a === '--dry-run') opts.dryRun = true
    else if (a === '--strict') opts.strict = true
    else if (a === '--snippet') opts.snippet = true
    else if (a === '--no-island') opts.island = false
    else if (valueFlags.has(a)) {
      const v = argv[++i]
      if (v === undefined) throw new Error(`${a} needs a value`)
      const key = a.slice(2).replace(/-([a-z])/g, (_, c) => c.toUpperCase())
      opts[key] = ['quality', 'height', 'padding', 'minAspect', 'cropTop', 'maxUpscale'].includes(key) ? Number(v) : v
    } else if (a.startsWith('--')) throw new Error(`Unknown option ${a}`)
    else inputs.push(a)
  }
  if (!['auto', ...KINDS].includes(opts.kind)) throw new Error(`--kind must be auto or one of ${KINDS.join(', ')}`)
  if (!['webp', 'png', 'jpg'].includes(opts.format)) throw new Error('--format must be webp, png or jpg')
  if (!['dark', 'light'].includes(opts.chrome)) throw new Error('--chrome must be dark or light')
  for (const k of ['quality', 'height', 'minAspect', 'cropTop', 'maxUpscale']) {
    if (Number.isNaN(opts[k])) throw new Error(`--${k} needs a number`)
  }
  return { opts, inputs }
}

async function collect(inputs) {
  const files = []
  for (const input of inputs) {
    const s = await stat(input)
    if (s.isDirectory()) {
      const names = (await readdir(input)).filter((n) => IMAGE_EXT.has(path.extname(n).toLowerCase()))
      names.sort((a, b) => a.localeCompare(b, undefined, { numeric: true }))
      for (const n of names) files.push(path.join(input, n))
    } else files.push(input)
  }
  return files
}

// "today.phone.png" -> { name: "today", token: "phone" }
function parseName(file) {
  const base = path.basename(file, path.extname(file))
  const parts = base.split('.')
  const last = parts[parts.length - 1].toLowerCase()
  const token = parts.length > 1 && KINDS.includes(last) ? last : null
  const name = (token ? parts.slice(0, -1) : parts).join('-')
  const slugged = name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '')
  return { name: slugged || 'image', token }
}

const camel = (s) => s.replace(/-([a-z0-9])/g, (_, c) => c.toUpperCase())

// ---------- palette ----------

const FRAME = {
  dark: { body: '#232120', rule: '#34312f', dots: '#5b5754', pill: '#2d2b2a', text: '#b3ada6' },
  light: { body: '#e9e6e1', rule: '#d4d0ca', dots: '#aaa59e', pill: '#f7f5f2', text: '#6a6560' },
}
const OUTLINE = '#3d3a38'

// ---------- geometry ----------

function rrPath(x, y, w, h, [tl, tr, br, bl]) {
  const arc = (r, ex, ey) => (r ? `A${r},${r} 0 0 1 ${ex},${ey}` : '')
  return [
    `M${x + tl},${y}`, `H${x + w - tr}`, arc(tr, x + w, y + tr),
    `V${y + h - br}`, arc(br, x + w - br, y + h),
    `H${x + bl}`, arc(bl, x, y + h - bl),
    `V${y + tl}`, arc(tl, x + tl, y), 'Z',
  ].join(' ')
}

const svg = (w, h, body) =>
  Buffer.from(`<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}">${body}</svg>`)

const esc = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')

function plan(kind, srcW, srcH, o) {
  const U = o.height / 1280
  const H = o.height
  const P = o.padding ?? Math.round(80 * U)
  const maxW = Math.round(2400 * U)
  const minW = Math.round(o.minAspect * H)
  const availH = H - 2 * P
  const availW = maxW - 2 * P

  let bar = 0
  let bezel = 0
  if (kind === 'phone') bezel = Math.round(14 * U)
  if (kind === 'browser' || kind === 'window') bar = Math.round(64 * U)

  // Scale so the screenshot fills the available height, unless that would make the frame too wide.
  const pad = 2 * bezel
  let scale = (availH - bar - pad) / srcH
  if (srcW * scale + pad > availW) scale = (availW - pad) / srcW
  const fitScale = scale
  if (o.maxUpscale > 0 && scale > o.maxUpscale) scale = o.maxUpscale

  const screenW = Math.round(srcW * scale)
  const screenH = Math.round(srcH * scale)
  const frameW = screenW + pad
  const frameH = screenH + bar + pad
  const W = Math.max(frameW + 2 * P, minW)
  const fx = Math.round((W - frameW) / 2)
  const fy = Math.round((H - frameH) / 2)

  const r = kind === 'phone' ? Math.round(0.125 * screenW) : kind === 'bare' ? Math.round(14 * U) : Math.round(22 * U)
  return {
    U, W, H, P, scale, fitScale, bar, bezel, r,
    frame: { x: fx, y: fy, w: frameW, h: frameH },
    screen: { x: fx + bezel, y: fy + bar + bezel, w: screenW, h: screenH },
    needH: Math.round(screenH), // source pixels tall needed for a 1:1 render
  }
}

function grade(scale) {
  if (scale > LOW_RES_AT) return 'low-res'
  if (scale > SOFT_AT) return 'soft'
  return 'ok'
}

// ---------- drawing ----------

function underlay(kind, g, o, url) {
  const c = FRAME[o.chrome]
  const { frame: f, U } = g
  if (kind === 'phone') {
    const d = rrPath(f.x, f.y, f.w, f.h, [g.r + g.bezel, g.r + g.bezel, g.r + g.bezel, g.r + g.bezel])
    return svg(g.W, g.H, `<path d="${d}" fill="#0a0a0a"/>`)
  }
  if (kind === 'bare') return svg(g.W, g.H, '')
  // browser or window: the body of the window, then the title bar details.
  const d = rrPath(f.x, f.y, f.w, f.h, [g.r, g.r, g.r, g.r])
  const cy = f.y + g.bar / 2
  const dots = [0, 1, 2]
    .map((i) => `<circle cx="${f.x + Math.round(34 * U) + i * Math.round(24 * U)}" cy="${cy}" r="${Math.round(7 * U)}" fill="${c.dots}"/>`)
    .join('')
  let pill = ''
  if (url) {
    const pw = Math.min(Math.round(f.w * 0.44), Math.round(620 * U))
    const ph = Math.round(32 * U)
    pill =
      `<rect x="${f.x + Math.round((f.w - pw) / 2)}" y="${Math.round(cy - ph / 2)}" width="${pw}" height="${ph}" rx="${ph / 2}" fill="${c.pill}"/>` +
      `<text x="${f.x + f.w / 2}" y="${cy + Math.round(5.5 * U)}" text-anchor="middle" font-family="Helvetica Neue, Helvetica, Arial, sans-serif" font-size="${Math.round(16 * U)}" fill="${c.text}">${esc(url)}</text>`
  }
  const rule = `<rect x="${f.x}" y="${f.y + g.bar - 1}" width="${f.w}" height="${Math.max(1, Math.round(U))}" fill="${c.rule}"/>`
  return svg(g.W, g.H, `<path d="${d}" fill="${c.body}"/>${dots}${pill}${rule}`)
}

function overlay(kind, g, o) {
  const { frame: f, screen: s, U } = g
  const stroke = Math.max(1, Math.round(2 * U))
  let outline
  if (kind === 'phone') {
    const R = g.r + g.bezel
    outline = rrPath(f.x + stroke / 2, f.y + stroke / 2, f.w - stroke, f.h - stroke, [R, R, R, R])
  } else if (kind === 'bare') {
    outline = rrPath(f.x + stroke / 2, f.y + stroke / 2, f.w - stroke, f.h - stroke, [g.r, g.r, g.r, g.r])
  } else {
    outline = rrPath(f.x + stroke / 2, f.y + stroke / 2, f.w - stroke, f.h - stroke, [g.r, g.r, g.r, g.r])
  }
  let extra = ''
  if (kind === 'phone' && o.island) {
    const iw = Math.round(0.3 * s.w)
    const ih = Math.round(0.088 * s.w)
    extra = `<rect x="${s.x + Math.round((s.w - iw) / 2)}" y="${s.y + Math.round(0.026 * s.w)}" width="${iw}" height="${ih}" rx="${ih / 2}" fill="#000"/>`
  }
  return svg(g.W, g.H, `${extra}<path d="${outline}" fill="none" stroke="${OUTLINE}" stroke-width="${stroke}"/>`)
}

// Rounded corners for the screenshot itself. Window frames only round the bottom edge.
function screenMask(kind, g) {
  const { screen: s } = g
  const radii =
    kind === 'phone' ? [g.r, g.r, g.r, g.r]
    : kind === 'bare' ? [g.r, g.r, g.r, g.r]
    : [0, 0, g.r, g.r]
  return svg(s.w, s.h, `<path d="${rrPath(0, 0, s.w, s.h, radii)}" fill="#fff"/>`)
}

// ---------- processing ----------

// Reads a screenshot as a PNG buffer: honors EXIF rotation and trims the transparent margin that
// macOS window captures leave around a drop shadow.
async function readSource(file, cropTop = 0) {
  let img = sharp(file, { failOn: 'none' }).rotate()
  const meta = await sharp(file, { failOn: 'none' }).metadata()
  let trimmed = false
  if (meta.hasAlpha) {
    const px = await sharp(file, { failOn: 'none' }).extract({ left: 0, top: 0, width: 1, height: 1 }).ensureAlpha().raw().toBuffer()
    if (px[3] === 0) {
      img = img.trim({ background: { r: 0, g: 0, b: 0, alpha: 0 }, threshold: 1 })
      trimmed = true
    }
  }
  let { data, info } = await img.png({ compressionLevel: 0 }).toBuffer({ resolveWithObject: true })
  if (cropTop > 0) {
    if (cropTop >= info.height) throw new Error(`${file}: --crop-top ${cropTop} is taller than the image`)
    ;({ data, info } = await sharp(data)
      .extract({ left: 0, top: cropTop, width: info.width, height: info.height - cropTop })
      .png({ compressionLevel: 0 })
      .toBuffer({ resolveWithObject: true }))
  }
  return { data, width: info.width, height: info.height, trimmed }
}

function encode(img, o) {
  if (o.format === 'png') return img.png({ compressionLevel: 9 })
  if (o.format === 'jpg') return img.jpeg({ quality: o.quality, mozjpeg: true })
  return img.webp({ quality: o.quality, effort: 5, smartSubsample: true })
}

async function renderOne(file, o) {
  const { name, token } = parseName(file)
  const src = await readSource(file, o.cropTop)

  let kind = token ?? (o.kind === 'auto' ? null : o.kind)
  if (!kind) kind = src.width / src.height < 1 / 1.55 ? 'phone' : 'bare'
  const warnings = []
  if (kind === 'browser' && !o.url) {
    warnings.push('browser frame needs --url; used a plain window title bar instead')
    kind = 'window'
  }
  const showUrl = kind === 'browser'
  if ((kind === 'browser' || kind === 'window') && src.width / src.height < 0.9) {
    warnings.push('very tall for a window frame; crop it or tag it .bare')
  }
  if (kind === 'phone' && src.width / src.height > 0.7) {
    warnings.push('not phone-shaped; check the .phone tag')
  }

  const g = plan(kind, src.width, src.height, o)
  const quality = grade(g.fitScale)
  if (quality !== 'ok') {
    const capped = g.scale < g.fitScale ? `; drawn at ${g.scale.toFixed(2)}x with a larger margin` : ''
    warnings.push(
      `needs ${g.fitScale.toFixed(2)}x enlargement to fill the card (${quality})${capped}. Re-export larger: a full-size render needs about ${Math.round(src.height * g.fitScale)}px tall, this one is ${src.height}px`,
    )
  }

  const prefix = o.slug && !name.startsWith(`${o.slug}-`) ? `${o.slug}-` : ''
  const fileName = `${prefix}${name}.${o.format === 'jpg' ? 'jpg' : o.format}`
  const record = {
    input: file,
    output: path.join(o.out, fileName),
    kind,
    source: `${src.width}x${src.height}`,
    canvas: `${g.W}x${g.H}`,
    scale: Number(g.scale.toFixed(3)),
    fitScale: Number(g.fitScale.toFixed(3)),
    quality,
    trimmedTransparentEdge: src.trimmed,
    warnings,
  }
  if (o.dryRun) return record

  const screen = await sharp(src.data)
    .resize(g.screen.w, g.screen.h, { fit: 'fill', kernel: 'lanczos3' })
    .composite([{ input: screenMask(kind, g), blend: 'dest-in' }])
    .png()
    .toBuffer()

  const layers = [
    { input: underlay(kind, g, o, showUrl ? o.url : null), left: 0, top: 0 },
    { input: screen, left: g.screen.x, top: g.screen.y },
    { input: overlay(kind, g, o), left: 0, top: 0 },
  ]
  const canvas = sharp({ create: { width: g.W, height: g.H, channels: 4, background: o.stage } }).composite(layers)
  await mkdir(o.out, { recursive: true })
  const info = await encode(canvas, o).toFile(record.output)
  record.bytes = info.size
  return record
}

// ---------- main ----------

const fmtBytes = (n) => (n == null ? '' : n > 1024 * 1024 ? `${(n / 1048576).toFixed(1)}MB` : `${Math.round(n / 1024)}KB`)

async function main() {
  const { opts, inputs } = parseArgs(process.argv.slice(2))
  if (opts.help || inputs.length === 0) {
    console.log(HELP)
    return
  }
  const files = await collect(inputs)
  if (files.length === 0) throw new Error('No images found')

  const seen = new Set()
  const records = []
  for (const f of files) {
    const rec = await renderOne(f, opts)
    if (seen.has(rec.output)) rec.warnings.push(`output name ${path.basename(rec.output)} is used twice; rename one input`)
    seen.add(rec.output)
    records.push(rec)
  }

  const rows = records.map((r) => [path.basename(r.input), r.kind, r.source, r.canvas, `${r.scale}x`, r.quality, fmtBytes(r.bytes)])
  const head = ['input', 'frame', 'source', 'canvas', 'scale', 'res', opts.dryRun ? '' : 'size']
  const widths = head.map((h, i) => Math.max(h.length, ...rows.map((r) => String(r[i]).length)))
  const line = (cells) => cells.map((c, i) => String(c).padEnd(widths[i])).join('  ').trimEnd()
  console.log(line(head))
  for (const r of rows) console.log(line(r))
  console.log()

  let low = 0
  for (const r of records) {
    if (r.quality === 'low-res') low++
    for (const w of r.warnings) console.log(`! ${path.basename(r.input)}: ${w}`)
  }
  console.log(opts.dryRun ? `\nDry run: ${records.length} image(s), nothing written.` : `\nWrote ${records.length} image(s) to ${opts.out}`)

  if (opts.snippet && !opts.dryRun) {
    console.log('\n// imports')
    for (const r of records) {
      const base = path.basename(r.output)
      console.log(`import ${camel(base.replace(/\.[a-z]+$/, ''))} from '../assets/${base}'`)
    }
    console.log('\n// gallery')
    for (const r of records) {
      const base = path.basename(r.output)
      console.log(`{ src: ${camel(base.replace(/\.[a-z]+$/, ''))}, alt: 'TODO' },`)
    }
  }
  if (opts.json) await writeFile(opts.json, JSON.stringify(records, null, 2))
  if (opts.strict && low > 0) {
    console.error(`${low} image(s) are too low-resolution.`)
    process.exitCode = 1
  }
}

main().catch((e) => {
  console.error(e.message)
  process.exitCode = 1
})
