import { useEffect, useState } from 'react'

// Colors match each section's own CursorGlow (pink/teal/azure) so the dot
// nav reads as an extension of that same per-section identity.
const SECTIONS = [
  { id: 'intro', label: 'Intro', color: '#ff366f', hoverColor: 'rgba(255,54,111,0.35)' },
  { id: 'work', label: 'Case studies', color: '#14b8a6', hoverColor: 'rgba(20,184,166,0.35)' },
  { id: 'bio', label: 'About', color: '#3892e0', hoverColor: 'rgba(56,146,224,0.35)' },
]

/**
 * Fixed section indicator for the homepage's full-height sections. The dots
 * are clickable (smooth-scroll to that section) and light up as you scroll,
 * driven by an IntersectionObserver that fires when a section crosses the
 * vertical middle of the viewport.
 */
export default function SectionDots() {
  const [active, setActive] = useState('intro')
  const [hovered, setHovered] = useState<string | null>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id)
        })
      },
      // Fire when a section overlaps the middle ~10% band of the viewport —
      // a reliable "this is the one you're looking at" signal for
      // full-height sections.
      { rootMargin: '-45% 0px -45% 0px', threshold: 0 },
    )

    SECTIONS.forEach((s) => {
      const el = document.getElementById(s.id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  return (
    <nav
      aria-label="Sections"
      className="fixed top-1/2 right-5 z-40 hidden -translate-y-1/2 flex-col items-end gap-2 sm:right-8 md:flex"
    >
      {SECTIONS.map((s) => {
        const isActive = active === s.id
        const isHovered = hovered === s.id
        return (
          <button
            key={s.id}
            type="button"
            onClick={() =>
              document.getElementById(s.id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
            }
            onMouseEnter={() => setHovered(s.id)}
            onMouseLeave={() => setHovered(null)}
            aria-label={`Go to ${s.label}`}
            aria-current={isActive ? 'true' : undefined}
            className="group relative flex items-center py-1"
          >
            <span className="pointer-events-none absolute right-full mr-3 text-xs font-medium whitespace-nowrap text-muted opacity-0 transition-opacity group-hover:opacity-100">
              {s.label}
            </span>
            <span
              className={`block size-2.5 rounded-full transition-all ${
                isActive ? 'scale-100' : 'scale-90'
              } ${isActive || isHovered ? '' : 'bg-hairline'}`}
              style={{ backgroundColor: isActive ? s.color : isHovered ? s.hoverColor : undefined }}
            />
          </button>
        )
      })}
    </nav>
  )
}
