import { useEffect, useRef, useState } from 'react'
import ExpandableImage from './ExpandableImage'
import Lightbox from './Lightbox'
import type { CaseStudyImage } from '../data/caseStudies'

export default function ImageGallery({ images }: { images: CaseStudyImage[] }) {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(false)
  const [openIndex, setOpenIndex] = useState<number | null>(null)

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
      <div ref={scrollRef} className="no-scrollbar flex gap-4 overflow-x-auto pb-2">
        {images.map((img, i) => (
          <ExpandableImage
            key={i}
            src={img.src}
            alt={img.alt}
            onClick={() => setOpenIndex(i)}
            className={`h-[220px] w-auto shrink-0 rounded-lg object-cover shadow-[0px_2px_4px_2px_rgba(0,0,0,0.06)] sm:h-[300px] ${
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
      {openIndex !== null && (
        <Lightbox
          images={images}
          index={openIndex}
          onClose={() => setOpenIndex(null)}
          onNavigate={setOpenIndex}
        />
      )}
    </div>
  )
}
