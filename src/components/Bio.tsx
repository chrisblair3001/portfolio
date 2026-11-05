import chrisPortrait from '../assets/chris-portrait.jpg'

const EMAIL = 'chrblair@gmail.com'
const MAILTO = `mailto:${EMAIL}?subject=${encodeURIComponent('Hello from chrisblair.design')}`
const LINKEDIN = 'https://www.linkedin.com/in/chris-blair-5526a16'

const PILL =
  'rounded-full border border-border bg-bg px-6 py-3 text-[13.6px] font-medium text-ink transition-colors duration-200 hover:bg-ink hover:text-bg'

export default function Bio() {
  return (
    <section className="flex w-full flex-wrap items-start justify-between gap-x-16 gap-y-10">
      <div className="flex max-w-[510px] flex-[1_1_420px] flex-col gap-8">
        <h2 className="text-[13.6px] font-semibold tracking-[0.02em] text-label uppercase">// About</h2>
        <div className="flex flex-col gap-4 text-[15.3px] leading-[1.6] text-body text-pretty">
          <p>
            I'm a Product Design leader with 15+ years building and scaling products across SaaS,
            fintech, and AI. Hands-on 0→1 builder who partners with founders to move from ambiguity
            to shipped product. Focused on speed, clarity, and driving product-market fit.
          </p>
          <p>
            Currently I'm looking for my next design leadership role at a mission-driven company. If
            you're hiring, building something hard, or just want to compare notes, I'd like to hear
            from you.
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <a href={MAILTO} className={PILL}>
            {EMAIL}
          </a>
          <a href={LINKEDIN} target="_blank" rel="noreferrer" className={PILL}>
            LinkedIn →
          </a>
        </div>
      </div>
      <img
        src={chrisPortrait}
        alt="Chris Blair"
        className="aspect-[382/573] w-full max-w-[289px] shrink-0 object-cover"
      />
    </section>
  )
}
