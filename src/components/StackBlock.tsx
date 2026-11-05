import type { StackSection } from '../data/caseStudyTypes'

// A compact "how it was built" block. `steps` is a numbered flow in hairline-divided cells, each
// with the tools behind it as small pills. `items` is a dense list of tools with a one-line note.
// `chips` is a labelled row of tool names, for the supporting pieces that aren't a step. Columns
// follow the width of the block rather than the window (container queries), because the block sits
// in a column beside the chapter title.

const HEADING = 'font-mono text-xs font-medium tracking-[0.06em] text-label uppercase'

// Numbered flow, laid out as a grid of cells divided by hairlines. Built for
// even step counts (4 or 8): an odd count would leave an empty cell.
function Steps({ section }: { section: StackSection }) {
  return (
    <div className="flex flex-col gap-3">
      <p className={HEADING}>{section.title}</p>
      <ol className="grid grid-cols-2 gap-px overflow-hidden rounded-md border border-hairline bg-hairline @lg:grid-cols-4">
        {section.items.map((step, i) => (
          <li key={step.name} className="flex flex-col gap-1 bg-bg p-3.5">
            <span className="font-mono text-[11px] font-medium text-accent">{String(i + 1).padStart(2, '0')}</span>
            <span className="text-sm font-semibold text-heading">{step.name}</span>
            {step.note && <span className="text-[13px] leading-[1.45] text-muted">{step.note}</span>}
            {step.tools && (
              <span className="mt-1.5 flex flex-wrap gap-1.5">
                {step.tools.map((tool) => (
                  <span key={tool} className="rounded-full border border-border px-2.5 py-0.5 text-xs text-body">
                    {tool}
                  </span>
                ))}
              </span>
            )}
          </li>
        ))}
      </ol>
    </div>
  )
}

function Items({ section }: { section: StackSection }) {
  return (
    <div className="flex flex-col gap-3">
      <p className={HEADING}>{section.title}</p>
      <ul className="grid grid-cols-1 gap-x-6 gap-y-4 @md:grid-cols-2 @xl:grid-cols-3">
        {section.items.map((item) => (
          <li key={item.name} className="flex flex-col gap-0.5 border-t border-hairline pt-2.5">
            <span className="text-sm font-semibold text-heading">{item.name}</span>
            {item.note && <span className="text-[13px] leading-[1.45] text-muted">{item.note}</span>}
          </li>
        ))}
      </ul>
    </div>
  )
}

function Chips({ section }: { section: StackSection }) {
  return (
    <div className="grid gap-2.5 border-t border-hairline pt-4 @md:grid-cols-[150px_1fr] @md:gap-4">
      <p className={`${HEADING} @md:pt-2`}>{section.title}</p>
      <div className="flex flex-wrap gap-2">
        {section.items.map((item) => (
          <span
            key={item.name}
            className="rounded-full border border-border px-3.5 py-1.5 text-sm font-medium whitespace-nowrap text-body"
          >
            {item.name}
          </span>
        ))}
      </div>
    </div>
  )
}

export default function StackBlock({ sections }: { sections: StackSection[] }) {
  // Consecutive chip rows read as one table, so they sit closer together than the other sections.
  const blocks: (StackSection | StackSection[])[] = []
  for (const section of sections) {
    const last = blocks[blocks.length - 1]
    if (section.kind === 'chips' && Array.isArray(last)) last.push(section)
    else if (section.kind === 'chips') blocks.push([section])
    else blocks.push(section)
  }
  return (
    <div className="@container flex flex-col gap-8">
      {blocks.map((block) =>
        Array.isArray(block) ? (
          <div key={block[0].title} className="flex flex-col gap-4">
            {block.map((section) => (
              <Chips key={section.title} section={section} />
            ))}
          </div>
        ) : block.kind === 'steps' ? (
          <Steps key={block.title} section={block} />
        ) : (
          <Items key={block.title} section={block} />
        ),
      )}
    </div>
  )
}
