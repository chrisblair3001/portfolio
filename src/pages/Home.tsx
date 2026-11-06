import { useEffect } from 'react'
import Bio from '../components/Bio'
import CaseStudies from '../components/CaseStudies'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import Reveal from '../components/Reveal'
import SectionDots from '../components/SectionDots'
import StickyHeader from '../components/StickyHeader'
import { caseStudies } from '../data/caseStudies'

const SECTION = 'mx-auto flex min-h-screen w-full max-w-[1152px] flex-col justify-center px-[clamp(24px,6vw,80px)] py-[120px]'

// Soft scroll-snap while the homepage is mounted. "proximity" only pulls toward a section start once
// the scroll has settled near one, so it never fights the scroll gesture. It is set on <html> from
// here, and removed on leave, so other routes scroll plainly.
const SNAP: React.CSSProperties = { scrollSnapAlign: 'start' }

export default function Home() {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const root = document.documentElement
    root.style.scrollSnapType = 'y proximity'
    return () => {
      root.style.scrollSnapType = ''
    }
  }, [])

  return (
    <div className="w-full">
      <StickyHeader />
      <SectionDots />

      <section id="intro" style={SNAP}>
        <Hero />
      </section>

      <section id="work" className={SECTION} style={SNAP}>
        <Reveal>
          <CaseStudies studies={caseStudies} />
        </Reveal>
      </section>

      <section id="bio" className={SECTION} style={SNAP}>
        <Reveal>
          <Bio />
        </Reveal>
      </section>

      <div className="mx-auto w-full max-w-[1152px] px-[clamp(24px,6vw,80px)] pb-12">
        <Footer />
      </div>
    </div>
  )
}
