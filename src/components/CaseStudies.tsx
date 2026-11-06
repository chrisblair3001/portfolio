import { Link } from 'react-router-dom'
import type { CaseStudy } from '../data/caseStudyTypes'

// Every case study as a card in a grid: two across on tablets and up, one on a phone. The cover sits in
// a small window on a tinted stage, the way the screenshots sit on the case study pages. On hover the
// stage lightens and the window lifts, both on the same slow ease-out.

const EASE = 'ease-[cubic-bezier(0.2,0.7,0.2,1)]'

export function CaseStudyCard({ study, index }: { study: CaseStudy; index: number }) {
  const cover = study.cover
  const framed = (cover?.frame ?? 'window') === 'window'
  return (
    <Link to={`/case-studies/${study.slug}`} className="group flex flex-col gap-4">
      <div
        className={`flex aspect-[16/11] items-center justify-center rounded-md border border-hairline bg-[#181716] px-[9%] transition-colors duration-700 ${EASE} group-hover:bg-[#1e1c1b] motion-reduce:transition-none`}
      >
        <div
          className={`w-full overflow-hidden rounded-md border border-[#3d3a38] bg-[#232120] transition-transform duration-700 ${EASE} group-hover:-translate-y-1.5 group-hover:scale-[1.02] motion-reduce:transition-none motion-reduce:group-hover:transform-none`}
        >
          {framed && (
            <div aria-hidden className="flex h-5 items-center gap-1.5 px-2.5">
              {[0, 1, 2].map((dot) => (
                <span key={dot} className="size-1.5 rounded-full bg-[#5b5754]" />
              ))}
            </div>
          )}
          {cover ? (
            <img
              src={cover.src}
              alt={cover.alt}
              loading="lazy"
              decoding="async"
              className="aspect-[16/10] w-full object-cover"
              style={{ objectPosition: cover.position ?? 'top' }}
            />
          ) : (
            <div className="aspect-[16/10] w-full bg-hairline" />
          )}
        </div>
      </div>
      <div className="flex items-baseline justify-between gap-3">
        <span className="font-display text-[22px] leading-[1.05] font-bold tracking-[-0.045em] text-heading">
          {study.title}
        </span>
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
      <div className="grid grid-cols-1 gap-x-7 gap-y-10 sm:grid-cols-2">
        {studies.map((study, i) => (
          <CaseStudyCard key={study.slug} study={study} index={i} />
        ))}
      </div>
    </section>
  )
}
