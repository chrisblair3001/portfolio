import { useReducedMotion } from 'framer-motion'
import { useCallback, useEffect, useLayoutEffect, useRef, useState, type CSSProperties } from 'react'

// The fixed first half of the headline is plain text; only the phrase after it rotates.
const STATIC_HEADING = 'Design leadership for'
const PHRASES = ['the age of AI', 'shipping products', 'human beings', 'hard problems', 'taste & craft']

const ROTATE_MS = 3600 // how long each phrase stays before the next one takes over
const EXIT_GAP_MS = 400 // after the exit starts, how long until the next phrase begins

// Letters rise into place one after another, with a slight overshoot; the old phrase rises away faster.
const ENTER = 'rise-in 560ms cubic-bezier(0.175, 0.885, 0.32, 1.275)'
const EXIT = 'rise-out 220ms cubic-bezier(0.6, 0, 0.8, 0.2)'
const ENTER_STAGGER_MS = 28
const EXIT_STAGGER_MS = 8

// The gradient drifts side to side around its resting position. The amplitude is tuned for the
// largest headline size and scaled down with the font so it stays subtle on a phone.
const SWEEP_PERIOD_MS = 1800
const SWEEP_AMPLITUDE = 80
const SWEEP_REFERENCE_FONT_PX = 108

type Fit = { offsets: number[]; width: number; fontPx: number }

function RotatingPhrase({ animate }: { animate: boolean }) {
  const [state, setState] = useState({ index: 0, phase: 'in' as 'in' | 'out' })
  const [fit, setFit] = useState<Fit>({ offsets: [], width: 0, fontPx: SWEEP_REFERENCE_FONT_PX })
  const rootRef = useRef<HTMLSpanElement>(null)
  const phrase = PHRASES[state.index]

  useEffect(() => {
    if (!animate) return
    const exit = setTimeout(() => setState((s) => ({ ...s, phase: 'out' })), ROTATE_MS)
    const next = setTimeout(
      () => setState((s) => ({ index: (s.index + 1) % PHRASES.length, phase: 'in' })),
      ROTATE_MS + EXIT_GAP_MS,
    )
    return () => {
      clearTimeout(exit)
      clearTimeout(next)
    }
  }, [state.index, animate])

  // The sweep is a CSS variable updated every frame, so it never re-renders the letters.
  useEffect(() => {
    const el = rootRef.current
    if (!el || !animate) return
    let frame: number
    const tick = (time: number) => {
      el.style.setProperty('--sweep', Math.sin((time / SWEEP_PERIOD_MS) * Math.PI * 2).toFixed(3))
      frame = requestAnimationFrame(tick)
    }
    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [animate])

  // Every letter is its own element (for the stagger), but together they must read as one gradient
  // across the headline. So each letter gets a background as wide as the headline, shifted left by
  // that letter's own offset. This reads each letter's position and the headline's width.
  const measure = useCallback(() => {
    const el = rootRef.current
    const parent = el?.offsetParent
    if (!el || !(parent instanceof HTMLElement)) return
    setFit({
      offsets: Array.from(el.querySelectorAll<HTMLElement>('[data-letter]')).map((l) => l.offsetLeft),
      width: parent.offsetWidth,
      fontPx: parseFloat(getComputedStyle(el).fontSize) || SWEEP_REFERENCE_FONT_PX,
    })
  }, [])

  useLayoutEffect(measure, [measure, state.index])

  useEffect(() => {
    window.addEventListener('resize', measure)
    document.fonts?.ready.then(measure)
    const late = setTimeout(measure, 400)
    return () => {
      window.removeEventListener('resize', measure)
      clearTimeout(late)
    }
  }, [measure])

  const amplitude = (SWEEP_AMPLITUDE * fit.fontPx) / SWEEP_REFERENCE_FONT_PX
  const words = phrase.split(' ')
  let letterIndex = 0

  return (
    <span ref={rootRef} className="inline">
      {words.map((word, wordIndex) => (
        <span
          key={wordIndex}
          className="inline-block whitespace-nowrap"
          style={{ marginRight: wordIndex < words.length - 1 ? '0.26em' : 0 }}
        >
          {Array.from(word).map((char) => {
            const i = letterIndex++
            const style: CSSProperties = {
              display: 'inline-block',
              backgroundImage: 'linear-gradient(93deg, var(--color-g1) 0%, var(--color-g2) 60%)',
              backgroundSize: `${fit.width + amplitude * 2}px 100%`,
              backgroundPosition: `calc(${-(fit.offsets[i] ?? 0) - amplitude}px + var(--sweep, 0) * ${amplitude}px) 0`,
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              color: 'transparent',
              // Padding with an equal negative margin keeps swashes and overhangs (the "&") from being clipped.
              padding: '0.2em 0.14em',
              margin: '-0.2em -0.14em',
              animation: !animate
                ? 'none'
                : state.phase === 'in'
                  ? `${ENTER} ${i * ENTER_STAGGER_MS}ms both`
                  : `${EXIT} ${i * EXIT_STAGGER_MS}ms both`,
            }
            return (
              <span key={`${state.index}-${state.phase}-${i}`} data-letter style={style}>
                {char}
              </span>
            )
          })}
        </span>
      ))}
    </span>
  )
}

export default function Intro() {
  const reduceMotion = useReducedMotion()

  return (
    <h1
      aria-label={`${STATIC_HEADING} ${PHRASES.join(', ')}`}
      className="relative m-0 w-full text-center font-display text-[clamp(40px,8.3vw,107px)] leading-[0.92] font-bold tracking-[-0.045em] text-balance text-heading"
    >
      <span aria-hidden="true">
        {STATIC_HEADING} <RotatingPhrase animate={!reduceMotion} />
      </span>
    </h1>
  )
}
