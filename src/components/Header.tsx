import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header className="flex w-full items-center justify-between uppercase">
      <Link to="/" className="flex items-center gap-4 text-xl font-bold text-ink transition-opacity hover:opacity-70">
        <span
          className="size-[47px] shrink-0 rounded-full"
          style={{ background: 'radial-gradient(circle at 32% 40%, #FF1494 0%, #FF9900 100%)' }}
        />
        Chris Blair
      </Link>
      <nav className="flex items-center gap-[68px] text-base font-semibold text-ink">
        <Link to="/resume" className="transition-colors hover:text-accent">
          Resume
        </Link>
        <Link to="/contact" className="transition-colors hover:text-accent">
          Contact
        </Link>
      </nav>
    </header>
  )
}
