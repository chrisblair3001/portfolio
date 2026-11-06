import HairlineField from './HairlineField'
import Intro from './Intro'

function DropDownArrow() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className="size-8 animate-bounce text-ink motion-reduce:animate-none"
    >
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
    const next = document.getElementById('work')
    if (next) next.scrollIntoView({ behavior: 'smooth', block: 'start' })
    else window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })
  }

  return (
    <section className="relative w-full overflow-hidden">
      <HairlineField />
      <div className="relative z-10 mx-auto flex min-h-screen max-w-[1152px] flex-col px-[clamp(24px,6vw,80px)]">
        <div className="h-20 shrink-0 sm:h-24" />
        <div className="flex flex-1 items-center py-10">
          <Intro />
        </div>
        <button
          type="button"
          onClick={scrollToNext}
          aria-label="Scroll to content"
          className="mx-auto mb-14 flex cursor-pointer items-center justify-center p-2"
        >
          <DropDownArrow />
        </button>
      </div>
    </section>
  )
}
