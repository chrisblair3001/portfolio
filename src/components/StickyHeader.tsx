import { useEffect, useState } from 'react'
import Header from './Header'

export default function StickyHeader() {
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
      <div className="mx-auto max-w-[1280px] px-6 py-4 sm:px-10 sm:py-6 lg:px-20">
        <Header />
      </div>
    </div>
  )
}
