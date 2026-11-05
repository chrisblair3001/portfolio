import { useEffect, useState } from 'react'
import Header from './Header'

type StickyHeaderProps = {
  // `wide` lines the header up with the case study pages' wider (1280px) column; the default
  // matches the home page and the simpler pages.
  wide?: boolean
}

export default function StickyHeader({ wide = false }: StickyHeaderProps) {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 0)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div
      className={`fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300 ${
        scrolled ? 'border-hairline bg-bg/90 backdrop-blur-sm' : 'border-transparent bg-transparent'
      }`}
    >
      <div
        className={`mx-auto py-5 sm:py-7 ${
          wide ? 'max-w-[1280px] px-6 sm:px-10 lg:px-20' : 'max-w-[1088px] px-[clamp(24px,6vw,80px)]'
        }`}
      >
        <Header />
      </div>
    </div>
  )
}
