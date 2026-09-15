import { Link, useParams } from 'react-router-dom'
import CaseStudies from '../components/CaseStudies'
import Divider from '../components/Divider'
import Footer from '../components/Footer'
import ImageGallery from '../components/ImageGallery'
import StickyHeader from '../components/StickyHeader'
import { caseStudies } from '../data/caseStudies'

// Recreations of the gradient-circle families from the Figma board
// (radial "gem" highlights, conic wheels, a linear sweep) as CSS, so the
// role/team markers get a bit of colour without pulling in raster assets
// for a 24px decorative dot.
const DOT_GRADIENTS = [
  'radial-gradient(circle at 32% 28%, #7fd4f5, #2f6fd6 72%)',
  'linear-gradient(135deg, #ff7a3d, #ff2e63)',
  'radial-gradient(circle at 35% 30%, #7ff0c4, #0f9d68 78%)',
  'radial-gradient(circle at 62% 34%, #c99bff, #7b3ff0 82%)',
  'radial-gradient(circle at 40% 34%, #ff9db0, #e11d48 76%)',
  'radial-gradient(circle at 42% 30%, #3b4a63, #0b1220 82%)',
  'conic-gradient(from 210deg at 50% 50%, #ffb347, #ff2e63, #ffb347)',
  'conic-gradient(from 0deg, #ff2e63, #ffd23f, #12d8a0, #4d96ff, #b06ab3, #ff2e63)',
  'conic-gradient(from 170deg at 50% 50%, #a9f2fb, #6aa8ff, #c9b7ff, #a9f2fb)',
  'radial-gradient(circle at 45% 38%, #ffe58a, #f59e0b 68%, #b45309)',
]

// Deterministic gradient per marker: the slug picks a per-study starting
// colour, then `step` walks the palette in a stride that's coprime with its
// length, so every dot on a page lands on a different gradient while each
// study still starts somewhere different.
function GradientDot({ slug, step }: { slug: string; step: number }) {
  let hash = 0
  for (let i = 0; i < slug.length; i++) hash = (Math.imul(hash, 31) + slug.charCodeAt(i)) | 0
  const start = Math.abs(hash) % DOT_GRADIENTS.length
  const gradient = DOT_GRADIENTS[(start + step * 3) % DOT_GRADIENTS.length]
  return (
    <span aria-hidden className="size-6 shrink-0 rounded-full" style={{ backgroundImage: gradient }} />
  )
}

