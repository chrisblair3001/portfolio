export default function Header() {
  return (
    <header className="flex w-full items-start justify-between">
      <div className="flex flex-col text-[48px] leading-none font-bold capitalize">
        <p className="text-accent">Chris Blair</p>
        <p className="text-ink">Design leader</p>
      </div>
      <button
        type="button"
        className="rounded-2xl border border-border px-8 py-4 text-base font-bold text-ink transition-colors hover:bg-ink hover:text-bg"
      >
        Get in touch
      </button>
    </header>
  )
}
