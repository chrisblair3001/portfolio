import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header className="flex w-full items-center justify-between text-xl text-ink uppercase">
      <Link to="/" className="transition-colors hover:text-accent">
        Chris Blair
      </Link>
      <nav className="flex items-center gap-[68px]">
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
