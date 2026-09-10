import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'

type Job = {
  title: string
  orgLine: string
  meta: string
  bullets: string[]
}

const EXPERIENCE: Job[] = [
  {
    title: 'Design Advisor',
    orgLine: '(Part-time / Contract)  ·  42gen',
    meta: 'Jan 2026 – Aug 2026  ·  Boston, MA (Remote)',
    bullets: [
      'Advising an early-stage founder on product design strategy while evaluating full-time leadership roles.',
    ],
  },
  {
    title: 'Head of Product Design',
    orgLine: '·  Airia',
    meta: 'Feb 2024 – May 2026  ·  Atlanta, GA (Hybrid)',
    bullets: [
      'Joined as the first design leader to build the design function from the ground up, introducing an AI-first design process built on rapid prototyping and tight feedback loops as a leverage system rather than a personal workflow.',
      'Operated as a player-coach, partnering with founders and engineering to define product direction and ship core AI workflows while laying the foundation for future scale.',
    ],
  },
  {
    title: 'Senior Director of Product Design',
    orgLine: '·  Greenlight',
    meta: 'July 2020 – Jan 2024  ·  Atlanta, GA (Remote)',
    bullets: [
      'Led and scaled a design team to 12 designers through a high-growth phase, building the hiring, onboarding, and leveling structure to support that growth.',
      'Matured the design system to drive consistency and speed across a scaling multi-product platform, reducing design-to-engineering handoff friction.',
      'Collaborated with Product and Engineering leadership to improve discovery and planning, increasing the speed and quality of execution org-wide.',
    ],
  },
  {
    title: 'Senior Product Designer',
    orgLine: '·  Drum',
    meta: 'Jan 2020 – June 2020  ·  Atlanta, GA (Hybrid)',
    bullets: ["Owned the company's core app end-to-end, from initial concept through shipped product."],
  },
  {
    title: 'Senior Product Designer',
    orgLine: '·  Mailchimp (Intuit)',
    meta: 'April 2015 – Jan 2020  ·  Atlanta, GA (Hybrid)',
    bullets: [
      'Shaped audience management, integrations, and developer-tool experiences across the core platform.',
      'Contributed to the design system and facilitated workshops and research to align teams and clarify product direction.',
    ],
  },
  {
    title: 'UI Design Lead',
    orgLine: '·  AirWatch (VMware)',
    meta: 'June 2008 – April 2015  ·  Atlanta, GA',
    bullets: [
      'Led design as the company scaled from startup to category leader in Mobile Device Management.',
      'Designed enterprise web and mobile applications and established scalable UI patterns for complex workflows.',
    ],
  },
]

const CAPABILITIES: { group: string; items: string[] }[] = [
  {
    group: 'Leadership',
    items: [
      'AI Adoption & Change Management',
      'Founder & Exec Partnership',
      'Scaling Design Orgs',
      'Hiring & Team Development',
      'Player-Coach Execution',
    ],
  },
  {
    group: 'Craft & Strategy',
    items: [
      'AI-Augmented Workflows',
      '0 → 1 Product Development',
      'Design Systems',
      'UX Research',
      'Product Strategy',
    ],
  },
  {
    group: 'Tools',
    items: [
      'Figma (FigJam, Make, Weave)',
      'Adobe Creative Suite',
      'Claude (Code, Design, Cowork)',
      'Google Stitch',
      'Lovable',
    ],
  },
]

const EDUCATION: { degree: string; school: string }[] = [
  { degree: 'Bachelor of Arts, Industrial Design', school: 'Auburn University' },
  {
    degree: 'Associate Degree, Internet Webmaster Technician',
    school: 'Virginia College at Birmingham',
  },
]

// Label-left / content-right row. Stacks on mobile; the print stylesheet in
// index.css forces it back side-by-side and tightens the spacing.
function Row({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div className="resume-row flex flex-col gap-3 md:flex-row md:gap-10">
      <p className="resume-section-label shrink-0 pt-1 text-xs font-bold tracking-wide text-accent uppercase md:w-[150px]">
        {label}
      </p>
      <div className="max-w-[620px] flex-1">{children}</div>
    </div>
  )
}

