import { Link, useParams } from 'react-router-dom'
import CaseStudies from '../components/CaseStudies'
import Divider from '../components/Divider'
import Footer from '../components/Footer'
import ImageGallery from '../components/ImageGallery'
import StickyHeader from '../components/StickyHeader'
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

  const otherStudies = caseStudies.filter((s) => s.slug !== study.slug)
  const hasRoleOrTeam = study.role || (study.team && study.team.length > 0)

  return (
    <div className="min-h-screen w-full">
      <StickyHeader />

      <div className="mx-auto flex max-w-[1280px] flex-col gap-16 px-20 pt-36 pb-[120px]">
        <div className="flex flex-col gap-8">
          <div className="flex w-full items-start justify-between gap-16">
            <div className="flex max-w-[640px] flex-col gap-6">
              <p className="text-2xl font-semibold text-label uppercase">Case Study</p>
              <h1 className="text-[48px] leading-tight font-bold text-heading">{study.title}</h1>
              <p className="text-lg leading-[1.6] text-muted">{study.summary}</p>
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

            {hasRoleOrTeam && (
              <div className="flex shrink-0 flex-col gap-6">
                {study.role && (
                  <div className="flex w-[362px] flex-col gap-4">
                    <p className="text-lg font-semibold text-heading">Role</p>
                    <div className="flex flex-col gap-2">
                      <div className="flex items-center gap-4">
                        <span className="size-6 shrink-0 rounded-full bg-hairline" />
                        <p className="text-sm font-medium text-heading">{study.role.title}</p>
                      </div>
                      <p className="pl-10 text-sm leading-[1.6] text-muted">{study.role.scope}</p>
                    </div>
                  </div>
                )}
                {study.team && study.team.length > 0 && (
                  <div className="flex w-[324px] flex-col gap-4">
                    <p className="text-lg font-semibold text-heading">Team</p>
                    <div className="flex flex-col gap-3">
                      {study.team.map((member) => (
                        <div key={member} className="flex items-center gap-4">
                          <span className="size-6 shrink-0 rounded-full bg-hairline" />
                          <p className="text-sm font-medium text-heading">{member}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
          <Divider />
        </div>

        {study.chapters && (
          <div className="flex flex-col gap-24">
            {study.chapters.map((chapter) => (
              <div key={chapter.index} className="flex w-full flex-col gap-10">
                <div className="flex w-full gap-10">
                  <div className="w-[300px] shrink-0">
                    <p className="text-base font-semibold text-label uppercase">// {chapter.index}</p>
                    <p className="mt-3 text-[28px] leading-[1.2] font-bold text-heading">{chapter.title}</p>
                  </div>
                  <div className="flex flex-1 flex-col gap-10">
                    <div className="flex flex-col gap-4 text-[17px] leading-[1.6] text-body">
                      {chapter.body.map((paragraph, i) => (
                        <p key={i}>{paragraph}</p>
                      ))}
                    </div>

                    {chapter.stats && (
                      <div className="flex flex-wrap gap-10">
                        {chapter.stats.map((stat) => (
                          <div key={stat.group} className="flex flex-col gap-4">
                            <p className="text-lg font-semibold text-heading">{stat.group}</p>
                            <div className="flex flex-wrap gap-4">
                              {stat.chips.map((chip) => (
                                <span
                                  key={chip}
                                  className="rounded-full bg-white px-4 py-1.5 text-sm font-medium whitespace-nowrap text-body shadow-[0px_2px_4px_2px_rgba(0,0,0,0.06)]"
                                >
                                  {chip}
                                </span>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    )}

                    {chapter.validations && (
                      <div className="flex flex-col gap-6">
                        <p className="text-lg font-semibold text-heading">Key Validations</p>
                        <div className="grid grid-cols-1 gap-x-10 gap-y-6 sm:grid-cols-2">
                          {chapter.validations.map((v) => (
                            <div key={v.title} className="flex flex-col gap-1">
                              <p className="text-base font-semibold text-heading before:mr-2 before:content-['•']">
                                {v.title}
                              </p>
                              <p className="pl-4 text-base leading-[1.6] text-body">{v.body}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {chapter.gallery && <ImageGallery images={chapter.gallery} />}
              </div>
            ))}
          </div>
        )}
      </div>

      {study.metrics && (
        <div className="w-full bg-ink py-16">
          <div className="mx-auto flex max-w-[1280px] flex-col gap-6 px-20">
            <p className="text-base font-semibold text-[#a2a2a2] uppercase">// Results</p>
            <div className="grid grid-cols-2 gap-4 text-white sm:grid-cols-3 md:grid-cols-5">
              {study.metrics.map((metric) => (
                <div key={metric.label} className="flex flex-col items-center gap-1 py-9 text-center">
                  <p className="text-[54px] leading-none font-bold">{metric.value}</p>
                  <p className="text-sm">{metric.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      <div className="mx-auto flex max-w-[1280px] flex-col gap-16 px-20 pt-16 pb-[120px]">
        <CaseStudies studies={otherStudies} heading="More case studies" />
        <Footer />
      </div>
    </div>
  )
}
