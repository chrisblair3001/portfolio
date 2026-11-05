import type { Meta, StoryObj } from '@storybook/react-vite'

const meta = {
  title: 'Foundations/Patterns',
  tags: ['!autodocs'],
} satisfies Meta

export default meta
type Story = StoryObj<typeof meta>

const PILL =
  'rounded-full border border-border bg-white px-6 py-3 text-base font-medium text-ink transition-colors hover:bg-ink hover:text-bg'
const PILL_SMALL =
  'rounded-full border border-border bg-white px-5 py-2 text-sm font-bold text-ink transition-colors hover:bg-ink hover:text-bg'
const CHIP =
  'rounded-full bg-white px-4 py-1.5 text-sm font-medium whitespace-nowrap text-body shadow-[0px_2px_4px_2px_rgba(0,0,0,0.06)]'
const HIGHLIGHT = 'bg-white px-1.5 py-0.5 [-webkit-box-decoration-break:clone] [box-decoration-break:clone]'

function Pattern({ name, classes, children }: { name: string; classes: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-3 border-t border-hairline pt-5">
      <p className="text-lg font-semibold text-heading">{name}</p>
      <div>{children}</div>
      <code className="text-xs break-words text-muted">{classes}</code>
    </div>
  )
}

/** Repeated styles that are class strings rather than components. Copy these when building new pages. */
export const Patterns: Story = {
  render: () => (
    <div className="mx-auto flex max-w-[800px] flex-col gap-8 px-6 py-12 sm:px-10">
      <Pattern name="Pill button" classes={PILL}>
        <button type="button" className={PILL}>hello@example.com</button>
      </Pattern>
      <Pattern name="Small pill button (header)" classes={PILL_SMALL}>
        <button type="button" className={PILL_SMALL}>RESUME</button>
      </Pattern>
      <Pattern name="Tag chip" classes={CHIP}>
        <span className={CHIP}>Enterprise AI</span>
      </Pattern>
      <Pattern name="Per-line text highlight, for text over the cursor glow" classes={HIGHLIGHT}>
        <div className="max-w-[420px] bg-ink p-4 text-base leading-[1.6] text-body">
          <span className={HIGHLIGHT}>Each wrapped line gets its own white backdrop instead of one box for the whole paragraph.</span>
        </div>
      </Pattern>
    </div>
  ),
}
