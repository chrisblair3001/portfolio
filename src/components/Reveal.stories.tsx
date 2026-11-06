import type { Meta, StoryObj } from '@storybook/react-vite'
import Reveal from './Reveal'

const meta = {
  title: 'Effects/Reveal',
  component: Reveal,
  decorators: [
    (Story) => (
      <div className="mx-auto max-w-[1152px] px-[clamp(24px,6vw,80px)] py-16">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Reveal>

export default meta
type Story = StoryObj<typeof meta>

/** Wraps a section so it fades up by 40px, once, when 15% of it is on screen. */
export const Default: Story = {
  args: {
    children: (
      <p className="font-display text-4xl font-bold tracking-[-0.045em] text-heading">
        This block fades up when it scrolls into view.
      </p>
    ),
  },
}
