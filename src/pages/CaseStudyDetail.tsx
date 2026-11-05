import {
  ClipboardList,
  Compass,
  Cpu,
  Crown,
  Layers,
  Palette,
  PenTool,
  PencilRuler,
  Target,
  Terminal,
  TrendingUp,
  UserRound,
  type LucideIcon,
} from 'lucide-react'
import { Link, useParams } from 'react-router-dom'
import CaseStudies from '../components/CaseStudies'
import Divider from '../components/Divider'
import Footer from '../components/Footer'
import ImageGallery from '../components/ImageGallery'
import StackBlock from '../components/StackBlock'
import StickyHeader from '../components/StickyHeader'
import { caseStudies } from '../data/caseStudies'

const LABEL = 'text-[13.6px] font-semibold tracking-[0.02em] text-label uppercase'
const CHIP =
  'rounded-full border border-border px-4 py-1.5 text-sm font-medium whitespace-nowrap text-body'

// Small icons beside the role and team entries, so each row reads at a glance. Every title gets
// its own icon for what the person does, so no two rows on a page look alike. A title that isn't
// listed here falls back to a plain person: add it to get a proper icon.
const PEOPLE_ICONS: Record<string, LucideIcon> = {
  'Designer & Builder': PencilRuler,
  'Design Director': Compass,
  'Director, Product Design': Compass,
  'Lead Designer': PenTool,
  'Lead Product Designer': PenTool,
  'Senior Designer': Layers,
  CTO: Cpu,
  'Chief Product Officer': Crown,
  'Director of Product, End Users': Target,
  'Director of Product, Growth': TrendingUp,
  'Senior Product Manager': ClipboardList,
  'Claude Code': Terminal,
  'Claude Design': Palette,
}

const iconFor = (title: string): LucideIcon => PEOPLE_ICONS[title] ?? UserRound

function RowIcon({ icon: Icon }: { icon: LucideIcon }) {
  return <Icon aria-hidden className="size-5 shrink-0 text-label" strokeWidth={1.75} />
}

