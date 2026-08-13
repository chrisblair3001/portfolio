import { AnimatePresence, motion } from 'framer-motion'
import { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { caseStudies, type CaseStudy } from '../data/caseStudies'

type CaseStudiesProps = {
  onHoverChange?: (study: CaseStudy | null) => void
}

export default function CaseStudies({ onHoverChange }: CaseStudiesProps) {
  const [hovered, setHovered] = useState<CaseStudy | null>(null)
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const containerRef = useRef<HTMLElement>(null)

  const updatePosition = (e: React.MouseEvent) => {
    const rect = containerRef.current?.getBoundingClientRect()
    if (!rect) return
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top })
  }

  const handleEnter = (study: CaseStudy, e: React.MouseEvent<HTMLElement>) => {
    updatePosition(e)
    setHovered(study)
    onHoverChange?.(study)
  }

  const handleLeave = () => {
    setHovered(null)
    onHoverChange?.(null)
  }

  return (
    <section
      ref={containerRef}
      className="relative flex w-full items-start gap-20"
      onMouseMove={updatePosition}
    >
      <h2 className="w-[320px] shrink-0 text-2xl font-semibold text-label">Case Studies</h2>
      <div className="flex flex-1 flex-col gap-16">
        {caseStudies.map((study) => (
          <Link
            key={study.slug}
            to={`/case-studies/${study.slug}`}
            className="flex w-full flex-col gap-2 rounded-2xl p-4 transition-transform duration-200 hover:translate-x-1"
            onMouseEnter={(e) => handleEnter(study, e)}
            onMouseLeave={handleLeave}
          >
            <h3 className="w-full text-2xl font-bold text-heading">{study.title}</h3>
            <p className="w-full text-base leading-[1.5] text-muted">{study.summary}</p>
          </Link>
        ))}
      </div>

      <AnimatePresence>
        {hovered && (
          <motion.img
            key={hovered.slug}
            src={hovered.image}
            alt=""
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.85 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            style={{ left: position.x, top: position.y }}
            className="pointer-events-none absolute z-10 w-64 -translate-x-1/2 -translate-y-1/2 rounded-xl shadow-xl transition-[left,top] duration-300 ease-out"
          />
        )}
      </AnimatePresence>
    </section>
  )
}
