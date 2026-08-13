import PageShell from '../components/PageShell'

export default function Bio() {
  return (
    <PageShell eyebrow="About" title="Bio">
      <div className="flex max-w-[720px] flex-col gap-6 text-base leading-[1.6] text-body">
        <p>
          [Placeholder] Add your full bio here — where you grew up, how you got into design, and
          the throughline connecting your work.
        </p>
        <p>
          [Placeholder] Highlight a few pivotal moments or projects that shaped how you lead
          design teams today.
        </p>
        <p>[Placeholder] Close with what you're looking for next.</p>
      </div>
    </PageShell>
  )
}
