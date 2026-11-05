import type { Meta, StoryObj } from '@storybook/react-vite'
import Home from './Home'

const meta = {
  title: 'Screens/Home',
  component: Home,
  tags: ['!autodocs'],
} satisfies Meta<typeof Home>

export default meta
type Story = StoryObj<typeof meta>

/** The home page: intro, case studies, then about and the footer, each a full-height section with its own cursor glow. */
export const Default: Story = {}

export const OnPhone: Story = { globals: { viewport: { value: 'phone' } } }
