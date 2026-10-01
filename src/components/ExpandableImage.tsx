type ExpandableImageProps = {
  src: string
  alt: string
  className?: string
  onClick?: () => void
}

export default function ExpandableImage({ src, alt, className, onClick }: ExpandableImageProps) {
  return (
    <img
      src={src}
      alt={alt}
      onClick={onClick}
      loading="lazy"
      decoding="async"
      className={`cursor-zoom-in ${className ?? ''}`}
    />
  )
}
