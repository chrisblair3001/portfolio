import { Link, useParams } from 'react-router-dom'
import Footer from '../components/Footer'
import { caseStudies } from '../data/caseStudies'

export default function CaseStudyDetail() {
  const { slug } = useParams()
  const study = caseStudies.find((s) => s.slug === slug)

  if (!study) {
    return (
      <div className="mx-auto flex min-h-screen max-w-[1280px] flex-col items-start justify-center gap-6 px-20">
        <p className="text-2xl font-bold text-heading">Case study not found</p>
        <Link to="/" className="text-base font-bold text-accent">
          ← Back home
        </Link>
      </div>
    )
  }

  return (
    <div className="mx-auto flex min-h-screen max-w-[1280px] flex-col gap-16 px-20 pt-20 pb-[120px]">
      <Link
        to="/"
        className="w-fit text-sm font-bold text-muted uppercase transition-colors hover:text-heading"
      >
        ← Back home
      </Link>
      <div className="flex flex-col gap-6">
        <p className="text-2xl font-semibold text-label">Case Study</p>
        <h1 className="max-w-[800px] text-[48px] leading-tight font-bold text-heading">
          {study.title}
        </h1>
        <p className="max-w-[640px] text-lg leading-[1.6] text-muted">{study.summary}</p>
      </div>
      <img src={study.image} alt="" className="w-full max-w-[880px] rounded-2xl" />
      <div className="flex max-w-[720px] flex-col gap-6 text-base leading-[1.6] text-body">
        <p>[Placeholder] Add the full case study write-up here — problem, process, and outcome.</p>
        <p>
          [Placeholder] Include supporting visuals, research highlights, or before/after
          comparisons.
        </p>
      </div>
      <Footer />
    </div>
  )
}
