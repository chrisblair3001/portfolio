import type { Meta, StoryObj } from '@storybook/react-vite'
import Bio from './Bio'

const meta = {
  title: 'Sections/Bio',
  component: Bio,
  decorators: [
    (Story) => (
      <div className="mx-auto max-w-[1280px] px-6 py-16 sm:px-10 lg:px-20">
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
