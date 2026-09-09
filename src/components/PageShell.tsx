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
    <div className="mx-auto flex min-h-screen max-w-[1280px] flex-col gap-16 px-6 pt-16 pb-20 sm:gap-24 sm:px-10 sm:pt-20 sm:pb-[120px] lg:px-20">
      <div className="flex flex-col gap-8 sm:gap-12">
        <Link
          to="/"
          className="w-fit text-sm font-bold text-muted uppercase transition-colors hover:text-heading"
        >
          ← Back home
        </Link>
        <div className="flex flex-col gap-2">
          <p className="text-xl font-semibold text-label sm:text-2xl">{eyebrow}</p>
          <h1
            className="text-[32px] leading-none font-bold text-heading uppercase sm:text-[40px] lg:text-[48px]"
            style={{ fontStretch: '125%' }}
          >
            {title}
          </h1>
        </div>
      </div>
      <div className="flex-1">{children}</div>
      <Footer />
    </div>
  )
}
