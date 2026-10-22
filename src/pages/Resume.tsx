import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'

type Role = {
  title: string
  meta: string
  body: string
  bullets?: string[]
}

type ExperienceEntry = {
  company: string
  companyMeta?: string
  roles: Role[]
}

const EXPERIENCE: ExperienceEntry[] = [
  {
    company: '42gen',
    roles: [
      {
        title: 'Lead Product Designer (Contract)',
        meta: 'May 2026 – Aug 2026  ·  Boston, MA (Remote)',
        body: 'Leads design for the Argo mobile and web applications at a startup company, defining the design language and system, mapping core user flows, and shaping key features and journeys across the experience. Established qualitative user testing practices and applied AI extensively throughout the design process.',
        bullets: [
          'Created and evaluated a set of user personas, aligning a stalled product team on inventory and property management for the Argo home management app, and converting features into a defined product strategy and roadmap.',
        ],
      },
    ],
  },
  {
    company: 'Airia',
    roles: [
      {
        title: 'Head of Product Design',
        meta: 'Feb 2024 – May 2026  ·  Atlanta, GA',
        body: 'Design leader and player-coach who built a product design function from scratch, managing a distributed team of up to eight designers across Latin America. Established design review practices and collaborated closely with Product and Engineering to integrate design into core product decisions. Led multiple projects while remaining hands-on, and introduced AI to enhance team workflows and personal design execution, improving output organization-wide.',
        bullets: [
          'Scaled adoption with ~500 enterprise customers by redesigning the AI chat experience for premium usability and security, and launching features like deep thinking mode, file and slide creation, and automated tasks to shape the product vision for agentic AI workflows.',
          'Established a connected design system spanning Figma, Storybook, and Claude Code that enforced consistent UX and surfaced drift automatically, setting strategic direction with design leadership to raise the quality bar as AI tooling accelerated build velocity.',
        ],
      },
    ],
  },
  {
    company: 'Greenlight Financial Technology',
    companyMeta: 'Atlanta, GA  ·  Jan 2020 – Jan 2024',
    roles: [
      {
        title: 'Senior Director, Product Design',
        meta: 'Jan 2022 – Jan 2024',
        body: 'Managed and grew a 14-person design team, expanding capabilities across cross-functional collaboration, design system maturity, user research, and new project exploration.',
        bullets: [
          "Drove a 10% lift in plan upgrades, doubled Safety Hub engagement, and cut support contacts 5% by leading a large-scale redesign of the app's information architecture that improved feature discovery across the platform.",
        ],
      },
      {
        title: 'Director, Product Design',
        meta: 'Jan 2021 – Jan 2022',
        body: 'Directed UX design across the entire product surface while building the design team, staffing cross-functional teams, and keeping initiatives on track. Ran design reviews and team rituals to sustain a consistently high quality bar.',
        bullets: [
          'Grew the design team from 3 to 14 by creating a growth plan, justifying headcount, and implementing weekly cadences to manage design debt during rapid growth while mentoring and fostering career development.',
        ],
      },
      {
        title: 'Senior Product Designer',
        meta: 'Jan 2020 – Jan 2021',
        body: 'Designed end-to-end flows for core user journeys, including chores, allowance, and card management, supporting an ongoing redesign effort in close collaboration with the VP of Design. Partnered with the Brand team to deliver a seamless customer experience across touchpoints.',
      },
    ],
  },
  {
    company: 'Drum',
    roles: [
      {
        title: 'Lead Designer',
        meta: 'Jan 2020 – Jun 2020  ·  Atlanta, GA',
        body: 'Lead designer for Scout, a social recommendation app, conducting design sprints, creating prototypes, designing user flows and roadmaps, and working with developers. Collaborated with a Ukrainian team and managed a local designer.',
        bullets: [
          'Secured stakeholder alignment on the Scout app with a clear product roadmap and prototypes, using design thinking and rapid prototyping to focus the team on core features and user flows through strong communication skills that built cross-functional trust and influence.',
        ],
      },
    ],
  },
  {
    company: 'Mailchimp (now Intuit)',
    roles: [
      {
        title: 'Senior Product Designer',
        meta: 'May 2015 – Jan 2020  ·  Atlanta, GA',
        body: 'Served as Product Designer across multiple cross-functional teams spanning enterprise email (Mandrill), developer support, ecommerce, audience management, and Mailchimp.com. Designed and tested user flows, conducted user research, and contributed to in-app branding.',
        bullets: [
          "Conducted a 20-participant study and multi-survey campaign with a third-party partner to gather tagging, demographic, and location data for a comprehensive audience management redesign, demonstrating creativity in research design and communication with stakeholders to assess users' perception of the platform as a CRM.",
          'Refreshed brand expression across the core application by co-creating and rolling out a new illustration system that carried the product until a full brand refresh two years later, and was widely imitated industry-wide.',
          "Boosted usage of Mailchimp's pop-up form builder through a full redesign that made list-building easier, and extended the new pattern to rebuild the additional four sign-up form types on that foundation.",
        ],
      },
    ],
  },
  {
    company: 'AirWatch by VMware (now Workspace ONE UEM)',
    roles: [
      {
        title: 'UX Design Lead',
        meta: 'Jan 2012 – Apr 2015  ·  Atlanta, GA',
        body: 'Set UX direction and oversaw design projects across an enterprise admin console and end-user mobile applications, leading a distributed team of 6 designers across local and India-based locations. Operated as a player-coach, contributing directly as Design Lead alongside management responsibilities.',
        bullets: [
          'Led the redesign and rebuild of a rigid proprietary platform onto open standards, breaking through a platform-wide UX quality ceiling while personally owning both the UX design and the entire front-end codebase to demonstrate design leadership and mastery of end-to-end delivery.',
          "Co-led an autonomous ground-up redesign of the platform's navigation and core product areas, clearing accumulated UX debt and delivering a flagship release that the founder credited as a contributing factor in the company's ~$1.5B acquisition while strengthening product strategy across core journeys.",
        ],
      },
    ],
  },
]

