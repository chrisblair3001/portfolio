import { AnimatePresence, motion, useReducedMotion, type Variants } from 'framer-motion'
import { useEffect, useState, type CSSProperties } from 'react'

const ROTATIONS = [
  { text: 'The age of ai', color: '#f0204d' },
  { text: 'shipping products', color: '#02b690' },
  { text: 'human beings', color: '#2d4bb9' },
  { text: 'hard problems', color: '#e55724' },
  { text: 'Taste & craft', color: '#db1aa0' },
]

const ROTATION_INTERVAL_MS = 3200

// Approximates the per-word decay curve measured from tinywins.com's header
// reveal: an exponential ease-out (max velocity at the start, no bounce)
// rather than a fixed-duration cubic-bezier.
const expoOut = (t: number) => 1 - Math.exp(-6.9 * t)

const STAGGER = 0.04

function StaggeredWords({
  text,
  className,
  style,
}: {
  text: string
  className?: string
  style?: CSSProperties
}) {
  const reduceMotion = useReducedMotion()
  const words = text.split(' ')

  const container: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: reduceMotion ? 0 : STAGGER } },
    exit: {
      transition: { staggerChildren: reduceMotion ? 0 : STAGGER / 2, staggerDirection: -1 },
    },
  }

  const word: Variants = {
    hidden: { y: reduceMotion ? 0 : '145%' },
    visible: { y: '0%', transition: { duration: reduceMotion ? 0 : 0.9, ease: expoOut } },
    exit: { y: reduceMotion ? 0 : '-145%', transition: { duration: reduceMotion ? 0 : 0.35, ease: 'easeIn' } },
  }

  return (
    <motion.span
      variants={container}
      initial="hidden"
      animate="visible"
      exit="exit"
      className={`inline-flex flex-wrap gap-x-[0.28em] ${className ?? ''}`}
      style={style}
    >
      {words.map((w, i) => (
        <span key={i} className="inline-block overflow-hidden">
          <motion.span variants={word} className="inline-block">
            {w}
          </motion.span>
        </span>
      ))}
    </motion.span>
  )
}

export default function Intro() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % ROTATIONS.length)
    }, ROTATION_INTERVAL_MS)
    return () => clearInterval(id)
  }, [])

  const current = ROTATIONS[index]

  return (
    <div
      className="flex w-full flex-col text-[68px] leading-[1.15] font-bold tracking-[-1.44px] uppercase"
      style={{ fontStretch: '125%' }}
    >
      <StaggeredWords text="Design leadership for" className="text-ink" />
      <div className="relative h-[78px] w-full overflow-hidden">
        <AnimatePresence mode="wait">
          <StaggeredWords
            key={current.text}
            text={current.text}
            className="absolute inset-0"
            style={{ color: current.color }}
          />
        </AnimatePresence>
      </div>
    </div>
  )
}
