import type { Meta, StoryObj } from '@storybook/react-vite'
import Hero from './Hero'

const meta = {
  title: 'Sections/Hero',
  component: Hero,
  tags: ['!autodocs'],
} satisfies Meta<typeof Hero>

export default meta
type Story = StoryObj<typeof meta>

/** The first section of the home page: the rotating headline over the pink cursor trail, and the bouncing scroll arrow. */
export const Default: Story = {}

export const OnPhone: Story = { globals: { viewport: { value: 'phone' } } }
