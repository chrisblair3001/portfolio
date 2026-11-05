import { Link } from 'react-router-dom'
import type { CaseStudy } from '../data/caseStudyTypes'

// Every case study as a frameless card in a grid: two across on tablets and up, one on a phone.
// The cover is grayscale until hovered, then full color with a slight zoom.

function Card({ study, index }: { study: CaseStudy; index: number }) {
  const cover = study.cover
  return (
    <Link to={`/case-studies/${study.slug}`} className="group flex flex-col gap-[18px]">
      <div className="aspect-[16/11] overflow-hidden rounded-[4px] bg-hairline">
        {cover ? (
          <img
            src={cover.src}
            alt={cover.alt}
            loading="lazy"
            decoding="async"
            className="size-full object-cover brightness-[0.92] grayscale transition-[transform,filter] duration-[600ms] ease-[cubic-bezier(0.2,0.7,0.2,1)] group-hover:scale-[1.04] group-hover:brightness-100 group-hover:grayscale-0"
            style={{ objectPosition: cover.position }}
          />
        ) : null}
      </div>
      <div className="flex items-baseline justify-between gap-3 border-t border-hairline pt-3.5">
        <div className="flex flex-col gap-1.5">
          <span className="font-display text-[23px] leading-[1.05] font-bold tracking-[-0.045em] text-heading">
            {study.title}
          </span>
          {(study.tagline ?? study.summary) && (
            <span className="text-xs leading-[1.5] text-muted">{study.tagline ?? study.summary}</span>
          )}
        </div>
        <span className="font-mono text-[10px] text-label">{String(index + 1).padStart(2, '0')}</span>
      </div>
    </Link>
  )
}

type CaseStudiesProps = {
  studies: CaseStudy[]
  heading?: string
}

export default function CaseStudies({ studies, heading = 'Case studies' }: CaseStudiesProps) {
  return (
    <section className="flex w-full flex-col gap-10">
      <h2 className="text-[13.6px] font-semibold tracking-[0.02em] text-label uppercase">
        // {heading}
      </h2>
      <div className="grid grid-cols-1 gap-x-7 gap-y-12 sm:grid-cols-2">
        {studies.map((study, i) => (
          <Card key={study.slug} study={study} index={i} />
        ))}
      </div>
    </section>
  )
}
