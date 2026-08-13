import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import Footer from './Footer'

type PageShellProps = {
  eyebrow: string
  title: string
  children: ReactNode
}

export default function PageShell({ eyebrow, title, children }: PageShellProps) {
  return (
    <div className="mx-auto flex min-h-screen max-w-[1280px] flex-col gap-24 px-20 pt-20 pb-[120px]">
      <div className="flex flex-col gap-12">
        <Link
          to="/"
          className="w-fit text-sm font-bold text-muted uppercase transition-colors hover:text-heading"
        >
          ← Back home
        </Link>
        <div className="flex flex-col gap-2">
          <p className="text-2xl font-semibold text-label">{eyebrow}</p>
          <h1 className="text-[48px] leading-none font-bold text-heading capitalize">{title}</h1>
        </div>
      </div>
      <div className="flex-1">{children}</div>
      <Footer />
    </div>
  )
}
