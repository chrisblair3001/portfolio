import { Link } from 'react-router-dom'
import type { CaseStudy } from '../data/caseStudyTypes'

// A full-width row at the bottom of a case study page that leads into the next one. The title and
// arrow turn to the accent color on hover.
export default function NextCaseStudy({ study }: { study: CaseStudy }) {
  return (
    <Link
      to={`/case-studies/${study.slug}`}
      className="group flex items-center justify-between gap-6 border-t border-hairline py-10 text-heading transition-colors duration-300 hover:text-accent"
    >
      <div className="flex flex-col gap-2">
        <span className="font-mono text-[13px] font-medium tracking-[0.06em] text-label uppercase">
          Next case study
        </span>
        <span className="font-display text-[clamp(32px,3.8vw,48px)] leading-none font-bold tracking-[-0.045em]">
          {study.title}
        </span>
      </div>
      <span aria-hidden className="text-[40px] leading-none transition-transform duration-300 group-hover:translate-x-1">
        →
      </span>
    </Link>
  )
}