export default function CaseStudyDetail() {
  const { slug } = useParams()
  const study = caseStudies.find((s) => s.slug === slug)

  if (!study) {
    return (
      <div className="mx-auto flex min-h-screen max-w-[1280px] flex-col items-start justify-center gap-6 px-6 sm:px-10 lg:px-20">
        <p className="text-2xl font-bold text-heading">Case study not found</p>
        <Link to="/" className="text-base font-bold text-accent">
          ← Back home
        </Link>
      </div>
    )
  }

  const otherStudies = caseStudies.filter((s) => s.slug !== study.slug)
  const hasRoleOrTeam = study.role || (study.team && study.team.length > 0)
  const reportsCount = study.role?.reports?.length ?? 0

  return (
    <div className="min-h-screen w-full">
      <StickyHeader />

      <div className="mx-auto flex max-w-[1280px] flex-col gap-16 px-6 pt-36 pb-28 sm:gap-20 sm:px-10 sm:pt-40 sm:pb-[156px] lg:px-20 lg:pt-48">
        <div className="flex flex-col gap-10">
          <div className="flex w-full flex-col items-start gap-10 lg:flex-row lg:justify-between lg:gap-20">
            <div className="flex max-w-full flex-col gap-8 lg:max-w-[640px]">
              <p className="text-base font-semibold text-label uppercase">Case Study</p>
              <h1
                className="text-[32px] leading-tight font-bold text-heading uppercase sm:text-[40px] lg:text-[48px]"
                style={{ fontStretch: '125%' }}
              >
                {study.title}
              </h1>
              <p className="text-base leading-[1.6] text-body sm:text-lg">{study.summary}</p>
              {study.tags && (
                <div className="flex flex-wrap gap-2">
                  {study.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-white px-4 py-1.5 text-sm font-medium whitespace-nowrap text-body shadow-[0px_2px_4px_2px_rgba(0,0,0,0.06)]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>

            {hasRoleOrTeam && (
              <div className="flex w-full shrink-0 flex-col gap-8 sm:flex-row sm:gap-12 lg:w-auto lg:flex-col lg:gap-8">
                {study.role && (
                  <div className="flex w-full flex-col gap-5 sm:w-[362px]">
                    <p className="text-base font-semibold text-label uppercase">Role</p>
                    <div className="flex flex-col gap-2">
                      <div className="flex items-center gap-4">
                        <GradientDot slug={study.slug} step={0} />
                        <p className="text-sm font-medium text-heading">{study.role.title}</p>
                      </div>
                      <p className="pl-10 text-sm leading-[1.6] text-muted">{study.role.scope}</p>
                    </div>
                    {study.role.reports && study.role.reports.length > 0 && (
                      <div className="flex flex-col gap-4">
                        {study.role.reports.map((report, i) => (
                          <div key={report} className="flex items-center gap-4">
                            <GradientDot slug={study.slug} step={1 + i} />
                            <p className="text-sm font-medium text-heading">{report}</p>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                )}
                {study.team && study.team.length > 0 && (
                  <div className="flex w-full flex-col gap-5 sm:w-[324px]">
                    <p className="text-base font-semibold text-label uppercase">Team</p>
                    <div className="flex flex-col gap-4">
                      {study.team.map((member, i) => (
                        <div key={member} className="flex items-center gap-4">
                          <GradientDot slug={study.slug} step={1 + reportsCount + i} />
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
          <div className="flex flex-col gap-20 sm:gap-32">
            {study.chapters.map((chapter) => (
              <div key={chapter.index} className="flex w-full flex-col gap-10 sm:gap-12">
                <div className="flex w-full flex-col gap-5 lg:flex-row lg:gap-12">
                  <div className="lg:w-[300px] lg:shrink-0">
                    <p className="text-base font-semibold text-label uppercase">// {chapter.index}</p>
                    <p className="mt-4 text-2xl leading-[1.2] font-bold text-heading sm:text-[28px]">
                      {chapter.title}
                    </p>
                  </div>
                  <div className="flex flex-1 flex-col gap-10 sm:gap-12">
                    <div className="flex flex-col gap-5 text-base leading-[1.6] text-body sm:text-lg">
                      {chapter.body.map((paragraph, i) => (
                        <p key={i}>{paragraph}</p>
                      ))}
                    </div>

                    {chapter.stats && (
                      <div className="flex flex-wrap gap-12">
                        {chapter.stats.map((stat) => (
                          <div key={stat.group} className="flex flex-col gap-5">
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
                      <div className="flex flex-col gap-8">
                        <p className="text-lg font-semibold text-heading">Key Validations</p>
                        <div className="grid grid-cols-1 gap-x-12 gap-y-8 sm:grid-cols-2">
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
        <div className="w-full bg-ink py-16 sm:py-20">
          <div className="mx-auto flex max-w-[1280px] flex-col gap-8 px-6 sm:px-10 lg:px-20">
            <p className="text-base font-semibold text-[#a2a2a2] uppercase">// Results</p>
            <div className="grid grid-cols-2 gap-4 text-white sm:grid-cols-3 md:grid-cols-5">
              {study.metrics.map((metric) => (
                <div key={metric.label} className="flex flex-col items-center gap-1 py-8 text-center sm:py-12">
                  <p className="text-4xl leading-none font-bold sm:text-5xl lg:text-[54px]">{metric.value}</p>
                  <p className="text-sm">{metric.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      <div className="mx-auto flex max-w-[1280px] flex-col gap-16 px-6 pt-20 pb-28 sm:gap-20 sm:px-10 sm:pb-[156px] lg:px-20">
        <CaseStudies studies={otherStudies} heading="More case studies" />
        <Footer />
      </div>
    </div>
  )
}
