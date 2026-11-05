import type { Meta, StoryObj } from '@storybook/react-vite'
import SectionDots from './SectionDots'

const meta = {
  title: 'Layout/SectionDots',
  component: SectionDots,
  tags: ['!autodocs'],
  parameters: { layout: 'fullscreen' },
} satisfies Meta<typeof SectionDots>

export default meta
type Story = StoryObj<typeof meta>

const sections = [
  { id: 'intro', label: 'Intro' },
  { id: 'work', label: 'Case studies' },
  { id: 'bio', label: 'About' },
]

/** The fixed dots on the right edge of the home page, one per section, small and quiet until a section is active, when its dot grows and takes that section's color (lime, teal, blue). Desktop only. */
export const Default: Story = {
  globals: { viewport: { value: 'desktop' } },
  render: () => (
    <>
      {sections.map((s) => (
        <section key={s.id} id={s.id} className="flex h-[34vh] items-center justify-center text-2xl font-bold text-heading">
          {s.label}
        </section>
      ))}
      <SectionDots />
    </>
  ),
}