function Pill({ children }: { children: ReactNode }) {
  return (
    <span className="resume-pill rounded-full border border-hairline px-3 py-1 text-sm whitespace-nowrap text-body">
      {children}
    </span>
  )
}

export default function Resume() {
  return (
    <div className="resume-root mx-auto min-h-screen max-w-[880px] px-6 pt-14 pb-20 sm:px-10 sm:pt-16 lg:px-16 print:min-h-0">
      <div className="resume-chrome flex items-center justify-between print:hidden">
        <Link
          to="/"
          className="text-sm font-bold text-muted uppercase transition-colors hover:text-heading"
        >
          ← Back home
        </Link>
        <button
          type="button"
          onClick={() => window.print()}
          className="rounded-full border border-border px-5 py-2 text-sm font-bold text-ink transition-colors hover:bg-ink hover:text-bg"
        >
          Download PDF
        </button>
      </div>

      <header className="resume-header mt-10 flex flex-wrap items-start justify-between gap-6 border-b border-hairline pb-8 sm:mt-12">
        <div className="flex flex-col leading-tight uppercase" style={{ fontStretch: '125%' }}>
          <h1 className="resume-name text-[28px] font-bold text-ink sm:text-[32px]">Chris Blair</h1>
          <p className="resume-name text-[28px] font-bold text-accent sm:text-[32px]">Design Leader</p>
        </div>
        <div className="resume-contact flex flex-col text-sm text-muted">
          <a href="https://chrisblair.design" className="transition-colors hover:text-heading">
            chrisblair.design
          </a>
          <a href="mailto:chrblair@gmail.com" className="transition-colors hover:text-heading">
            chrblair@gmail.com
          </a>
          <span>205-335-9869</span>
        </div>
      </header>

      <main className="resume-main mt-10 flex flex-col gap-12 sm:mt-12">
        <Row label="Profile">
          <p className="resume-text text-base leading-[1.6] text-body">
            I grow design teams, systems, and AI workflows to keep up with business needs. With 15+
            years in product design for SaaS, fintech, and AI, I've built multi-disciplinary design
            teams at Greenlight and Airia. I know when to hire, improve systems, or use AI. Now, I'm
            ready to join a mission-driven company to solve tough product challenges, boost the team's
            design skills, and satisfy customers.
          </p>
        </Row>

        <Row label="Experience">
          <div className="resume-jobs flex flex-col gap-9">
            {EXPERIENCE.map((job) => (
              <div key={job.title + job.orgLine} className="resume-entry flex flex-col gap-2">
                <div className="flex flex-col gap-0.5">
                  <p className="resume-role-title text-base text-ink">
                    <span className="font-semibold">{job.title} </span>
                    <span className="text-body">{job.orgLine}</span>
                  </p>
                  <p className="resume-text text-sm text-muted">{job.meta}</p>
                </div>
                <ul className="flex list-disc flex-col gap-1 pl-5">
                  {job.bullets.map((bullet, i) => (
                    <li key={i} className="resume-text text-base leading-[1.55] text-body">
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Row>

        <Row label="Capabilities">
          <div className="resume-caps flex flex-col gap-6">
            {CAPABILITIES.map((cap) => (
              <div key={cap.group} className="resume-entry flex flex-col gap-2.5">
                <p className="resume-group-title text-base font-semibold text-ink">{cap.group}</p>
                <div className="flex flex-wrap gap-2">
                  {cap.items.map((item) => (
                    <Pill key={item}>{item}</Pill>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Row>

        <Row label="Education">
          <div className="flex flex-col gap-2.5">
            {EDUCATION.map((ed) => (
              <p key={ed.degree} className="resume-group-title text-base text-ink">
                <span className="font-semibold">{ed.degree} </span>
                <span className="text-body">· {ed.school}</span>
              </p>
            ))}
          </div>
        </Row>
      </main>

      <div className="resume-chrome mt-24 print:hidden">
        <Footer />
      </div>
    </div>
  )
}
