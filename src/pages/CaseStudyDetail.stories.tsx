import { Route, Routes } from 'react-router-dom'
import type { Meta, StoryObj } from '@storybook/react-vite'
import CaseStudyDetail from './CaseStudyDetail'

const meta = {
  title: 'Screens/CaseStudy',
  tags: ['!autodocs'],
  // The page reads the case study from the URL, so it needs a route to match against.
  render: () => (
    <Routes>
      <Route path="/case-studies/:slug" element={<CaseStudyDetail />} />
    </Routes>
  ),
} satisfies Meta

export default meta
type Story = StoryObj<typeof meta>

/** The newest case study, with the build loop, skills and tech stack blocks. */
export const Dispatch: Story = { parameters: { route: '/case-studies/dispatch-ai-daily-podcast' } }

/** Role, team, chapters with image galleries, and the list of other case studies at the end. */
export const Omni: Story = { parameters: { route: '/case-studies/omni-enterprise-chat-experience' } }

/** Includes the dark results band. */
export const GreenlightIA: Story = { parameters: { route: '/case-studies/rebuilding-greenlights-ia' } }

export const OnPhone: Story = {
  parameters: { route: '/case-studies/dispatch-ai-daily-podcast' },
  globals: { viewport: { value: 'phone' } },
}

/** An unknown slug. */
export const NotFound: Story = { parameters: { route: '/case-studies/nope' } }
