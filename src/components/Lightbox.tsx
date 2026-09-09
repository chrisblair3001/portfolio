import { AnimatePresence, motion } from 'framer-motion'
import { useEffect } from 'react'
import type { CaseStudyImage } from '../data/caseStudies'

function ChevronIcon({ direction }: { direction: 'left' | 'right' }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={`size-6 ${direction === 'left' ? '' : 'rotate-180'}`}>
      <path
        d="M15 6L9 12L15 18"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

type LightboxProps = {
  images: CaseStudyImage[]
  index: number
  onClose: () => void
  onNavigate: (index: number) => void
}

export default function Lightbox({ images, index, onClose, onNavigate }: LightboxProps) {
  const current = images[index]
  const hasPrev = index > 0
  const hasNext = index < images.length - 1

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
      else if (e.key === 'ArrowLeft' && hasPrev) onNavigate(index - 1)
      else if (e.key === 'ArrowRight' && hasNext) onNavigate(index + 1)
    }
    window.addEventListener('keydown', handleKey)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', handleKey)
      document.body.style.overflow = ''
    }
  }, [index, hasPrev, hasNext, onClose, onNavigate])

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        className="fixed inset-0 z-[60] flex flex-col items-center justify-center gap-4 bg-ink/90 p-6"
        onClick={onClose}
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute top-6 right-6 text-sm font-bold tracking-wide text-bg uppercase hover:opacity-70"
          aria-label="Close"
        >
          Close ✕
        </button>

        {hasPrev && (
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation()
              onNavigate(index - 1)
            }}
            aria-label="Previous image"
            className="absolute left-4 top-1/2 flex size-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-bg backdrop-blur-sm transition-colors hover:bg-white/20 sm:left-6"
          >
            <ChevronIcon direction="left" />
          </button>
        )}
        {hasNext && (
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation()
              onNavigate(index + 1)
            }}
            aria-label="Next image"
            className="absolute right-4 top-1/2 flex size-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-bg backdrop-blur-sm transition-colors hover:bg-white/20 sm:right-6"
          >
            <ChevronIcon direction="right" />
          </button>
        )}

        <div className="flex max-w-[90vw] flex-col items-center gap-3" onClick={(e) => e.stopPropagation()}>
          <motion.img
            key={current.src}
            src={current.src}
            alt={current.alt}
            initial={{ scale: 0.96, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.96, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="max-h-[80vh] max-w-full rounded-2xl object-contain shadow-2xl"
          />
          {current.alt && (
            <p className="text-center text-sm text-bg/80">
              {current.alt}
              {images.length > 1 && <span className="text-bg/50"> — {index + 1} / {images.length}</span>}
            </p>
          )}
        </div>
      </motion.div>
    </AnimatePresence>
  )
}
