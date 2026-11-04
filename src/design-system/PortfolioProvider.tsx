import type { ReactNode } from 'react'
import { MemoryRouter } from 'react-router-dom'

/**
 * The root wrapper for anything built with these components. Header, PageShell and the other
 * building blocks render react-router links, which need a router above them; the site gets one
 * from main.tsx, and this gives the same to a design rendered outside the site.
 */
export function PortfolioProvider({ children }: { children?: ReactNode }) {
  return <MemoryRouter>{children}</MemoryRouter>
}
