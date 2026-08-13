import { motion } from 'framer-motion'
import { useState } from 'react'
import About from '../components/About'
import CaseStudies from '../components/CaseStudies'
import Divider from '../components/Divider'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Profile from '../components/Profile'
import type { CaseStudy } from '../data/caseStudies'

export default function Home() {
  const [hoveredStudy, setHoveredStudy] = useState<CaseStudy | null>(null)

  return (
    <motion.div
      animate={{ backgroundColor: hoveredStudy?.bgColor ?? '#fafaf8' }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="min-h-screen w-full"
    >
      <div className="mx-auto flex max-w-[1280px] flex-col items-center gap-24 px-20 pt-20 pb-[120px]">
        <Header />
        <Profile />
        <Divider />
        <CaseStudies onHoverChange={setHoveredStudy} />
        <Divider />
        <About />
        <Footer />
      </div>
    </motion.div>
  )
}
