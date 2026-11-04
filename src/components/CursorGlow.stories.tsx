import type { Meta, StoryObj } from '@storybook/react-vite'
import CursorGlow from './CursorGlow'

const meta = {
  title: 'Effects/CursorGlow',
  component: CursorGlow,
  args: { color: 'pink' },
  argTypes: { color: { control: 'inline-radio', options: ['pink', 'teal', 'azure'] } },
  decorators: [
    (Story) => (
      <section className="relative h-[480px] overflow-hidden">
        <Story />
        <p className="relative z-10 p-10 text-body">Move the cursor over this area. On touch screens the glow drifts on its own.</p>
      </section>
    ),
  ],
} satisfies Meta<typeof CursorGlow>

export default meta
type Story = StoryObj<typeof meta>

/** A halftone dot trail that follows the cursor. Drop it in as the first child of a relative, overflow-hidden section. */
export const Pink: Story = {}
export const Teal: Story = { args: { color: 'teal' } }
export const Azure: Story = { args: { color: 'azure' } }
