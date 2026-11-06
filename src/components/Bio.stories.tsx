import type { Meta, StoryObj } from '@storybook/react-vite'
import Bio from './Bio'

const meta = {
  title: 'Sections/Bio',
  component: Bio,
  decorators: [
    (Story) => (
      <div className="mx-auto max-w-[1152px] px-[clamp(24px,6vw,80px)] py-16">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Bio>

export default meta
type Story = StoryObj<typeof meta>

/** The About section on the home page: a green label, two paragraphs, email and LinkedIn pills, and the portrait. */
export const Default: Story = {}

export const OnPhone: Story = { globals: { viewport: { value: 'phone' } } }