const EARLY_CAREER = 'Web Designer · Southern Web Group (now SiteCare)  ·  Multimedia Designer · AL.com'

const HIGHLIGHTS: { lead: string; body: string }[] = [
  {
    lead: 'Design org building and scaling.',
    body: "Scaled Greenlight's design team from 3 to 14 designers, building the hiring, onboarding, and leveling structure that let design keep pace with a high-growth fintech.",
  },
  {
    lead: '0 → 1 function creation.',
    body: 'Joined Airia as its first design leader and stood up the entire design function — team, rituals, and system — from nothing.',
  },
  {
    lead: 'AI-first design practice.',
    body: 'Built and ran a production AI-first design process linking a Figma design library, Storybook, and Claude Code to keep UX consistent and surface drift automatically.',
  },
  {
    lead: 'Measurable product impact.',
    body: "Led Greenlight's information architecture redesign, producing a 10% increase in plan upgrades, 2× Safety Hub visits, a 5% rise in lesson completions, and a 5% drop in support contacts.",
  },
  {
    lead: 'Enterprise-grade AI product leadership.',
    body: "Directed the redesign of Airia's end-user AI chat experience — deep thinking mode, file and slide creation, automated tasks — bringing a premium chat experience to roughly 500 enterprise customers.",
  },
]

// Each inner array is one printed line; a line can hold more than one labeled
// group (Languages and Systems share a line).
const CAPABILITY_LINES: { group: string; items: string[] }[][] = [
  [
    {
      group: 'Professional & leadership',
      items: [
        'Product Design Leadership',
        'Head of Design',
        'VP of Product Design',
        'Design Director',
        'User Experience (UX) Design',
        'UI Design',
        'Design Systems',
        'Design Operations (DesignOps)',
        'UX Research',
        'Usability Testing',
        'Product Strategy',
        'Product Discovery',
        'Information Architecture',
        'Interaction Design',
        'Prototyping',
        'Figma',
        'AI-Augmented Workflows',
        'AI Adoption & Change Management',
        'Generative AI Tooling',
        '0 to 1 Product Development',
        'SaaS',
        'Fintech',
        'B2B and B2C Product',
        'Mobile App Design',
        'Enterprise Software',
        'Cross-Functional Leadership',
        'Strategic Planning',
        'Team Building & Mentorship',
        'Hiring and Talent Development',
        'Stakeholder Management',
        'Executive Partnership',
        'Agile & Scrum',
        'Roadmap Planning',
        'Remote Team Leadership',
        'Accessibility',
        'Design Quality Governance',
      ],
    },
  ],
  [
    {
      group: 'Software & applications',
      items: [
        'Figma',
        'Figma Make',
        'FigJam',
        'Cursor',
        'Google Stitch',
        'Claude Code',
        'Claude Design',
        'Claude Cowork',
        'ChatGPT',
        'Gemini',
        'Perplexity Computer',
        'Lovable',
        'Adobe Creative Suite',
        'Google Suite',
        'Microsoft Office',
      ],
    },
  ],
  [
    { group: 'Languages', items: ['HTML', 'CSS', 'JavaScript'] },
    { group: 'Systems', items: ['Mac OS', 'Windows'] },
  ],
  [
    {
      group: 'Methodologies',
      items: ['Agile', 'Scrum', 'AI-first design & development', 'Design systems'],
    },
  ],
]

