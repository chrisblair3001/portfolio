import { useEffect, useRef } from 'react'
import Intro from './Intro'

function DropDownArrow() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="size-8 text-ink/90">
      <path
        d="M4 8L12 16L20 8"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null)
  const glowRef = useRef<HTMLDivElement>(null)

  // The glow eases toward the cursor rather than snapping to it, so it reads
  // as a soft light trailing the pointer instead of a jarring 1:1 follow.
  useEffect(() => {
    const section = sectionRef.current
    const glow = glowRef.current
    if (!section || !glow) return

    const rect = section.getBoundingClientRect()
    const target = { x: rect.width * 0.85, y: rect.height * 0.85 }
    const current = { ...target }

    const handleMove = (e: MouseEvent) => {
      const r = section.getBoundingClientRect()
      target.x = e.clientX - r.left
      target.y = e.clientY - r.top
    }
    section.addEventListener('mousemove', handleMove)

    let frame: number
    const EASE = 0.08
    const animate = () => {
      current.x += (target.x - current.x) * EASE
      current.y += (target.y - current.y) * EASE
      glow.style.transform = `translate3d(${current.x}px, ${current.y}px, 0) translate(-50%, -50%)`
      frame = requestAnimationFrame(animate)
    }
    frame = requestAnimationFrame(animate)

    return () => {
      section.removeEventListener('mousemove', handleMove)
      cancelAnimationFrame(frame)
    }
  }, [])

  const scrollToNext = () => {
    window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })
  }

  return (
    <section ref={sectionRef} className="relative w-full overflow-hidden bg-[#fcf4f6]">
      <div
        ref={glowRef}
        className="pointer-events-none absolute top-0 left-0 size-[700px] rounded-full blur-[90px]"
        style={{
          background:
            'radial-gradient(circle, rgba(255,54,111,0.6) 0%, rgba(255,104,147,0.45) 25%, rgba(255,155,183,0.3) 50%, rgba(255,255,255,0) 100%)',
        }}
      />
      <div className="relative z-10 mx-auto flex min-h-screen max-w-[1280px] flex-col px-20">
        <div className="h-36 shrink-0" />
        <div className="flex flex-1 flex-col justify-center">
          <Intro />
        </div>
        <button
          type="button"
          onClick={scrollToNext}
          aria-label="Scroll to content"
          className="mx-auto mb-16 flex items-center justify-center transition-transform hover:translate-y-1"
        >
          <DropDownArrow />
        </button>
      </div>
    </section>
  )
}
