import { useEffect, useRef, useState, type KeyboardEvent } from 'react'
import ExpandableImage from './ExpandableImage'
import Lightbox from './Lightbox'
import type { CaseStudyImage } from '../data/caseStudyTypes'

type ImageGalleryProps = {
  images: CaseStudyImage[]
  // `strip` (the default) is a horizontally scrolling row with edge fades. `carousel` shows one
  // screenshot at a time on a fixed stage, with buttons: better in a narrow column.
  variant?: 'strip' | 'carousel'
}

export default function ImageGallery({ images, variant = 'strip' }: ImageGalleryProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const [stageIndex, setStageIndex] = useState(0)

  const lightbox = openIndex !== null && (
    <Lightbox
      images={images}
      index={openIndex}
      onClose={() => {
        setStageIndex(openIndex)
        setOpenIndex(null)
      }}
      onNavigate={setOpenIndex}
    />
  )

  return variant === 'carousel' ? (
    <Carousel images={images} index={stageIndex} onIndex={setStageIndex} onOpen={setOpenIndex} lightboxOpen={openIndex !== null}>
      {lightbox}
    </Carousel>
  ) : (
    <Strip images={images} onOpen={setOpenIndex}>
      {lightbox}
    </Strip>
  )
}

type StripProps = {
  images: CaseStudyImage[]
  onOpen: (index: number) => void
  children?: React.ReactNode
}

function Strip({ images, onOpen, children }: StripProps) {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(false)

  useEffect(() => {
    const el = scrollRef.current
    if (!el) return

    const update = () => {
      setCanScrollLeft(el.scrollLeft > 4)
      setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 4)
    }

    update()
    el.addEventListener('scroll', update, { passive: true })
    const resizeObserver = new ResizeObserver(update)
    resizeObserver.observe(el)
    window.addEventListener('resize', update)

    return () => {
      el.removeEventListener('scroll', update)
      resizeObserver.disconnect()
      window.removeEventListener('resize', update)
    }
  }, [images])

  return (
    <div className="relative">
      <div ref={scrollRef} className="no-scrollbar flex gap-5 overflow-x-auto pb-2">
        {images.map((img, i) => (
          <ExpandableImage
            key={i}
            src={img.src}
            alt={img.alt}
            onClick={() => onOpen(i)}
            className={`h-[220px] w-auto shrink-0 rounded-md object-cover sm:h-[300px] ${
              img.bare ? '' : 'border border-hairline'
            }`}
          />
        ))}
      </div>
      <div
        aria-hidden
        className={`pointer-events-none absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-bg to-transparent transition-opacity duration-300 ${
          canScrollLeft ? 'opacity-100' : 'opacity-0'
        }`}
      />
      <div
        aria-hidden
        className={`pointer-events-none absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-bg to-transparent transition-opacity duration-300 ${
          canScrollRight ? 'opacity-100' : 'opacity-0'
        }`}
      />
      {children}
    </div>
  )
}

// One screenshot at a time on a fixed-size stage, so the page never jumps as you step through.
// Step with the buttons, the arrow keys (when the gallery has focus) or a swipe; click the image to
// open it full screen.

const SWIPE_PX = 40

const BUTTON =
  'flex size-10 shrink-0 items-center justify-center rounded-full border border-border bg-bg text-base text-ink transition-colors duration-200 enabled:cursor-pointer enabled:hover:bg-ink enabled:hover:text-bg disabled:opacity-30'

const pad = (n: number) => String(n).padStart(2, '0')

type CarouselProps = {
  images: CaseStudyImage[]
  index: number
  onIndex: (index: number) => void
  onOpen: (index: number) => void
  lightboxOpen: boolean
  children?: React.ReactNode
}

function Carousel({ images, index, onIndex, onOpen, lightboxOpen, children }: CarouselProps) {
  const touchStartX = useRef<number | null>(null)

  const count = images.length
  const current = Math.min(index, Math.max(count - 1, 0))

  // Load the neighbors ahead of time so stepping is instant.
  useEffect(() => {
    ;[current - 1, current + 1].forEach((i) => {
      if (images[i]) new Image().src = images[i].src
    })
  }, [current, images])

  if (count === 0) return null

  const go = (i: number) => onIndex(Math.max(0, Math.min(count - 1, i)))
  const image = images[current]

  // A single screenshot needs no stage or controls.
  if (count === 1) {
    return (
      <div>
        <ExpandableImage
          src={image.src}
          alt={image.alt}
          onClick={() => onOpen(0)}
          className="h-auto w-full rounded-md border border-hairline"
        />
        {children}
      </div>
    )
  }

  const onKeyDown = (e: KeyboardEvent) => {
    if (lightboxOpen) return
    if (e.key === 'ArrowLeft') go(current - 1)
    else if (e.key === 'ArrowRight') go(current + 1)
  }

  return (
    <div
      role="group"
      aria-roledescription="carousel"
      aria-label="Screenshots"
      tabIndex={0}
      onKeyDown={onKeyDown}
      className="rounded-md outline-offset-4 focus-visible:outline-2 focus-visible:outline-accent"
    >
      <div
        className="aspect-[4/3] overflow-hidden rounded-md border border-hairline bg-hairline"
        onTouchStart={(e) => {
          touchStartX.current = e.touches[0].clientX
        }}
        onTouchEnd={(e) => {
          if (touchStartX.current === null) return
          const dx = e.changedTouches[0].clientX - touchStartX.current
          touchStartX.current = null
          if (Math.abs(dx) > SWIPE_PX) go(current + (dx < 0 ? 1 : -1))
        }}
      >
        <ExpandableImage
          key={current}
          src={image.src}
          alt={image.alt}
          onClick={() => onOpen(current)}
          className="size-full object-contain motion-safe:animate-[fade-in_250ms_ease-out]"
        />
      </div>
      <div className="mt-4 flex items-center justify-between gap-4">
        <p aria-live="polite" className="min-w-0 flex-1 text-xs leading-[1.5] text-muted">
          {image.alt}
        </p>
        <div className="flex shrink-0 items-center gap-3">
          <span className="font-mono text-[11px] tracking-[0.06em] text-label">
            {pad(current + 1)} / {pad(count)}
          </span>
          <button
            type="button"
            onClick={() => go(current - 1)}
            disabled={current === 0}
            aria-label="Previous image"
            className={BUTTON}
          >
            ←
          </button>
          <button
            type="button"
            onClick={() => go(current + 1)}
            disabled={current === count - 1}
            aria-label="Next image"
            className={BUTTON}
          >
            →
          </button>
        </div>
      </div>
      {children}
    </div>
  )
}