const INDUSTRIES = [
  'Research & development',
  'Information & document management',
  'Advertising & marketing',
  'Multimedia & graphic design',
  'Custom software & IT services',
  'Architecture, engineering & design',
  'Restaurants',
  'Mobile app development',
  'Business intelligence (BI) software',
  'Legal software',
  'CRM software',
  'Storage & system management software',
  'Financial software',
  'Database & file management software',
  'Security software',
  'ERP software',
  'Content & collaboration software',
  'Healthcare software',
]

const EDUCATION: { degree: string; school: string }[] = [
  { degree: 'Bachelor of Arts, Industrial Design', school: 'Auburn University, Auburn, AL' },
  {
    degree: 'Associate Degree, Internet Webmaster Technician',
    school: 'Virginia College at Birmingham',
  },
]

const CERTIFICATION = 'Mobile App Design Bootcamp'

const RECOGNITION = [
  'Interactive Programmer of the Year, Peak 2006 · Birmingham Advertising Federation',
  'Patent: Display screen with a graphical user interface for a management console application',
]

// Label-left / content-right row. Stacks on mobile; the print stylesheet in
// index.css forces it back side-by-side and tightens the spacing.
function Row({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div className="resume-row flex flex-col gap-3 md:flex-row md:gap-10">
      <p className="resume-section-label shrink-0 pt-1 text-xs font-bold tracking-wide text-label uppercase md:w-[150px]">
        {label}
      </p>
      <div className="max-w-[620px] flex-1">{children}</div>
    </div>
  )
}

