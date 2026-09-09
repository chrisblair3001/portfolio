import { Link } from 'react-router-dom'

function LogoMark() {
  return (
    <svg viewBox="0 0 38 22" fill="none" className="h-[22px] w-[38px] shrink-0 text-accent">
      <path d="M15.9863 22L28.6676 0H38.0004L25.3192 22H15.9863Z" fill="currentColor" />
      <path d="M0 22L12.6813 0H22.0141L9.33284 22H0Z" fill="currentColor" />
    </svg>
  )
}

export default function Header() {
  return (
    <header className="flex w-full items-center justify-between uppercase">
      <Link
        to="/"
        className="flex items-center gap-2 text-base font-bold text-ink transition-opacity hover:opacity-70 sm:gap-4 sm:text-xl"
      >
        <LogoMark />
        <span className="hidden sm:inline">Chris Blair</span>
      </Link>
      <nav className="flex items-center gap-6 text-sm font-semibold text-ink sm:gap-10 sm:text-base lg:gap-[68px]">
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
