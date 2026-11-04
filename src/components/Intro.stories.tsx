import type { Meta, StoryObj } from '@storybook/react-vite'
import Intro from './Intro'

const meta = {
  title: 'Sections/Intro',
  component: Intro,
  decorators: [
    (Story) => (
      <div className="mx-auto max-w-[1280px] px-6 py-16 sm:px-10 lg:px-20">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Intro>

export default meta
type Story = StoryObj<typeof meta>

/** The headline. "Design leadership for" is fixed; the phrase after it rotates every few seconds with a per-letter flip and an orange-to-pink gradient. */
export const Default: Story = {}
