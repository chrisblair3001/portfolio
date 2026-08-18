import { Link, useParams } from 'react-router-dom'
import ExpandableImage from '../components/ExpandableImage'
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
        {study.tags && (
          <div className="flex flex-wrap gap-2">
            {study.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-border px-4 py-1.5 text-sm font-medium text-body"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>

      <ExpandableImage src={study.image} alt="" className="w-full max-w-[880px] rounded-2xl" />

      {study.metrics && (
        <div className="grid grid-cols-2 gap-8 border-y border-hairline py-10 sm:grid-cols-3 md:grid-cols-5">
          {study.metrics.map((metric) => (
            <div key={metric.label} className="flex flex-col gap-1">
              <p className="text-2xl font-bold text-heading">{metric.value}</p>
              <p className="text-sm text-muted">{metric.label}</p>
            </div>
          ))}
        </div>
      )}

      {study.sections ? (
        <div className="flex flex-col gap-16">
          {study.sections.map((section) => (
            <div key={section.heading} className="flex flex-col gap-6">
              <h2 className="text-xl font-bold text-heading">{section.heading}</h2>
              <div className="flex max-w-[720px] flex-col gap-4 text-base leading-[1.6] text-body">
                {section.body.map((paragraph, i) => (
                  <p key={i}>{paragraph}</p>
                ))}
              </div>
              {section.image && (
                <ExpandableImage
                  src={section.image}
                  alt={section.imageAlt ?? ''}
                  className="w-full max-w-[1000px] rounded-2xl border border-hairline"
                />
              )}
            </div>
          ))}
        </div>
      ) : (
        <div className="flex max-w-[720px] flex-col gap-6 text-base leading-[1.6] text-body">
          <p>[Placeholder] Add the full case study write-up here — problem, process, and outcome.</p>
          <p>
            [Placeholder] Include supporting visuals, research highlights, or before/after
            comparisons.
          </p>
        </div>
      )}

      <Footer />
    </div>
  )
}
