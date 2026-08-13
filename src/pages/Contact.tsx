import PageShell from '../components/PageShell'

export default function Contact() {
  return (
    <PageShell eyebrow="About" title="Contact">
      <div className="flex max-w-[720px] flex-col gap-6">
        <p className="text-base leading-[1.6] text-body">
          [Placeholder] A line inviting people to reach out — what kind of conversations you're
          open to.
        </p>
        <div className="flex flex-col gap-3">
          <a
            href="mailto:hello@example.com"
            className="w-fit text-lg font-bold text-heading transition-colors hover:text-accent"
          >
            Email →
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noreferrer"
            className="w-fit text-lg font-bold text-heading transition-colors hover:text-accent"
          >
            LinkedIn →
          </a>
        </div>
      </div>
    </PageShell>
  )
}
