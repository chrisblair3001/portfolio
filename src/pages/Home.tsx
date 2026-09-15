import { useEffect } from 'react'
import Bio from '../components/Bio'
import CaseStudies from '../components/CaseStudies'
import CursorGlow from '../components/CursorGlow'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import SectionDots from '../components/SectionDots'
import StickyHeader from '../components/StickyHeader'

export default function Home() {
  // Soft scroll-snap only while the homepage is mounted — the "proximity"
  // variant nudges toward a section boundary once the scroll settles nearby,
  // but never fights the scroll mid-gesture. Reduced-motion users opt out
  // via the media query in index.css.
  useEffect(() => {
    document.documentElement.classList.add('snap-sections')
    return () => document.documentElement.classList.remove('snap-sections')
  }, [])

  return (
    <div className="w-full">
      <StickyHeader />
      <SectionDots />

      <section id="intro" className="snap-start">
        <Hero />
      </section>

      <section
        id="work"
        className="relative flex min-h-screen snap-start flex-col justify-center overflow-hidden"
      >
        <CursorGlow color="teal" />
        <div className="relative z-10 mx-auto w-full max-w-[1280px] px-6 py-24 sm:px-10 lg:px-20">
          <CaseStudies />
        </div>
      </section>

      <section
        id="bio"
        className="relative flex min-h-screen snap-start flex-col overflow-hidden"
      >
        <CursorGlow color="azure" />
        <div className="relative z-10 mx-auto flex w-full max-w-[1280px] flex-1 items-center px-6 pt-28 sm:px-10 lg:px-20">
          <Bio />
        </div>
        <div className="relative z-10 mx-auto w-full max-w-[1280px] px-6 pb-10 sm:px-10 lg:px-20">
          <Footer />
        </div>
      </section>
    </div>
  )
}
