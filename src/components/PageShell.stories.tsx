import type { Meta, StoryObj } from '@storybook/react-vite'
import PageShell from './PageShell'

const meta = {
  title: 'Layout/PageShell',
  component: PageShell,
  args: { title: 'Contact', eyebrow: undefined },
} satisfies Meta<typeof PageShell>

export default meta
type Story = StoryObj<typeof meta>

const body = (
  <p className="max-w-[600px] text-base leading-[1.6] text-body sm:text-lg">
    The frame for the simpler pages: a back link, a page title, your content, and the footer.
  </p>
)

export const Default: Story = { args: { children: body } }

export const WithEyebrow: Story = { args: { eyebrow: 'About', title: 'Bio', children: body } }
