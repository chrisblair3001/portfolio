import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import Footer from './Footer'

type PageShellProps = {
  eyebrow?: string
  title: string
  children: ReactNode
}

export default function PageShell({ eyebrow, title, children }: PageShellProps) {
  return (
    <div className="mx-auto flex min-h-screen max-w-[1152px] flex-col gap-10 px-[clamp(24px,6vw,80px)] pt-16 pb-12 sm:gap-14 sm:pt-20">
      <div className="flex flex-col gap-8 sm:gap-12">
        <Link
          to="/"
          className="w-fit text-sm font-bold text-muted uppercase transition-colors hover:text-accent"
        >
          ← Back home
        </Link>
        <div className="flex flex-col gap-3">
          {eyebrow && (
            <p className="text-[13.6px] font-semibold tracking-[0.02em] text-label uppercase">
              // {eyebrow}
            </p>
          )}
          <h1 className="font-display text-[clamp(32px,5vw,48px)] leading-[0.95] font-bold tracking-[-0.045em] text-heading">
            {title}
          </h1>
        </div>
      </div>
      <div className="flex-1">{children}</div>
      <Footer />
    </div>
  )
}
