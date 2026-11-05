import { useEffect, useRef } from 'react'

// A field of short hairlines drawn on a canvas behind the hero. At rest every line points up and to
// the right, faint. Near the pointer the lines turn to point away from it and grow longer, and the
// innermost ones pick up the accent color. The point the field reacts to lags behind the real
// pointer, and when the pointer is idle (or on a touch screen) it drifts along a slow loop of its own.

const SPACING = 14 // px between lines
const REST_HALF_LENGTH = 2.5 // half the length of a line at rest, px
const GROW = 6 // how much longer the half-length gets at the center of the pointer's influence
const REST_ALPHA = 0.09
const RADIUS = 110 // spread of the pointer's influence, px (scaled down on narrow screens)
const FOLLOW = 0.045 // how much of the gap to the pointer closes per 60Hz frame
const IDLE_MS = 2500 // pointer stillness after which the point drifts by itself
const ACCENT_BLEND = 0.72 // how far the accent is mixed toward the background, to keep it soft
const REST = Math.SQRT1_2 // the resting direction, up and to the right (45 degrees)

type Rgb = [number, number, number]

function readColor(name: string, fallback: Rgb): Rgb {
  const raw = getComputedStyle(document.documentElement).getPropertyValue(name).trim().replace('#', '')
  if (raw.length !== 6) return fallback
  const rgb = [0, 2, 4].map((i) => parseInt(raw.slice(i, i + 2), 16))
  return rgb.some(Number.isNaN) ? fallback : (rgb as Rgb)
}

export default function HairlineField({ className = '' }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const host = canvas?.parentElement
    const ctx = canvas?.getContext('2d')
    if (!canvas || !host || !ctx) return

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const dpr = Math.min(window.devicePixelRatio || 1, 2)
    const ink = readColor('--color-ink', [242, 240, 236])
    const bg = readColor('--color-bg', [18, 18, 18])
    const accentFull = readColor('--color-accent', [198, 244, 50])
    const accent = accentFull.map((v, i) => v * (1 - ACCENT_BLEND) + bg[i] * ACCENT_BLEND)
    const inkCss = ink.join(',')

    let width = 0
    let height = 0
    let scale = 1

    const draw = (hx: number, hy: number) => {
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      ctx.clearRect(0, 0, width, height)
      ctx.lineCap = 'round'
      ctx.lineWidth = 1

      const radius = RADIUS * scale
      const twoR2 = 2 * radius * radius
      const farSq = (radius * 3.3) ** 2

      // Lines too far from the pointer to be affected share one path and one stroke.
      ctx.beginPath()
      for (let y = SPACING / 2; y < height; y += SPACING) {
        for (let x = SPACING / 2; x < width; x += SPACING) {
          const dx = x - hx
          const dy = y - hy
          if (dx * dx + dy * dy <= farSq) continue
          ctx.moveTo(x - REST * REST_HALF_LENGTH, y + REST * REST_HALF_LENGTH)
          ctx.lineTo(x + REST * REST_HALF_LENGTH, y - REST * REST_HALF_LENGTH)
        }
      }
      ctx.strokeStyle = `rgba(${inkCss},${REST_ALPHA})`
      ctx.stroke()

      for (let y = SPACING / 2; y < height; y += SPACING) {
        for (let x = SPACING / 2; x < width; x += SPACING) {
          const dx = x - hx
          const dy = y - hy
          const d2 = dx * dx + dy * dy
          if (d2 > farSq) continue
          const d = Math.sqrt(d2) || 1
          // Gaussian falloff: 1 at the pointer, near 0 beyond about three radii.
          const influence = Math.exp(-d2 / twoR2)
          let ux = (1 - influence) * REST + (influence * dx) / d
          let uy = (1 - influence) * -REST + (influence * dy) / d
          const len = Math.hypot(ux, uy) || 1
          ux /= len
          uy /= len
          const half = REST_HALF_LENGTH + influence * GROW
          const t = influence > 0.6 ? Math.min(1, (influence - 0.6) / 0.4) : 0
          const r = Math.round(ink[0] + (accent[0] - ink[0]) * t)
          const g = Math.round(ink[1] + (accent[1] - ink[1]) * t)
          const b = Math.round(ink[2] + (accent[2] - ink[2]) * t)
          ctx.strokeStyle = `rgba(${r},${g},${b},${Math.min(1, REST_ALPHA + influence * 0.5)})`
          ctx.beginPath()
          ctx.moveTo(x - ux * half, y - uy * half)
          ctx.lineTo(x + ux * half, y + uy * half)
          ctx.stroke()
        }
      }
    }

    // Reduced motion: draw the field once at rest and redraw only when it is resized.
    const drawRest = () => draw(-1e5, -1e5)

    const resize = () => {
      const rect = host.getBoundingClientRect()
      width = rect.width
      height = rect.height
      canvas.width = Math.round(width * dpr)
      canvas.height = Math.round(height * dpr)
      scale = Math.min(1, width / 900)
      if (reduceMotion) drawRest()
    }
    resize()
    const resizeObserver = new ResizeObserver(resize)
    resizeObserver.observe(host)

    if (reduceMotion) {
      return () => resizeObserver.disconnect()
    }

    let pointerX: number | null = null
    let pointerY = 0
    let lastMove = -Infinity
    let hx = width * 0.6
    let hy = height * 0.5
    let previous = 0
    let raf = 0

    const onPointerMove = (e: PointerEvent) => {
      if (e.pointerType === 'touch') return
      const rect = host.getBoundingClientRect()
      pointerX = e.clientX - rect.left
      pointerY = e.clientY - rect.top
      lastMove = performance.now()
    }
    window.addEventListener('pointermove', onPointerMove)

    const frame = (time: number) => {
      raf = requestAnimationFrame(frame)
      const dt = previous ? Math.min(64, time - previous) : 16.7
      previous = time
      let tx: number
      let ty: number
      if (pointerX === null || time - lastMove > IDLE_MS) {
        tx = width * (0.55 + 0.3 * Math.sin(time / 3100))
        ty = height * (0.5 + 0.26 * Math.sin(time / 2300 + 1))
      } else {
        tx = pointerX
        ty = pointerY
      }
      const ease = 1 - Math.pow(1 - FOLLOW, dt / 16.667)
      hx += (tx - hx) * ease
      hy += (ty - hy) * ease
      draw(hx, hy)
    }

    // Only animate while the hero is on screen.
    const visibility = new IntersectionObserver(([entry]) => {
      cancelAnimationFrame(raf)
      previous = 0
      if (entry.isIntersecting) raf = requestAnimationFrame(frame)
    })
    visibility.observe(host)

    return () => {
      cancelAnimationFrame(raf)
      visibility.disconnect()
      resizeObserver.disconnect()
      window.removeEventListener('pointermove', onPointerMove)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      aria-hidden
      className={`pointer-events-none absolute inset-0 z-0 size-full ${className}`}
    />
  )
}
