import chrisPortrait from '../assets/chris-portrait.jpg'

const EMAIL = 'chrblair@gmail.com'
const MAILTO = `mailto:${EMAIL}?subject=${encodeURIComponent('Hello from chrisblair.design')}`
const LINKEDIN = 'https://www.linkedin.com/in/chrisblair'

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="size-5 shrink-0">
      <path
        d="M4 6h16v12H4V6Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="M4 7l8 6 8-6"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="size-5 shrink-0">
      <path d="M6.94 8.5H3.56V20h3.38V8.5ZM5.25 7.03a1.96 1.96 0 1 0 0-3.92 1.96 1.96 0 0 0 0 3.92ZM20.44 20h-3.37v-5.6c0-1.34-.03-3.06-1.87-3.06-1.87 0-2.16 1.46-2.16 2.96V20H9.68V8.5h3.24v1.57h.05c.45-.85 1.55-1.75 3.2-1.75 3.42 0 4.05 2.25 4.05 5.18V20Z" />
    </svg>
  )
}

// Highlights each wrapped line of text with its own white backdrop, rather
// than one rectangle spanning the whole paragraph — keeps the copy legible
// over the cursor glow's dot trail without hiding the effect entirely.
const HIGHLIGHT =
  'bg-white px-1.5 py-0.5 [-webkit-box-decoration-break:clone] [box-decoration-break:clone]'

export default function Bio() {
  return (
    <section className="flex w-full flex-col items-start gap-10 xl:flex-row xl:justify-between xl:gap-16">
      <div className="flex max-w-[600px] flex-col gap-8">
        <h2 className="w-full text-base font-semibold text-[#2a5c43] uppercase">
          <span className={HIGHLIGHT}>// About</span>
        </h2>
        <div className="flex flex-col gap-4 text-base leading-[1.6] text-body sm:text-lg">
          <p>
            <span className={HIGHLIGHT}>
              I'm a Product Design leader with 15+ years building and scaling products across
              SaaS, fintech, and AI. Hands-on 0→1 builder who partners with founders to move from
              ambiguity to shipped product. Focused on speed, clarity, and driving product-market
              fit.
            </span>
          </p>
          <p>
            <span className={HIGHLIGHT}>
              Currently I'm looking for my next design leadership role at a mission-driven
              company. If you're hiring, building something hard, or just want to compare notes,
              I'd like to hear from you.
            </span>
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <a
            href={MAILTO}
            className="flex items-center gap-2 rounded-full border border-border bg-white px-6 py-3 text-base font-medium text-ink transition-colors hover:bg-ink hover:text-bg"
          >
            <MailIcon />
            {EMAIL}
          </a>
          <a
            href={LINKEDIN}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 rounded-full border border-border bg-white px-6 py-3 text-base font-medium text-ink transition-colors hover:bg-ink hover:text-bg"
          >
            <LinkedInIcon />
            LinkedIn →
          </a>
        </div>
      </div>
      <img
        src={chrisPortrait}
        alt="Chris Blair"
        className="w-full max-w-[280px] shrink-0 object-cover sm:max-w-[320px] xl:w-[340px]"
        style={{ aspectRatio: '382 / 573' }}
      />
    </section>
  )
}
