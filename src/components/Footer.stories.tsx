import type { Meta, StoryObj } from '@storybook/react-vite'
import Footer from './Footer'

const meta = {
  title: 'Layout/Footer',
  component: Footer,
  decorators: [
    (Story) => (
      <div className="mx-auto max-w-[1280px] px-6 py-10 sm:px-10 lg:px-20">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Footer>

export default meta
type Story = StoryObj<typeof meta>

/** A divider and the copyright line. The year is the current year. */
export const Default: Story = {}
