import type { Meta, StoryObj } from '@storybook/react-vite'
import CaseStudies from './CaseStudies'

// A placeholder "screenshot": a gradient card with a label, so the story needs no image files.
const cover = (from: string, to: string, label: string) => ({
  src: `data:image/svg+xml;utf8,${encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" width="640" height="440"><defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="${from}"/><stop offset="1" stop-color="${to}"/></linearGradient></defs><rect width="640" height="440" fill="url(#g)"/><text x="32" y="64" font-family="sans-serif" font-size="28" fill="white">${label}</text></svg>`,
  )}`,
  alt: label,
})

const studies = [
  { slug: 'one', title: 'First Project', summary: 'A sample project.', tagline: 'A short line about the first project', cover: cover('#6366f1', '#22d3ee', 'First project') },
  { slug: 'two', title: 'Second', summary: 'Another sample project.', tagline: 'A short line about the second project', cover: cover('#f0204d', '#f59e0b', 'Second project') },
  { slug: 'three', title: 'Third', summary: 'One more sample project.', tagline: 'A short line about the third project', cover: cover('#14b8a6', '#3892e0', 'Third project') },
  { slug: 'four', title: 'Fourth', summary: 'Yet another sample project.', tagline: 'A short line about the fourth project', cover: cover('#a3e635', '#14b8a6', 'Fourth project') },
]

const meta = {
  title: 'Sections/CaseStudies',
  component: CaseStudies,
  args: { studies, heading: 'Case studies' },
  decorators: [
    (Story) => (
      <div className="mx-auto max-w-[1088px] px-[clamp(24px,6vw,80px)] py-16">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof CaseStudies>

export default meta
type Story = StoryObj<typeof meta>

/** Every case study as a frameless card in a two-column grid (one column on a phone). Covers are grayscale until hovered, then full color. */
export const Default: Story = {}

/** An odd number of cards leaves the last row half empty. */
export const ThreeCards: Story = { args: { studies: studies.slice(0, 3) } }
