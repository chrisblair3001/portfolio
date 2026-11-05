import type { Meta, StoryObj } from '@storybook/react-vite'
import Divider from './Divider'

const meta = {
  title: 'Primitives/Divider',
  component: Divider,
  decorators: [
    (Story) => (
      <div className="mx-auto max-w-[1088px] px-[clamp(24px,6vw,80px)] py-10">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Divider>

export default meta
type Story = StoryObj<typeof meta>

/** A 1px hairline that fills its container. Used between case study rows and above the footer. */
export const Default: Story = {}