function RoleBlock({ role, subtitle }: { role: Role; subtitle?: ReactNode }) {
  return (
    <div className="resume-entry flex flex-col gap-2">
      <div className="flex flex-col gap-0.5">
        <p className="resume-role-title text-base text-ink">
          {subtitle ?? <span className="font-semibold">{role.title}</span>}
        </p>
        <p className="resume-text text-sm text-muted">{role.meta}</p>
      </div>
      <p className="resume-text text-base leading-[1.55] text-body">{role.body}</p>
      {role.bullets && (
        <ul className="resume-list flex list-disc flex-col gap-1 pl-5">
          {role.bullets.map((bullet, i) => (
            <li key={i} className="resume-text text-base leading-[1.55] text-body">
              {bullet}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

function ExperienceItem({ entry }: { entry: ExperienceEntry }) {
  if (entry.roles.length === 1 && !entry.companyMeta) {
    const role = entry.roles[0]
    return (
      <RoleBlock
        role={role}
        subtitle={
          <>
            <span className="font-semibold">{role.title} </span>
            <span className="text-body">·  {entry.company}</span>
          </>
        }
      />
    )
  }

  return (
    <div className="resume-group flex flex-col gap-4">
      <div className="flex flex-col gap-0.5">
        <p className="resume-group-title text-base font-semibold text-ink">{entry.company}</p>
        {entry.companyMeta && <p className="resume-text text-sm text-muted">{entry.companyMeta}</p>}
      </div>
      <div className="resume-subroles flex flex-col gap-6 border-l border-hairline pl-4">
        {entry.roles.map((role) => (
          <RoleBlock key={role.title} role={role} subtitle={<span className="font-semibold">{role.title}</span>} />
        ))}
      </div>
    </div>
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
          className="rounded-full border border-border bg-white px-5 py-2 text-sm font-bold text-ink transition-colors hover:bg-ink hover:text-bg"
        >
          Download PDF
        </button>
      </div>

      <header className="resume-header mt-10 flex flex-wrap items-start justify-between gap-x-6 gap-y-5 border-b border-hairline pb-8 sm:mt-12">
        <div className="flex flex-col gap-2">
          <h1
            className="resume-name text-[28px] leading-tight font-bold text-ink uppercase sm:text-[32px]"
            style={{ fontStretch: '125%' }}
          >
            Chris Blair
          </h1>
          <p className="resume-title text-sm font-semibold tracking-wide text-accent uppercase sm:text-base">
            Principal Product Designer
          </p>
        </div>
        <div className="resume-contact flex flex-col gap-0.5 text-sm leading-normal text-muted sm:text-right">
          <p>
            Atlanta, GA · 205-335-9869 ·{' '}
            <a href="mailto:chrblair@gmail.com" className="transition-colors hover:text-heading">
              chrblair@gmail.com
            </a>
          </p>
          <p>
            <a href="https://www.chrisblair.design" className="transition-colors hover:text-heading">
              www.chrisblair.design
            </a>{' '}
            ·{' '}
            <a
              href="https://www.linkedin.com/in/chris-blair-5526a16"
              className="transition-colors hover:text-heading"
            >
              www.linkedin.com/in/chris-blair-5526a16
            </a>
          </p>
        </div>
      </header>

      <main className="resume-main mt-10 flex flex-col gap-12 sm:mt-12">
        <Row label="Profile">
          <div className="flex flex-col gap-3">
            <p className="resume-text text-base leading-[1.6] text-body">
              An award-winning product design leader with 15+ years building and scaling design
              functions across SaaS, fintech, and AI, including a 14-person org scaled from the
              ground up at Greenlight and a full design function built from scratch at Airia. Acts
              as a player-coach, collaborating with founders, stakeholders, and engineering
              leaders to set product direction and product strategy while mentoring designers to
              elevate craft and mastery. Runs an AI-first design practice, integrating Figma,
              Storybook, and Claude Code for consistent visual and behavioral output.
            </p>
            <p className="resume-text text-base leading-[1.6] text-body">
              Targeting senior design leadership at mission-driven, high-growth companies where
              hands-on leadership, design systems, and AI-enhanced workflows are key advantages,
              with a track record of fostering creativity across multi-disciplinary teams.
            </p>
          </div>
        </Row>

        <Row label="Highlights">
          <ul className="resume-list flex list-disc flex-col gap-2.5 pl-5">
            {HIGHLIGHTS.map((h) => (
              <li key={h.lead} className="resume-text text-base leading-[1.55] text-body">
                <span className="font-semibold text-ink">{h.lead}</span> {h.body}
              </li>
            ))}
          </ul>
        </Row>

        <Row label="Experience">
          <div className="resume-jobs flex flex-col gap-9">
            {EXPERIENCE.map((entry) => (
              <ExperienceItem key={entry.company} entry={entry} />
            ))}
            <div className="resume-entry flex flex-col gap-1">
              <p className="resume-group-title text-base font-semibold text-ink">Early career</p>
              <p className="resume-text text-base leading-[1.55] text-body">{EARLY_CAREER}</p>
            </div>
          </div>
        </Row>

        <Row label="Capabilities">
          <div className="resume-caps flex flex-col gap-3">
            {CAPABILITY_LINES.map((line) => (
              <p
                key={line[0].group}
                className="resume-entry resume-text text-base leading-[1.55] text-body"
              >
                {line.map((cap, i) => (
                  <span key={cap.group}>
                    {i > 0 ? ' ' : null}
                    <span className="resume-group-title font-semibold text-ink">{cap.group}: </span>
                    {cap.items.join('  ·  ')}
                  </span>
                ))}
              </p>
            ))}
          </div>
        </Row>

        <Row label="Industries">
          <p className="resume-text text-base leading-[1.55] text-body">
            {INDUSTRIES.join('  ·  ')}
          </p>
        </Row>

        <Row label="Education">
          <div className="flex flex-col gap-2.5">
            {EDUCATION.map((ed) => (
              <p key={ed.degree} className="resume-group-title text-base text-ink">
                <span className="font-semibold">{ed.degree} </span>
                <span className="text-body">· {ed.school}</span>
              </p>
            ))}
            <p className="resume-text text-base text-body">Certification: {CERTIFICATION}</p>
          </div>
        </Row>

        <Row label="Recognition">
          <div className="flex flex-col gap-2">
            {RECOGNITION.map((item) => (
              <p key={item} className="resume-text text-base leading-[1.55] text-body">
                {item}
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
