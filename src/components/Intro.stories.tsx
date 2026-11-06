import type { Meta, StoryObj } from '@storybook/react-vite'
import Intro from './Intro'

const meta = {
  title: 'Sections/Intro',
  component: Intro,
  decorators: [
    (Story) => (
      <div className="mx-auto max-w-[1152px] px-[clamp(24px,6vw,80px)] py-16">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Intro>

export default meta
type Story = StoryObj<typeof meta>

/** The headline. "Design leadership for" is fixed; the phrase after it rotates every few seconds with letters rising in one after another, in a lime-to-teal gradient that sweeps side to side. */
export const Default: Story = {}
