import CursorGlow from './CursorGlow'
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
  const scrollToNext = () => {
    window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })
  }

  return (
    <section className="relative w-full overflow-hidden bg-[#fcf4f6]">
      <CursorGlow />
      <div className="relative z-10 mx-auto flex min-h-screen max-w-[1280px] flex-col px-6 sm:px-10 lg:px-20">
        <div className="h-24 shrink-0 sm:h-28 lg:h-36" />
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
