import { AnimatePresence, motion, useReducedMotion, type Variants } from 'framer-motion'
import { useEffect, useLayoutEffect, useRef, useState, type CSSProperties } from 'react'

// The fixed first half of the headline. It never changes, so it renders as
// plain static text — only the rotating phrase after it animates.
const STATIC_HEADING = 'Design leadership for'

const ROTATIONS = ['The age of ai', 'shipping products', 'human beings', 'hard problems', 'Taste & craft']

const GRADIENT_IMAGE = 'linear-gradient(93deg, #FF1494 0.24%, #FF9900 58.87%)'

// How far the gradient drifts left/right of its resting position, and how
// long a full back-and-forth cycle takes, to give the sweep a lively,
// dynamic feel rather than a static gradient. Tuned against the desktop
// (108px) heading size — scaled down proportionally at smaller font sizes
// so the drift stays subtle on mobile instead of overshooting a much
// shorter line of text.
const SWEEP_AMPLITUDE = 80
const SWEEP_REFERENCE_FONT_SIZE = 108
const SWEEP_PERIOD_MS = 1800

const ROTATION_INTERVAL_MS = 3600

// The per-letter flip/blur reveal is modeled on vercel.com/domains' animated
// headline: each character tips in on its own, one after another, from a
// slight backward 3D rotation with a soft blur, rather than the whole word
// moving as one unit. "Swift" is Vercel's own name for this easing curve
// (read straight off their site's CSS custom property) — it overshoots past
// 1 just slightly, giving the settle a tiny bit of bounce instead of a dead
// stop.
const SWIFT_EASE = [0.175, 0.885, 0.32, 1.1] as const
const FLIP_DURATION = 0.3
const FLIP_OFFSET = 12
const FLIP_ROTATE = 80
const FLIP_BLUR = 2

// Delay between the start of one character's flip and the next. Kept at
// roughly a third of FLIP_DURATION so the next letter kicks off while the
// current one is only ~30% through its flip — the flips overlap heavily,
// which is what reads as one smooth rippling cascade rather than a row of
// separate little flips.
const LETTER_STAGGER = 0.09

// The exit is deliberately quicker and tighter than the entrance: with
// AnimatePresence mode="wait" the outgoing phrase has to fully clear before
// the next one starts, so a slow staggered exit would leave a dead gap
// where the rotating slot sits empty.
const EXIT_DURATION = 0.22
const EXIT_STAGGER = 0.018

function StaggeredWords({
  text,
  className,
  getLetterStyle,
}: {
  text: string
  className?: string
  getLetterStyle?: (flatIndex: number) => CSSProperties | undefined
}) {
  const reduceMotion = useReducedMotion()
  const words = text.split(' ')

  const container: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: reduceMotion ? 0 : LETTER_STAGGER } },
    exit: {
      transition: { staggerChildren: reduceMotion ? 0 : EXIT_STAGGER, staggerDirection: -1 },
    },
  }

  const letter: Variants = {
    hidden: {
      opacity: 0,
      y: reduceMotion ? 0 : -FLIP_OFFSET,
      rotateX: reduceMotion ? 0 : FLIP_ROTATE,
      filter: reduceMotion ? 'blur(0px)' : `blur(${FLIP_BLUR}px)`,
    },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      filter: 'blur(0px)',
      transition: { duration: reduceMotion ? 0 : FLIP_DURATION, ease: SWIFT_EASE },
    },
    exit: {
      opacity: 0,
      y: reduceMotion ? 0 : FLIP_OFFSET,
      rotateX: reduceMotion ? 0 : -FLIP_ROTATE,
      filter: reduceMotion ? 'blur(0px)' : `blur(${FLIP_BLUR}px)`,
      transition: { duration: reduceMotion ? 0 : EXIT_DURATION, ease: SWIFT_EASE },
    },
  }

  // A flat index across every letter in the whole phrase (not reset per
  // word) — words.map/letters.map below run synchronously in render order,
  // so incrementing this here always lines up with the matching hidden
  // measurement clone, whose letters are walked in that same left-to-right
  // order.
  let flatIndex = 0

  return (
    // display: contents means this element generates no box of its own — its
    // word spans become direct layout children of the shared heading below,
    // so every word (static or rotating) wraps together as one continuous
    // run of text instead of this phrase being an atomic unit that wraps or
    // doesn't as a whole.
    <motion.span
      variants={container}
      initial="hidden"
      animate="visible"
      exit="exit"
      className={`contents ${className ?? ''}`}
    >
      {words.map((w, wi) => (
        <span key={wi} className="mr-[0.28em] inline-block" style={{ perspective: 1000 }}>
          {[...w].map((ch, li) => {
            const i = flatIndex++
            return (
              <motion.span
                key={li}
                variants={letter}
                className="inline-block [backface-visibility:hidden]"
                style={getLetterStyle?.(i)}
              >
                {ch}
              </motion.span>
            )
          })}
        </span>
      ))}
    </motion.span>
  )
}

