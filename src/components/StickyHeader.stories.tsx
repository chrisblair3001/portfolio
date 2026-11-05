import type { Meta, StoryObj } from '@storybook/react-vite'
import StickyHeader from './StickyHeader'

const meta = {
  title: 'Layout/StickyHeader',
  component: StickyHeader,
  tags: ['!autodocs'],
  decorators: [
    (Story) => (
      <div className="h-[1600px]">
        <Story />
        <p className="mx-auto max-w-[1088px] px-[clamp(24px,6vw,80px)] pt-32 text-body">
          Scroll down: once the page moves, the header gains a hairline and a translucent dark backdrop.
        </p>
      </div>
    ),
  ],
} satisfies Meta<typeof StickyHeader>

export default meta
type Story = StoryObj<typeof meta>

/** Fixed to the top of the page, transparent until the page scrolls. */
export const Default: Story = {}

export const Scrolled: Story = {
  play: async () => {
    window.scrollTo(0, 80)
    window.dispatchEvent(new Event('scroll'))
  },
}
