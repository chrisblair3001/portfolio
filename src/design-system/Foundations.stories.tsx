import type { Meta, StoryObj } from '@storybook/react-vite'

// Reference pages for the tokens and the repeated class patterns. They describe the site's styling;
// there is nothing to import from them, so they are not synced as components.

const meta = {
  title: 'Foundations/Colors',
  tags: ['!autodocs'],
} satisfies Meta

export default meta
type Story = StoryObj<typeof meta>

const COLORS: { token: string; value: string; use: string }[] = [
  { token: '--color-bg', value: '#ffffff', use: 'Page background and the sticky header backdrop' },
  { token: '--color-accent', value: '#f0204d', use: 'Logo mark, links, the red subtitle on the resume' },
  { token: '--color-ink', value: '#292828', use: 'Dark surfaces: hover panels, the results band, pill hover' },
  { token: '--color-heading', value: '#111111', use: 'Headings' },
  { token: '--color-body', value: '#3c3635', use: 'Body copy' },
  { token: '--color-muted', value: '#555555', use: 'Secondary text' },
  { token: '--color-label', value: '#938787', use: 'Uppercase section labels' },
  { token: '--color-border', value: '#828282', use: 'Pill button outlines' },
  { token: '--color-hairline', value: '#e5e2e0', use: '1px dividers and light borders' },
  { token: '--color-base-secondary', value: '#7b7274', use: 'Case study descriptions' },
]

const GLOWS = [
  { name: 'Pink (home hero)', value: 'rgb(255, 54, 111)' },
  { name: 'Teal (case studies)', value: 'rgb(20, 184, 166)' },
  { name: 'Azure (about)', value: 'rgb(56, 146, 224)' },
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
        <p className="text-lg font-semibold text-heading">Cursor glow colors</p>
        <div className="flex flex-wrap gap-4">
          {GLOWS.map((g) => (
            <div key={g.name} className="flex items-center gap-3">
              <span className="size-8 rounded-full" style={{ background: g.value }} />
              <span className="text-sm text-body">{g.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  ),
}
