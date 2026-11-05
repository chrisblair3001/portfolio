import type { Meta, StoryObj } from '@storybook/react-vite'
import StackBlock from './StackBlock'

const meta = {
  title: 'Content/StackBlock',
  component: StackBlock,
  args: {
    sections: [
      {
        kind: 'steps',
        title: 'The build loop',
        items: [
          { name: 'Prototype', note: 'A working first version.' },
          { name: 'Refine', note: 'Type, color and every screen.' },
          { name: 'Bundle', note: 'Designs and notes packaged as one handoff.' },
          { name: 'Build', note: 'Back to code, from the bundle.' },
        ],
      },
      {
        kind: 'items',
        title: 'Skills used',
        items: [
          { name: 'design-sync', note: 'Publishes the component library to the design tool.' },
          { name: 'ux-writing', note: 'A pass over the copy on every screen.' },
          { name: 'design-critique', note: 'Structured critiques of screens.' },
        ],
      },
    ],
  },
  decorators: [
    (Story) => (
      <div className="mx-auto max-w-[772px] px-6 py-10 sm:px-10">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof StackBlock>

export default meta
type Story = StoryObj<typeof meta>

/** A numbered flow (`steps`, built for 4 or 8 cells) and a titled list of tools (`items`). */
export const Default: Story = {}

/** Two lists side by side on wider screens, one column on a phone. */
export const OnPhone: Story = { globals: { viewport: { value: 'phone' } } }
