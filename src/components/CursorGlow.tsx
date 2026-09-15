import { useEffect, useRef } from 'react'

// Pink is the site's primary accent (Hero). The other two sections use
// complementary hues off that same pink so each "slide" gets its own
// identity without clashing: teal sits opposite pink on the color wheel,
// and azure bridges the two — a cyan-leaning blue that reads as part of the
// same saturated pink/teal family rather than an unrelated hue.
const GLOW_COLORS = {
  pink: { r: 255, g: 54, b: 111 },
  teal: { r: 20, g: 184, b: 166 },
  azure: { r: 56, g: 146, b: 224 },
} as const

// A chain of glow "sources", each easing toward the one ahead of it rather
// than straight at the cursor. The leader (index 0) behaves like a single
// glow at the original speed; each link behind it eases more slowly than
// the one before it, so the chain stretches into a visible tail on fast
// moves and takes a beat to reel itself back in. `size` doubles as each
// source's falloff radius, `opacity` as its peak strength.
const TRAIL = [
  { size: 1280, opacity: 0.85, ease: 0.095 },
  { size: 1130, opacity: 0.72, ease: 0.062 },
  { size: 990, opacity: 0.58, ease: 0.045 },
  { size: 830, opacity: 0.46, ease: 0.033 },
  { size: 690, opacity: 0.34, ease: 0.024 },
  { size: 545, opacity: 0.24, ease: 0.018 },
  { size: 405, opacity: 0.14, ease: 0.013 },
]

// The dot grid is fixed to the section (like a printed halftone screen) —
// only which dots light up, and how big they draw, changes frame to frame.
const GRID_SPACING = 8
const MAX_DOT_RADIUS = 2.8

type CursorGlowProps = {
  className?: string
  color?: keyof typeof GLOW_COLORS
}

/**
 * A cursor-tracking glow trail rendered as a halftone dot grid rather than a
 * smooth blur — same easing chain as before, but at each frame the trail's
 * combined intensity field is sampled on a fixed grid and drawn as filled
 * circles sized to that intensity, so it reads as a glow built out of many
 * small dots. Drop it in as the first child of a `relative overflow-hidden`
 * section and it tracks mouse movement over that section.
 */
export default function CursorGlow({ className, color = 'pink' }: CursorGlowProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const section = canvas?.parentElement
    const ctx = canvas?.getContext('2d')
    if (!canvas || !section || !ctx) return

    const dpr = Math.min(window.devicePixelRatio || 1, 2)

    const resize = () => {
      const rect = section.getBoundingClientRect()
      canvas.width = Math.max(1, Math.round(rect.width * dpr))
      canvas.height = Math.max(1, Math.round(rect.height * dpr))
      canvas.style.width = `${rect.width}px`
      canvas.style.height = `${rect.height}px`
    }
    resize()
    window.addEventListener('resize', resize)

    const rect0 = section.getBoundingClientRect()
    const start = { x: rect0.width * 0.85, y: rect0.height * 0.85 }
    const target = { ...start }
    const positions = TRAIL.map(() => ({ ...start }))

    const handleMove = (e: MouseEvent) => {
      const r = section.getBoundingClientRect()
      target.x = e.clientX - r.left
      target.y = e.clientY - r.top
    }
    section.addEventListener('mousemove', handleMove)

    // Pause the (heavier, per-dot) draw loop while the section is scrolled
    // out of view — several of these run at once (one per homepage slide),
    // and only one is ever actually on screen at a time.
    let visible = true
    const observer = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting
    })
    observer.observe(section)

    const { r, g, b } = GLOW_COLORS[color]
    const fillColor = `rgb(${r}, ${g}, ${b})`

    let frame: number
    const draw = () => {
      positions.forEach((pos, i) => {
        const lead = i === 0 ? target : positions[i - 1]
        const ease = TRAIL[i].ease
        pos.x += (lead.x - pos.x) * ease
        pos.y += (lead.y - pos.y) * ease
      })

      if (visible) {
        ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
        ctx.clearRect(0, 0, canvas.width, canvas.height)

        let minX = Infinity
        let minY = Infinity
        let maxX = -Infinity
        let maxY = -Infinity
        positions.forEach((pos, i) => {
          const radius = TRAIL[i].size / 2
          minX = Math.min(minX, pos.x - radius)
          minY = Math.min(minY, pos.y - radius)
          maxX = Math.max(maxX, pos.x + radius)
          maxY = Math.max(maxY, pos.y + radius)
        })

        const startX = Math.floor(minX / GRID_SPACING) * GRID_SPACING
        const startY = Math.floor(minY / GRID_SPACING) * GRID_SPACING

        ctx.fillStyle = fillColor
        ctx.beginPath()
        for (let gy = startY; gy <= maxY; gy += GRID_SPACING) {
          for (let gx = startX; gx <= maxX; gx += GRID_SPACING) {
            // Sum each source's contribution instead of taking the
            // strongest one — that's the classic metaball trick. Where two
            // sources' fields overlap, their values add up rather than one
            // simply winning, so the boundary between them dissolves and
            // the whole chain reads as one continuously deforming shape
            // instead of a string of separate circles.
            let intensity = 0
            for (let i = 0; i < positions.length; i++) {
              const pos = positions[i]
              const segment = TRAIL[i]
              const radius = segment.size / 2
              const dx = gx - pos.x
              const dy = gy - pos.y
              const t = Math.sqrt(dx * dx + dy * dy) / radius
              if (t < 1) intensity += (1 - t) * (1 - t) * segment.opacity
            }
            intensity = Math.min(1, intensity)
            if (intensity > 0.04) {
              const dotRadius = MAX_DOT_RADIUS * intensity
              ctx.moveTo(gx + dotRadius, gy)
              ctx.arc(gx, gy, dotRadius, 0, Math.PI * 2)
            }
          }
        }
        ctx.fill()
      }

      frame = requestAnimationFrame(draw)
    }
    frame = requestAnimationFrame(draw)

    return () => {
      section.removeEventListener('mousemove', handleMove)
      window.removeEventListener('resize', resize)
      observer.disconnect()
      cancelAnimationFrame(frame)
    }
  }, [color])

  return (
    <canvas
      ref={canvasRef}
      aria-hidden
      className={`pointer-events-none absolute top-0 left-0 ${className ?? ''}`}
    />
  )
}
