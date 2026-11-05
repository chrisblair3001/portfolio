import type { Meta, StoryObj } from '@storybook/react-vite'
import Footer from './Footer'

const meta = {
  title: 'Layout/Footer',
  component: Footer,
  decorators: [
    (Story) => (
      <div className="mx-auto max-w-[1088px] px-[clamp(24px,6vw,80px)] py-10">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Footer>

export default meta
type Story = StoryObj<typeof meta>

/** A divider and the copyright line. The year is the current year. */
export const Default: Story = {}
