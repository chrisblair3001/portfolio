import type { Meta, StoryObj } from '@storybook/react-vite'
import Header from './Header'

const meta = {
  title: 'Layout/Header',
  component: Header,
  decorators: [
    (Story) => (
      <div className="mx-auto max-w-[1280px] px-6 py-6 sm:px-10 sm:py-6 lg:px-20">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Header>

export default meta
type Story = StoryObj<typeof meta>

/** The logo mark and name on the left, the Resume pill on the right. */
export const Default: Story = {}

/** On a phone the name is hidden and only the logo mark shows. */
export const OnPhone: Story = { globals: { viewport: { value: 'phone' } } }
