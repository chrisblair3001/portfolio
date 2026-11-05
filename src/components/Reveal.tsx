import { useReducedMotion } from 'framer-motion'
import { useEffect, useRef, useState, type ReactNode } from 'react'

type RevealProps = {
  children: ReactNode
  className?: string
}

// Fades its content up by 40px, once, the first time 15% of it is on screen. People who prefer
// reduced motion get the content already in place.
export default function Reveal({ children, className = '' }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [shown, setShown] = useState(false)
  const reduceMotion = useReducedMotion()

  useEffect(() => {
    const el = ref.current
    if (!el || reduceMotion) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true)
          observer.disconnect()
        }
      },
      { threshold: 0.15 },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [reduceMotion])

  const visible = shown || reduceMotion
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'none' : 'translateY(40px)',
        transition: 'opacity 1s cubic-bezier(0.2, 0.7, 0.2, 1), transform 1s cubic-bezier(0.2, 0.7, 0.2, 1)',
      }}
    >
      {children}
    </div>
  )
}
