import type { Meta, StoryObj } from '@storybook/react-vite'
import CaseStudies from './CaseStudies'

const studies = [
  { slug: 'one', title: 'First Project', shortTitle: 'First Project', summary: 'A sample project.', tagline: 'A short line about the first project' },
  { slug: 'two', title: 'Second Project', shortTitle: 'Second', summary: 'Another sample project.', tagline: 'A short line about the second project' },
  { slug: 'three', title: 'Third Project', shortTitle: 'Third', summary: 'One more sample project.', tagline: 'A short line about the third project' },
]

const meta = {
  title: 'Sections/CaseStudies',
  component: CaseStudies,
  args: { studies, heading: 'Case studies' },
  decorators: [
    (Story) => (
      <div className="mx-auto max-w-[1280px] px-6 py-16 sm:px-10 lg:px-20">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof CaseStudies>

export default meta
type Story = StoryObj<typeof meta>

/** The list of case studies. Hover a row: a dark panel slides in and the title shifts and turns white. */
export const Default: Story = {}

/** The shorter list at the bottom of each case study page. */
export const MoreCaseStudies: Story = { args: { studies: studies.slice(1), heading: 'More case studies' } }
