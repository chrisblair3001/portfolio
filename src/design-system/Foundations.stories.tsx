import type { Meta, StoryObj } from '@storybook/react-vite'

// Reference pages for the tokens and the repeated class patterns. They describe the site's styling;
// there is nothing to import from them, so they are not synced as components.

const meta = {
  title: 'Foundations/Colors',
  tags: ['!autodocs'],
} satisfies Meta

export default meta
type Story = StoryObj<typeof meta>

// The "Night" palette. Values match the @theme block in src/index.css.
const COLORS: { token: string; value: string; use: string }[] = [
  { token: '--color-bg', value: '#121212', use: 'Page background and the sticky header backdrop' },
  { token: '--color-ink', value: '#f2f0ec', use: 'Pill hover fill, UI ink' },
  { token: '--color-heading', value: '#f7f5f2', use: 'Headlines and titles' },
  { token: '--color-body', value: '#cfcac4', use: 'Body copy' },
  { token: '--color-muted', value: '#9a948d', use: 'Secondary text, the footer, back links' },
  { token: '--color-label', value: '#8c8680', use: 'Section labels (// Case studies) and mono meta' },
  { token: '--color-border', value: '#6a6560', use: 'Pill outlines and inactive section dots' },
  { token: '--color-hairline', value: '#2b2928', use: '1px dividers and quiet borders' },
  { token: '--color-accent', value: '#c6f432', use: 'Lime: links, chapter numbers. Dark backgrounds only' },
  { token: '--color-g1', value: '#c6f432', use: 'Headline gradient, first stop (lime)' },
  { token: '--color-g2', value: '#35e0c4', use: 'Headline gradient, second stop (teal); the Case studies dot' },
  { token: '--color-dot-3', value: '#8ab4ff', use: 'The About section dot' },
]

export const Colors: Story = {
  render: () => (
    <div className="mx-auto flex max-w-[1000px] flex-col gap-10 px-6 py-12 sm:px-10">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {COLORS.map((c) => (
          <div key={c.token} className="flex items-center gap-4">
            <span className="size-14 shrink-0 rounded-lg border border-hairline" style={{ background: c.value }} />
            <div className="flex flex-col">
              <span className="font-semibold text-heading">{c.token}</span>
              <span className="text-sm text-muted">{c.value} · {c.use}</span>
            </div>
          </div>
        ))}
      </div>
      <div className="flex flex-col gap-3">
        <p className="font-display text-xl font-bold tracking-[-0.02em] text-heading">Headline gradient</p>
        <p
          className="bg-[linear-gradient(93deg,var(--color-g1)_0%,var(--color-g2)_60%)] bg-clip-text font-display text-6xl font-bold tracking-[-0.045em] text-transparent"
        >
          the age of AI
        </p>
        <p className="text-sm text-muted">
          linear-gradient(93deg, g1 0%, g2 60%), clipped to the text. Gradient letters need padding with an
          equal negative margin (0.2em 0.14em) so swashes and the ampersand are not cut off.
        </p>
      </div>
    </div>
  ),
}
