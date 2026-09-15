import PageShell from '../components/PageShell'

const EMAIL = 'chrblair@gmail.com'
const MAILTO = `mailto:${EMAIL}?subject=${encodeURIComponent('Hello from chrisblair.design')}`
const LINKEDIN = 'https://www.linkedin.com/in/chrisblair'

export default function Contact() {
  return (
    <PageShell title="Contact">
      <div className="flex max-w-[600px] flex-col gap-8">
        <p className="text-base leading-[1.6] text-body sm:text-lg">
          I'm looking for my next design leadership role at a mission-driven company. If you're
          hiring, building something hard, or just want to compare notes, I'd like to hear from you.
        </p>

        <div className="flex flex-wrap gap-3">
          <a
            href={MAILTO}
            className="rounded-full border border-border bg-white px-6 py-3 text-base font-medium text-ink transition-colors hover:bg-ink hover:text-bg"
          >
            {EMAIL}
          </a>
          <a
            href={LINKEDIN}
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-border bg-white px-6 py-3 text-base font-medium text-ink transition-colors hover:bg-ink hover:text-bg"
          >
            LinkedIn →
          </a>
        </div>
      </div>
    </PageShell>
  )
}
