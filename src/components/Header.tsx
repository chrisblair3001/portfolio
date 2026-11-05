import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header className="flex w-full items-center justify-between gap-4">
      <Link
        to="/"
        className="font-display text-[17px] font-bold text-heading uppercase transition-opacity hover:opacity-70"
      >
        Chris Blair
      </Link>
      <nav className="flex items-center">
        <Link
          to="/resume"
          className="rounded-full border border-border bg-bg px-5 py-2 text-xs font-bold tracking-[0.02em] text-ink uppercase transition-colors duration-200 hover:bg-ink hover:text-bg"
        >
          Resume
        </Link>
      </nav>
    </header>
  )
}
