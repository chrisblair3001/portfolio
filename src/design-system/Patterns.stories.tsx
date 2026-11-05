import type { Meta, StoryObj } from '@storybook/react-vite'

const meta = {
  title: 'Foundations/Patterns',
  tags: ['!autodocs'],
} satisfies Meta

export default meta
type Story = StoryObj<typeof meta>

const PILL =
  'rounded-full border border-border bg-bg px-6 py-3 text-[13.6px] font-medium text-ink transition-colors duration-200 hover:bg-ink hover:text-bg'
const PILL_SMALL =
  'rounded-full border border-border bg-bg px-5 py-2 text-xs font-bold tracking-[0.02em] text-ink uppercase transition-colors duration-200 hover:bg-ink hover:text-bg'
const CHIP = 'rounded-full border border-border px-4 py-1.5 text-sm font-medium whitespace-nowrap text-body'
const MONO_LABEL = 'font-mono text-[13px] font-medium tracking-[0.06em] text-label uppercase'

function Pattern({ name, classes, children }: { name: string; classes: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-3 border-t border-hairline pt-5">
      <p className="font-display text-xl font-bold tracking-[-0.02em] text-heading">{name}</p>
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
        <button type="button" className={PILL_SMALL}>Resume</button>
      </Pattern>
      <Pattern name="Tag chip" classes={CHIP}>
        <span className={CHIP}>Enterprise AI</span>
      </Pattern>
      <Pattern name="Mono label" classes={MONO_LABEL}>
        <span className={MONO_LABEL}>Role</span>
      </Pattern>
    </div>
  ),
}
