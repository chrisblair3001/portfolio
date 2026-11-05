import { useEffect, useState } from 'react'

// Each section has its own color: lime for the intro, teal for case studies, blue for About.
const SECTIONS = [
  { id: 'intro', label: 'Intro', color: 'var(--color-accent)' },
  { id: 'work', label: 'Case studies', color: 'var(--color-g2)' },
  { id: 'bio', label: 'About', color: 'var(--color-dot-3)' },
]

/**
 * Fixed section indicator for the homepage's full-height sections. The dots are clickable
 * (smooth-scroll to that section) and light up as you scroll, driven by an IntersectionObserver
 * that fires when a section crosses the vertical middle of the viewport. The active dot is larger
 * and takes its section's color; the others are small and quiet.
 */
export default function SectionDots() {
  const [active, setActive] = useState('intro')

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id)
        })
      },
      // Fire when a section overlaps the middle ~10% band of the viewport: a reliable "this is the
      // one you're looking at" signal for full-height sections.
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
      className="fixed top-1/2 right-5 z-40 hidden -translate-y-1/2 flex-col items-end gap-2.5 sm:right-7 md:flex"
    >
      {SECTIONS.map((s) => {
        const isActive = active === s.id
        return (
          <button
            key={s.id}
            type="button"
            onClick={() =>
              document.getElementById(s.id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
            }
            aria-label={`Go to ${s.label}`}
            aria-current={isActive ? 'true' : undefined}
            title={s.label}
            className="group relative flex size-5 cursor-pointer items-center justify-center"
          >
            <span className="pointer-events-none absolute right-full mr-3 text-xs font-medium whitespace-nowrap text-muted opacity-0 transition-opacity group-hover:opacity-100">
              {s.label}
            </span>
            <span
              className={`block rounded-full transition-all duration-200 ${
                isActive ? 'size-3' : 'size-2 bg-border group-hover:bg-muted'
              }`}
              style={isActive ? { backgroundColor: s.color } : undefined}
            />
          </button>
        )
      })}
    </nav>
  )
}
