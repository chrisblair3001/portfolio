import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className="mx-auto flex min-h-screen max-w-[1088px] flex-col items-start justify-center gap-6 px-[clamp(24px,6vw,80px)]">
      <p className="font-display text-[clamp(32px,5vw,48px)] leading-[0.95] font-bold tracking-[-0.045em] text-heading">Page not found</p>
      <Link to="/" className="text-sm font-bold text-accent uppercase">
        ← Back home
      </Link>
    </div>
  )
}
