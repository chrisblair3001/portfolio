import type { StackSection } from '../data/caseStudyTypes'

// Numbered flow, laid out as a grid of cells divided by hairlines. Built for
// even step counts (4 or 8): an odd count would leave a gray empty cell.
function Steps({ section }: { section: StackSection }) {
  return (
    <div className="flex flex-col gap-4">
      <p className="text-lg font-semibold text-heading">{section.title}</p>
      <ol className="grid grid-cols-2 gap-px overflow-hidden rounded-lg border border-hairline bg-hairline sm:grid-cols-4">
        {section.items.map((step, i) => (
          <li key={step.name} className="flex flex-col gap-1.5 bg-white p-4">
            <span className="text-xs font-semibold text-label">{String(i + 1).padStart(2, '0')}</span>
            <span className="text-base font-semibold text-heading">{step.name}</span>
            <span className="text-sm leading-[1.5] text-muted">{step.note}</span>
          </li>
        ))}
      </ol>
    </div>
  )
}

function Items({ section }: { section: StackSection }) {
  return (
    <div className="flex flex-col gap-4">
      <p className="text-lg font-semibold text-heading">{section.title}</p>
      <ul className="grid grid-cols-1 gap-x-10 gap-y-5 sm:grid-cols-2">
        {section.items.map((item) => (
          <li key={item.name} className="flex flex-col gap-1 border-t border-hairline pt-3">
            <span className="text-base font-semibold text-heading">{item.name}</span>
            <span className="text-base leading-[1.5] text-body">{item.note}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default function StackBlock({ sections }: { sections: StackSection[] }) {
  return (
    <div className="flex flex-col gap-10 sm:gap-12">
      {sections.map((section) =>
        section.kind === 'steps' ? (
          <Steps key={section.title} section={section} />
        ) : (
          <Items key={section.title} section={section} />
        ),
      )}
    </div>
  )
}
