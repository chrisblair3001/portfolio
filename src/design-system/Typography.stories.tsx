import type { Meta, StoryObj } from '@storybook/react-vite'

const meta = {
  title: 'Foundations/Typography',
  tags: ['!autodocs'],
} satisfies Meta

export default meta
type Story = StoryObj<typeof meta>

export const Typography: Story = {
  render: () => (
    <div className="mx-auto flex max-w-[1000px] flex-col gap-10 px-6 py-12 sm:px-10">
      <p className="text-sm text-muted">
        Archivo is the only typeface used (Manrope appears just in the footer's copyright line). Headlines use
        the wide setting of its width axis, <code>font-stretch: 125%</code>, in bold uppercase.
      </p>
      <div className="flex flex-col gap-2">
        <span className="text-xs font-semibold text-label uppercase">Display, 108 / 76 / 56 / 40 by breakpoint</span>
        <p className="text-[40px] leading-[0.95] font-bold tracking-[-0.8px] text-ink uppercase sm:text-[56px] md:text-[76px]" style={{ fontStretch: '125%' }}>
          Design leadership
        </p>
      </div>
      <div className="flex flex-col gap-2">
        <span className="text-xs font-semibold text-label uppercase">Page title, 48 / 40 / 32</span>
        <p className="text-[32px] leading-none font-bold text-heading uppercase sm:text-[40px] lg:text-[48px]" style={{ fontStretch: '125%' }}>
          Case study title
        </p>
      </div>
      <div className="flex flex-col gap-2">
        <span className="text-xs font-semibold text-label uppercase">Chapter title, 28</span>
        <p className="text-2xl leading-[1.2] font-bold text-heading sm:text-[28px]">Problem to solve</p>
      </div>
      <div className="flex flex-col gap-2">
        <span className="text-xs font-semibold text-label uppercase">Section label, 16 semibold uppercase</span>
        <p className="text-base font-semibold text-label uppercase">// Case studies</p>
      </div>
      <div className="flex flex-col gap-2">
        <span className="text-xs font-semibold text-label uppercase">Body, 18 / 16 at 1.6 line height</span>
        <p className="max-w-[640px] text-base leading-[1.6] text-body sm:text-lg">
          Dispatch started with a simple idea: save an article, and hear it later as a podcast.
        </p>
      </div>
    </div>
  ),
}
