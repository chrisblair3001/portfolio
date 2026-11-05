import type { Meta, StoryObj } from '@storybook/react-vite'
import NextCaseStudy from './NextCaseStudy'

const meta = {
  title: 'Content/NextCaseStudy',
  component: NextCaseStudy,
  args: { study: { slug: 'second', title: 'Second', summary: 'Another sample project.' } },
  decorators: [
    (Story) => (
      <div className="mx-auto max-w-[1088px] px-[clamp(24px,6vw,80px)] py-16">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof NextCaseStudy>

export default meta
type Story = StoryObj<typeof meta>

/** The row at the bottom of a case study page. Hover it: the title and arrow turn to the accent color. */
export const Default: Story = {}
