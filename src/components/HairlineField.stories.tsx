import type { Meta, StoryObj } from '@storybook/react-vite'
import HairlineField from './HairlineField'

const meta = {
  title: 'Effects/HairlineField',
  component: HairlineField,
  decorators: [
    (Story) => (
      <div className="relative h-[480px] w-full overflow-hidden bg-bg">
        <Story />
        <p className="relative z-10 p-8 text-sm text-body">
          Move the pointer over this area. On touch screens the field drifts on its own.
        </p>
      </div>
    ),
  ],
} satisfies Meta<typeof HairlineField>

export default meta
type Story = StoryObj<typeof meta>

/** Short 1px lines on a 14px grid, at rest all pointing up and to the right. Near the pointer they turn away from it, grow longer and pick up the accent color. Fills whatever positioned container it sits in. */
export const Default: Story = {}
