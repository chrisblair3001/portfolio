import type { ReactNode } from 'react'
import { MemoryRouter } from 'react-router-dom'

/**
 * The root wrapper for anything built with these components. Header, PageShell and the other
 * building blocks render react-router links, which need a router above them; the site gets one
 * from main.tsx, and this gives the same to a design rendered outside the site.
 *
 * It also sets the Night page surface (dark background, body text color, Manrope) that the site's
 * body gets from index.css, so a component dropped into a design is not left on a white page.
 */
export function PortfolioProvider({ children }: { children?: ReactNode }) {
  return (
    <MemoryRouter>
      <div style={{ backgroundColor: 'var(--color-bg)', color: 'var(--color-body)', fontFamily: 'var(--font-sans)' }}>
        {children}
      </div>
    </MemoryRouter>
  )
}
