import Bio from '../components/Bio'
import CaseStudies from '../components/CaseStudies'
import Footer from '../components/Footer'
import Intro from '../components/Intro'
import StickyHeader from '../components/StickyHeader'

export default function Home() {
  return (
    <div className="min-h-screen w-full">
      <StickyHeader />

      <div className="mx-auto flex max-w-[1280px] flex-col gap-[164px] px-20 pt-36 pb-[120px]">
        <Intro />
        <CaseStudies />
        <Bio />
        <Footer />
      </div>
    </div>
  )
}
