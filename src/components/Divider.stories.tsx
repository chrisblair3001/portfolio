import type { Meta, StoryObj } from '@storybook/react-vite'
import Divider from './Divider'

const meta = {
  title: 'Primitives/Divider',
  component: Divider,
  decorators: [
    (Story) => (
      <div className="mx-auto max-w-[1280px] px-6 py-10 sm:px-10 lg:px-20">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Divider>

export default meta
type Story = StoryObj<typeof meta>

/** A 1px hairline that fills its container. Used between case study rows and above the footer. */
export const Default: Story = {}
