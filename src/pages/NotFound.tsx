import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className="mx-auto flex min-h-screen max-w-[1280px] flex-col items-start justify-center gap-6 px-20">
      <p className="text-2xl font-bold text-heading">Page not found</p>
      <Link to="/" className="text-base font-bold text-accent">
        ← Back home
      </Link>
    </div>
  )
}
