import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'

export default function Header() {
  return (
    <header className="flex w-full items-center justify-between gap-4">
      <Link to="/" aria-label="Chris Blair, home" className="transition-opacity hover:opacity-70">
        <img src={logo} alt="" className="block size-15 rounded-[15px]" />
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
