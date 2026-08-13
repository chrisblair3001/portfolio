import Divider from './Divider'

export default function Footer() {
  return (
    <footer className="flex w-full flex-col gap-8">
      <Divider />
      <div className="flex w-full items-center justify-between text-sm whitespace-nowrap">
        <p className="font-manrope text-muted">
          © 2025 Chris Blair. Designed &amp; built as a living monograph.
        </p>
        <div className="flex items-start gap-6 font-bold text-heading uppercase">
          <p>LinkedIn</p>
          <p>Email</p>
        </div>
      </div>
    </footer>
  )
}
