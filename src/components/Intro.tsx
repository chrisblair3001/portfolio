import { AnimatePresence, motion, useReducedMotion, type Variants } from 'framer-motion'
import { useEffect, useLayoutEffect, useRef, useState, type CSSProperties } from 'react'

const ROTATIONS = ['The age of ai', 'shipping products', 'human beings', 'hard problems', 'Taste & craft']

const BASE_FONT_SIZE = 108

const GRADIENT_IMAGE = 'linear-gradient(93deg, #FF1494 0.24%, #FF9900 58.87%)'

// How far the gradient drifts left/right of its resting position, and how
// long a full back-and-forth cycle takes, to give the sweep a lively,
// dynamic feel rather than a static gradient.
const SWEEP_AMPLITUDE = 80
const SWEEP_PERIOD_MS = 1800

const ROTATION_INTERVAL_MS = 3200

// Approximates the per-word decay curve measured from tinywins.com's header
// reveal: an exponential ease-out (max velocity at the start, no bounce)
// rather than a fixed-duration cubic-bezier.
const expoOut = (t: number) => 1 - Math.exp(-6.9 * t)

const STAGGER = 0.04

function StaggeredWords({
  text,
  className,
  getWordStyle,
}: {
  text: string
  className?: string
  getWordStyle?: (index: number) => CSSProperties | undefined
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
    >
      {words.map((w, i) => (
        <span key={i} className="inline-block overflow-hidden">
          <motion.span variants={word} className="inline-block" style={getWordStyle?.(i)}>
            {w}
          </motion.span>
        </span>
      ))}
    </motion.span>
  )
}

export default function Intro() {
  const [index, setIndex] = useState(0)
  // The gradient must read as one continuous sweep across the whole line
  // (pink on the left, orange on the right), not repeat per word. Since each
  // word is its own DOM node (needed for the per-word stagger animation), we
  // size each word's background to the full line width and shift it left by
  // that word's own offset, so together they reveal one shared gradient.
  const [fit, setFit] = useState({ fontSize: BASE_FONT_SIZE, offsets: [] as number[], lineWidth: 0 })
  // A slow sine drift layered on top of that alignment, so the gradient
  // itself keeps gently sliding left/right instead of sitting static.
  const [sweep, setSweep] = useState(0)
  const wrapperRef = useRef<HTMLDivElement>(null)
  const measureRef = useRef<HTMLDivElement>(null)
  const reduceMotion = useReducedMotion()

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % ROTATIONS.length)
    }, ROTATION_INTERVAL_MS)
    return () => clearInterval(id)
  }, [])

  useEffect(() => {
    if (reduceMotion) return
    let frame: number
    const animate = (time: number) => {
      setSweep(Math.sin((time / SWEEP_PERIOD_MS) * Math.PI * 2) * SWEEP_AMPLITUDE)
      frame = requestAnimationFrame(animate)
    }
    frame = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(frame)
  }, [reduceMotion])

  const current = ROTATIONS[index]
  const currentWords = current.split(' ')

  // Most rotation phrases fit the 108px design spec exactly; a couple of the
  // longer ones (e.g. "shipping products") would overflow the content column
  // at that size, so measure each phrase against a hidden, non-wrapping
  // clone and shrink just that phrase down to fit instead of capping every
  // phrase to the worst case. The same clone's word positions (scaled down
  // to match) drive the gradient math above.
  useLayoutEffect(() => {
    const measureEl = measureRef.current
    const maxWidth = wrapperRef.current?.clientWidth
    if (!measureEl || !maxWidth) return
    const naturalWidth = measureEl.offsetWidth
    const scale = naturalWidth > maxWidth ? maxWidth / naturalWidth : 1
    const wordEls = Array.from(measureEl.children) as HTMLElement[]
    setFit({
      fontSize: scale * BASE_FONT_SIZE,
      offsets: wordEls.map((w) => w.offsetLeft * scale),
      lineWidth: naturalWidth * scale,
    })
  }, [current])

  // The gradient canvas is padded by the sweep amplitude on each side so the
  // drift always slides within it, never sliding the flat pink/orange ends
  // of the gradient into view.
  const getWordStyle = (i: number): CSSProperties => ({
    backgroundImage: GRADIENT_IMAGE,
    backgroundSize: `${fit.lineWidth + SWEEP_AMPLITUDE * 2}px 100%`,
    backgroundPosition: `${-(fit.offsets[i] ?? 0) - SWEEP_AMPLITUDE + sweep}px 0`,
    WebkitBackgroundClip: 'text',
    backgroundClip: 'text',
    color: 'transparent',
    fontSize: fit.fontSize,
  })

  return (
    <div
      ref={wrapperRef}
      className="flex w-full flex-col text-[108px] leading-[0.95] font-bold tracking-[-2.16px] uppercase"
      style={{ fontStretch: '115%' }}
    >
      <StaggeredWords text="Design leadership for" className="text-ink" />
      <div className="relative flex h-[124px] w-full items-center overflow-hidden">
        <div
          ref={measureRef}
          aria-hidden
          className="pointer-events-none absolute top-0 left-0 -z-10 flex w-max gap-x-[0.28em] whitespace-nowrap opacity-0"
          style={{ fontSize: BASE_FONT_SIZE }}
        >
          {currentWords.map((w, i) => (
            <span key={i}>{w}</span>
          ))}
        </div>
        <AnimatePresence mode="wait">
          <StaggeredWords
            key={current}
            text={current}
            className="absolute inset-0 items-center leading-none"
            getWordStyle={getWordStyle}
          />
        </AnimatePresence>
      </div>
    </div>
  )
}
