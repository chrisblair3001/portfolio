import type { Meta, StoryObj } from '@storybook/react-vite'

const meta = {
  title: 'Foundations/Typography',
  tags: ['!autodocs'],
} satisfies Meta

export default meta
type Story = StoryObj<typeof meta>

const LABEL = 'font-mono text-[11px] font-medium tracking-[0.06em] text-label uppercase'

export const Typography: Story = {
  render: () => (
    <div className="mx-auto flex max-w-[1000px] flex-col gap-10 px-6 py-12 sm:px-10">
      <p className="text-sm text-muted">
        Three typefaces. <b>Bricolage Grotesque</b> (<code>font-display</code>) for headlines, in bold, sentence case,
        tightly tracked. <b>Manrope</b> (the default) for body copy and labels. <b>JetBrains Mono</b> (<code>font-mono</code>)
        for numbering, captions and meta. The home page runs a compact scale, 0.85 of the nominal sizes below.
      </p>
      <div className="flex flex-col gap-2">
        <span className={LABEL}>Hero headline, clamp(36px, 7.57vw, 97px), 0.92 line height, -0.045em</span>
        <p className="font-display text-[clamp(36px,7.57vw,97.3px)] leading-[0.92] font-bold tracking-[-0.045em] text-heading">
          Design leadership for taste &amp; craft
        </p>
      </div>
      <div className="flex flex-col gap-2">
        <span className={LABEL}>Case study title, 800, up to 220px, gradient fill</span>
        <p className="bg-[linear-gradient(93deg,var(--color-g1),var(--color-g2))] bg-clip-text px-[0.08em] pt-[0.06em] pb-[0.16em] font-display text-[clamp(96px,17vw,220px)] leading-[0.82] font-extrabold tracking-[-0.06em] text-transparent">
          Omni
        </p>
      </div>
      <div className="flex flex-col gap-2">
        <span className={LABEL}>Overview lead, 500, clamp(22px, 2.6vw, 34px)</span>
        <p className="max-w-[760px] font-display text-[clamp(22px,2.6vw,34px)] leading-[1.3] font-medium tracking-[-0.02em] text-heading">
          A side project to learn what it takes to build a real product with AI.
        </p>
      </div>
      <div className="flex flex-col gap-2">
        <span className={LABEL}>Chapter title, 700, clamp(32px, 3.8vw, 48px)</span>
        <p className="font-display text-[clamp(32px,3.8vw,48px)] leading-none font-bold tracking-[-0.045em] text-heading">
          Problem to solve
        </p>
      </div>
      <div className="flex flex-col gap-2">
        <span className={LABEL}>Section label, Manrope 13.6 semibold uppercase</span>
        <p className="text-[13.6px] font-semibold tracking-[0.02em] text-label uppercase">// Case studies</p>
      </div>
      <div className="flex flex-col gap-2">
        <span className={LABEL}>Mono meta and chapter number</span>
        <p className="font-mono text-[13px] font-medium tracking-[0.06em] text-label uppercase">
          Role <span className="text-accent normal-case tracking-normal">01</span>
        </p>
      </div>
      <div className="flex flex-col gap-2">
        <span className={LABEL}>Body, 18 at 1.6 on case study pages; 15.3 on the home page</span>
        <p className="max-w-[640px] text-lg leading-[1.6] text-body">
          Dispatch started with a simple idea: save an article, and hear it later as a podcast.
        </p>
      </div>
    </div>
  ),
}