export default function CaseStudyDetail() {
  const { slug } = useParams()
  const index = caseStudies.findIndex((s) => s.slug === slug)
  const study = caseStudies[index]

  if (!study) {
    return (
      <div className="mx-auto flex min-h-screen max-w-[1280px] flex-col items-start justify-center gap-6 px-6 sm:px-10 lg:px-20">
        <p className="font-display text-[clamp(32px,5vw,48px)] leading-[0.95] font-bold tracking-[-0.045em] text-heading">
          Case study not found
        </p>
        <Link to="/" className="text-sm font-bold text-accent uppercase">
          ← Back home
        </Link>
      </div>
    )
  }

  const others = caseStudies.filter((s) => s.slug !== study.slug)
  const hasRoleOrTeam = study.role || (study.team && study.team.length > 0)

  return (
    <div className="min-h-screen w-full bg-bg">
      <StickyHeader wide />

      <div className="mx-auto flex max-w-[1280px] flex-col gap-16 px-6 pt-36 pb-28 sm:gap-20 sm:px-10 sm:pt-40 sm:pb-[156px] lg:px-20 lg:pt-48">
        <div className="flex flex-col gap-10">
          <div className="flex w-full flex-col items-start gap-10 lg:flex-row lg:justify-between lg:gap-20">
            <div className="flex max-w-full flex-col gap-8 lg:max-w-[640px]">
              <p className={LABEL}>Case Study</p>
              <h1 className="font-display text-[clamp(40px,6vw,64px)] leading-[0.95] font-bold tracking-[-0.045em] text-heading">
                {study.title}
              </h1>
              <p className="text-base leading-[1.6] text-body sm:text-lg">{study.summary}</p>
              {study.tags && (
                <div className="flex flex-wrap gap-2">
                  {study.tags.map((tag) => (
                    <span key={tag} className={CHIP}>
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
                    <p className={LABEL}>Role</p>
                    <div className="flex flex-col gap-2">
                      <div className="flex items-center gap-4">
                        <RowIcon icon={iconFor(study.role.title)} />
                        <p className="text-sm font-medium text-heading">{study.role.title}</p>
                      </div>
                      <p className="pl-9 text-sm leading-[1.6] text-muted">{study.role.scope}</p>
                    </div>
                    {study.role.reports && study.role.reports.length > 0 && (
                      <div className="flex flex-col gap-4">
                        {study.role.reports.map((report) => (
                          <div key={report} className="flex items-center gap-4">
                            <RowIcon icon={iconFor(report)} />
                            <p className="text-sm font-medium text-heading">{report}</p>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                )}
                {study.team && study.team.length > 0 && (
                  <div className="flex w-full flex-col gap-5 sm:w-[324px]">
                    <p className={LABEL}>Team</p>
                    <div className="flex flex-col gap-4">
                      {study.team.map((member) => (
                        <div key={member} className="flex items-center gap-4">
                          <RowIcon icon={iconFor(member)} />
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
                    <p className="font-mono text-[13px] font-medium text-label">{chapter.index}</p>
                    <p className="mt-4 font-display text-[clamp(26px,3vw,32px)] leading-[1.1] font-bold tracking-[-0.04em] text-heading">
                      {chapter.title}
                    </p>
                  </div>
                  <div className="flex min-w-0 flex-1 flex-col gap-10 sm:gap-12">
                    <div className="flex flex-col gap-5 text-base leading-[1.6] text-body sm:text-lg">
                      {chapter.body.map((paragraph, i) => (
                        <p key={i}>{paragraph}</p>
                      ))}
                    </div>

                    {chapter.stats && (
                      <div className="flex flex-wrap gap-12">
                        {chapter.stats.map((stat) => (
                          <div key={stat.group} className="flex flex-col gap-5">
                            <p className="font-display text-lg font-bold tracking-[-0.02em] text-heading">
                              {stat.group}
                            </p>
                            <div className="flex flex-wrap gap-4">
                              {stat.chips.map((chip) => (
                                <span key={chip} className={CHIP}>
                                  {chip}
                                </span>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    )}

                    {chapter.stack && <StackBlock sections={chapter.stack} />}

                    {chapter.validations && (
                      <div className="flex flex-col gap-8">
                        <p className="font-display text-lg font-bold tracking-[-0.02em] text-heading">
                          Key Validations
                        </p>
                        <div className="grid grid-cols-1 gap-x-12 gap-y-8 sm:grid-cols-2">
                          {chapter.validations.map((v) => (
                            <div key={v.title} className="flex flex-col gap-1">
                              <p className="text-base font-semibold text-heading before:mr-2 before:text-accent before:content-['•']">
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

                {chapter.gallery && (
                  // Start the first image under the paragraph, not at the left edge. The offset is
                  // the title column (300px) plus the gap beside it (48px), which only exists once
                  // the two columns sit side by side at lg.
                  <ImageGallery images={chapter.gallery} inset="lg:pl-[348px]" />
                )}
              </div>
            ))}
          </div>
        )}
      </div>

      {study.metrics && (
        <div className="w-full border-y border-hairline py-16 sm:py-20">
          <div className="mx-auto flex max-w-[1280px] flex-col gap-8 px-6 sm:px-10 lg:px-20">
            <p className="font-mono text-[13px] font-medium tracking-[0.06em] text-label uppercase">
              Results
            </p>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-5">
              {study.metrics.map((metric) => (
                <div key={metric.label} className="flex flex-col items-center gap-2 py-8 text-center sm:py-12">
                  <p className="font-display text-4xl leading-none font-bold tracking-[-0.045em] text-heading sm:text-5xl lg:text-[54px]">
                    {metric.value}
                  </p>
                  <p className="text-sm text-muted">{metric.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      <div className="mx-auto flex max-w-[1280px] flex-col gap-16 px-6 pt-20 pb-12 sm:gap-20 sm:px-10 lg:px-20">
        {others.length > 0 && <CaseStudies studies={others} heading="More case studies" />}
        <Footer />
      </div>
    </div>
  )
}