export default function Intro() {
  const [index, setIndex] = useState(0)
  // The gradient must read as one continuous sweep across the rotating
  // phrase (pink on the left, orange on the right), not repeat per letter.
  // Since each letter is its own DOM node (needed for the per-letter
  // stagger animation), we size each letter's background to the phrase's
  // full width and shift it left by that letter's own offset, so together
  // they reveal one shared gradient.
  const [fit, setFit] = useState({ offsets: [] as number[], lineWidth: 0 })
  // A slow sine drift layered on top of that alignment, so the gradient
  // itself keeps gently sliding left/right instead of sitting static. Kept
  // as a -1..1 phase rather than a pixel value so it can be rescaled by the
  // current font size at use-time (see scaledAmplitude below).
  const [sweepPhase, setSweepPhase] = useState(0)
  const [fontPx, setFontPx] = useState(SWEEP_REFERENCE_FONT_SIZE)
  const rootRef = useRef<HTMLDivElement>(null)
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
      setSweepPhase(Math.sin((time / SWEEP_PERIOD_MS) * Math.PI * 2))
      frame = requestAnimationFrame(animate)
    }
    frame = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(frame)
  }, [reduceMotion])

  const current = ROTATIONS[index]
  const currentWords = current.split(' ')

  // The rotating phrase flows inline right after "for" now, wrapping
  // naturally with the rest of the heading instead of being forced onto its
  // own line. A hidden, non-wrapping clone mirrors the same word/letter
  // structure as the visible version, purely to read off each letter's
  // natural offset for the gradient math above. The heading's own font size
  // is responsive (smaller on mobile), so the clone borrows whatever size is
  // actually rendering right now via getComputedStyle rather than a fixed
  // constant — otherwise the gradient math would stay tuned to the desktop
  // size and drift out of alignment on small screens.
  useLayoutEffect(() => {
    const measure = () => {
      const rootEl = rootRef.current
      const measureEl = measureRef.current
      if (!rootEl || !measureEl) return
      const renderedFontSize = getComputedStyle(rootEl).fontSize
      measureEl.style.fontSize = renderedFontSize
      setFontPx(parseFloat(renderedFontSize) || SWEEP_REFERENCE_FONT_SIZE)
      const letterEls = Array.from(measureEl.querySelectorAll('span > span')) as HTMLElement[]
      setFit({
        offsets: letterEls.map((l) => l.offsetLeft),
        lineWidth: measureEl.offsetWidth,
      })
    }
    measure()
    window.addEventListener('resize', measure)
    return () => window.removeEventListener('resize', measure)
  }, [current])

  // The gradient canvas is padded by the sweep amplitude on each side so the
  // drift always slides within it, never sliding the flat pink/orange ends
  // of the gradient into view.
  const scaledAmplitude = SWEEP_AMPLITUDE * (fontPx / SWEEP_REFERENCE_FONT_SIZE)
  const sweep = sweepPhase * scaledAmplitude

  const getLetterStyle = (i: number): CSSProperties => ({
    backgroundImage: GRADIENT_IMAGE,
    backgroundSize: `${fit.lineWidth + scaledAmplitude * 2}px 100%`,
    backgroundPosition: `${-(fit.offsets[i] ?? 0) - scaledAmplitude + sweep}px 0`,
    WebkitBackgroundClip: 'text',
    backgroundClip: 'text',
    color: 'transparent',
  })

  return (
    <div
      ref={rootRef}
      className="relative w-full text-[40px] leading-[0.95] font-bold tracking-[-0.8px] uppercase sm:text-[56px] sm:tracking-[-1.1px] md:text-[76px] md:tracking-[-1.5px] lg:text-[108px] lg:tracking-[-2.16px]"
      style={{ fontStretch: '125%' }}
    >
      {/* Static half of the heading — plain text, no animation. Uses the same
          contents / mr-[0.28em] structure as the rotating phrase below so the
          two flow together as one continuous line. */}
      <span className="contents text-ink">
        {STATIC_HEADING.split(' ').map((w, i) => (
          <span key={i} className="mr-[0.28em] inline-block">
            {w}
          </span>
        ))}
      </span>
      <div
        ref={measureRef}
        aria-hidden
        className="pointer-events-none absolute -z-10 flex w-max gap-x-[0.28em] whitespace-nowrap opacity-0"
      >
        {currentWords.map((w, wi) => (
          <span key={wi}>
            {[...w].map((ch, li) => (
              <span key={li}>{ch}</span>
            ))}
          </span>
        ))}
      </div>
      <AnimatePresence mode="wait">
        <StaggeredWords key={current} text={current} getLetterStyle={getLetterStyle} />
      </AnimatePresence>
    </div>
  )
}
