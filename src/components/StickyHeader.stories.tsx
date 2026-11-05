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
        <p className="mx-auto max-w-[1280px] px-6 pt-32 text-body sm:px-10 lg:px-20">
          Scroll down: once the page moves, the header gains a hairline and a translucent white backdrop.
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
