import PageShell from '../components/PageShell'

export default function Resume() {
  return (
    <PageShell eyebrow="About" title="Resume">
      <div className="flex max-w-[720px] flex-col gap-10">
        <button
          type="button"
          className="w-fit rounded-2xl border border-border px-8 py-4 text-base font-bold text-ink transition-colors hover:bg-ink hover:text-bg"
        >
          Download PDF
        </button>
        <div className="flex flex-col gap-2">
          <h2 className="text-xl font-bold text-heading">Experience</h2>
          <p className="text-base text-muted">[Placeholder] Add your role history here.</p>
        </div>
        <div className="flex flex-col gap-2">
          <h2 className="text-xl font-bold text-heading">Skills</h2>
          <p className="text-base text-muted">[Placeholder] List core skills and tools.</p>
        </div>
        <div className="flex flex-col gap-2">
          <h2 className="text-xl font-bold text-heading">Education</h2>
          <p className="text-base text-muted">[Placeholder] Add education background.</p>
        </div>
      </div>
    </PageShell>
  )
}
