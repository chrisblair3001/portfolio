import Bio from '../components/Bio'
import CaseStudies from '../components/CaseStudies'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import Reveal from '../components/Reveal'
import SectionDots from '../components/SectionDots'
import StickyHeader from '../components/StickyHeader'
import { caseStudies } from '../data/caseStudies'

const SECTION = 'mx-auto flex min-h-screen w-full max-w-[1088px] flex-col justify-center px-[clamp(24px,6vw,80px)] py-[120px]'

export default function Home() {
  return (
    <div className="w-full">
      <StickyHeader />
      <SectionDots />

      <section id="intro">
        <Hero />
      </section>

      <section id="work" className={SECTION}>
        <Reveal>
          <CaseStudies studies={caseStudies} />
        </Reveal>
      </section>

      <section id="bio" className={SECTION}>
        <Reveal>
          <Bio />
        </Reveal>
      </section>

      <div className="mx-auto w-full max-w-[1088px] px-[clamp(24px,6vw,80px)] pb-12">
        <Footer />
      </div>
    </div>
  )
}
