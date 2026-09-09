import Bio from '../components/Bio'
import CaseStudies from '../components/CaseStudies'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import StickyHeader from '../components/StickyHeader'

export default function Home() {
  return (
    <div className="min-h-screen w-full">
      <StickyHeader />
      <Hero />

      <div className="mx-auto flex max-w-[1280px] flex-col gap-20 px-6 pt-16 pb-20 sm:gap-28 sm:px-10 sm:pb-24 lg:gap-[164px] lg:px-20 lg:pb-[120px]">
        <CaseStudies />
        <Bio />
        <Footer />
      </div>
    </div>
  )
}
