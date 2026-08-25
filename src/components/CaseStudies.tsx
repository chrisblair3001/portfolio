import { motion, type Variants } from 'framer-motion'
import { Link } from 'react-router-dom'
import { caseStudies as allCaseStudies, type CaseStudy } from '../data/caseStudies'
import Divider from './Divider'

// Matches the curve wearecollins.com uses for its Programs list hover state
const EASE_OUT_CUBIC = [0.215, 0.61, 0.355, 1] as const

const bgVariants: Variants = {
  rest: { opacity: 0, scale: 1.02 },
  hover: { opacity: 1, scale: 1, transition: { duration: 0.45, ease: EASE_OUT_CUBIC } },
}

const titleVariants: Variants = {
  rest: { x: 0, color: 'var(--color-ink)' },
  hover: { x: 8, color: '#ffffff', transition: { duration: 0.25, ease: EASE_OUT_CUBIC } },
}

const taglineVariants: Variants = {
  rest: { color: 'var(--color-base-secondary)' },
  hover: { color: '#f2f2f2', transition: { duration: 0.25, ease: EASE_OUT_CUBIC } },
}

const arrowVariants: Variants = {
  rest: { opacity: 0, x: 8, color: 'var(--color-ink)' },
  hover: { opacity: 1, x: -4, color: '#ffffff', transition: { duration: 0.4, ease: EASE_OUT_CUBIC } },
}

function ArrowIcon() {
  return (
    <motion.svg viewBox="0 0 12 12" fill="none" variants={arrowVariants} className="size-5 shrink-0">
      <path
        d="M1.5 6H10.5M6.25 10.25L10.5 6L6.25 1.75"
        stroke="currentColor"
        strokeWidth="0.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </motion.svg>
  )
}

type CaseStudiesProps = {
  studies?: CaseStudy[]
  heading?: string
}

export default function CaseStudies({ studies = allCaseStudies, heading = 'Case studies' }: CaseStudiesProps) {
  return (
    <section className="flex w-full flex-col gap-12">
      <h2 className="w-full text-xl text-ink uppercase">{heading}</h2>
      <div className="group/list flex w-full flex-col">
        {studies.map((study, i) => (
          <div key={study.slug}>
            <motion.div initial="rest" whileHover="hover" animate="rest" className="relative">
              <motion.div
                variants={bgVariants}
                className="pointer-events-none absolute -inset-x-[18px] inset-y-0 rounded-2xl bg-ink"
              />
              <Link
                to={`/case-studies/${study.slug}`}
                className="relative z-10 flex w-full items-center justify-between gap-8 py-8 opacity-100 transition-opacity duration-300 group-has-[a:hover]/list:opacity-45 hover:!opacity-100"
              >
                <motion.p
                  variants={titleVariants}
                  className="w-[300px] shrink-0 text-4xl font-bold tracking-[-0.72px] uppercase"
                  style={{ fontStretch: '125%' }}
                >
                  {study.shortTitle ?? study.title}
                </motion.p>
                <motion.p variants={taglineVariants} className="flex-1 text-base">
                  {study.tagline ?? study.summary}
                </motion.p>
                <ArrowIcon />
              </Link>
            </motion.div>
            {i < studies.length - 1 && <Divider />}
          </div>
        ))}
      </div>
    </section>
  )
}
