import { Link } from 'react-router-dom'

const ABOUT_ITEMS = [
  { label: 'Bio', to: '/bio' },
  { label: 'Thoughts on Design & AI', to: '/thoughts' },
  { label: 'Resume', to: '/resume' },
  { label: 'Contact', to: '/contact' },
]

export default function About() {
  return (
    <section className="flex w-full items-start gap-20">
      <h2 className="w-[320px] shrink-0 text-2xl font-semibold text-label">About</h2>
      <div className="flex w-[880px] flex-col gap-12">
        {ABOUT_ITEMS.map((item) => (
          <Link
            key={item.to}
            to={item.to}
            className="w-full text-xl font-bold text-heading transition-colors hover:text-accent"
          >
            {item.label}
          </Link>
        ))}
      </div>
    </section>
  )
}
