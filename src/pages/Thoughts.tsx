import PageShell from '../components/PageShell'

const POSTS = [
  { title: '[Placeholder] Why AI changes how design teams scale', date: 'Coming soon' },
  { title: '[Placeholder] The design systems trap', date: 'Coming soon' },
  { title: '[Placeholder] Hiring for judgment, not tools', date: 'Coming soon' },
]

export default function Thoughts() {
  return (
    <PageShell eyebrow="About" title="Thoughts on Design & AI">
      <div className="flex max-w-[720px] flex-col gap-10">
        {POSTS.map((post) => (
          <div key={post.title} className="flex flex-col gap-1 border-b border-hairline pb-8">
            <p className="text-xl font-bold text-heading">{post.title}</p>
            <p className="text-sm text-muted">{post.date}</p>
          </div>
        ))}
      </div>
    </PageShell>
  )
}
