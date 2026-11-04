import type { Meta, StoryObj } from '@storybook/react-vite'
import Resume from './Resume'

const meta = {
  title: 'Screens/Resume',
  component: Resume,
  tags: ['!autodocs'],
} satisfies Meta<typeof Resume>

export default meta
type Story = StoryObj<typeof meta>

/** The resume page. "Download PDF" prints it; a print stylesheet lays it out as two letter-size pages. */
export const Default: Story = {}

export const OnPhone: Story = { globals: { viewport: { value: 'phone' } } }
