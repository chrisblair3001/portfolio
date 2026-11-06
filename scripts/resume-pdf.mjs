// Regenerates public/Chris-Blair-Resume.pdf from the /resume page's print layout, using headless
// Chrome. Run it with `npm run resume:pdf` after changing the resume. It starts its own dev server on
// a spare port, prints the page, and checks the result: two pages, and the text reads with real
// spaces (what a resume scanner sees). Needs Google Chrome; set CHROME_PATH if it is elsewhere.

import { spawn, execFile, execFileSync } from 'node:child_process'
import { promisify } from 'node:util'
import { existsSync, mkdirSync } from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { tmpdir } from 'node:os'

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const out = path.join(root, 'public', 'Chris-Blair-Resume.pdf')
const port = 5199
const url = `http://localhost:${port}/resume`
const chrome =
  process.env.CHROME_PATH ?? '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'

if (!existsSync(chrome)) {
  console.error(`Chrome not found at ${chrome}. Set CHROME_PATH to its executable.`)
  process.exit(1)
}
mkdirSync(path.dirname(out), { recursive: true })

const server = spawn('npx', ['vite', '--port', String(port), '--strictPort'], { cwd: root, stdio: ['ignore', 'pipe', 'pipe'] })
let serverLog = ''
server.stdout.on('data', (d) => (serverLog += d))
server.stderr.on('data', (d) => (serverLog += d))
const stop = () => server.kill('SIGTERM')
process.on('exit', stop)

async function waitForServer() {
  for (let i = 0; i < 240; i++) {
    try {
      if ((await fetch(url)).ok) return
    } catch {}
    await new Promise((r) => setTimeout(r, 500))
  }
  throw new Error(`Dev server did not start:\n${serverLog.slice(-600)}`)
}

try {
  await waitForServer()
  // Async on purpose: a blocking call would stop this process from draining the dev server's output,
  // and a full pipe stalls the server while Chrome is still waiting on it.
  const print = (file) =>
    promisify(execFile)(chrome, [
      '--headless=new',
      '--disable-gpu',
      '--no-pdf-header-footer',
      '--virtual-time-budget=10000',
      `--print-to-pdf=${file}`,
      url,
    ])

  // A cold dev server is still bundling when the first print runs, which gives a blank page. Print
  // once to warm it up, throw that away, then print for real.
  await print(path.join(tmpdir(), 'resume-warmup.pdf'))
  await print(out)
  console.log(`Wrote ${path.relative(root, out)}`)

  // Verify with poppler when it is installed (brew install poppler).
  try {
    const info = execFileSync('pdfinfo', [out]).toString()
    const pages = Number(/Pages:\s+(\d+)/.exec(info)?.[1])
    const raw = execFileSync('pdftotext', ['-raw', out, '-']).toString()
    const spaced = raw.includes('Product design leader')
    console.log(`Pages: ${pages}${pages === 2 ? '' : '  <-- expected 2'}`)
    console.log(`Words separated by real spaces: ${spaced ? 'yes' : 'NO  <-- scanners will see run-together words'}`)
    if (pages !== 2 || !spaced) process.exitCode = 1
  } catch {
    console.log('Skipped checks (pdfinfo / pdftotext not found).')
  }
} finally {
  stop()
}
