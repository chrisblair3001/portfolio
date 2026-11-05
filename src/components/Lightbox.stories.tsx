import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'
import Lightbox from './Lightbox'

// A placeholder "screenshot": a gradient card with a label, so the story needs no image files.
const shot = (from: string, to: string, label: string) =>
  `data:image/svg+xml;utf8,${encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" width="640" height="440"><defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="${from}"/><stop offset="1" stop-color="${to}"/></linearGradient></defs><rect width="640" height="440" fill="url(#g)"/><text x="32" y="64" font-family="sans-serif" font-size="28" fill="white">${label}</text></svg>`,
  )}`

const images = [
  { src: shot('#6366f1', '#22d3ee', 'Home screen'), alt: 'A sample home screen' },
  { src: shot('#f0204d', '#f59e0b', 'Quick actions'), alt: 'A sample screen with quick actions' },
  { src: shot('#14b8a6', '#3892e0', 'Editor'), alt: 'A sample editor screen' },
  { src: shot('#292828', '#7b7274', 'Settings'), alt: 'A sample settings screen' },
]

const meta = {
  title: 'Content/Lightbox',
  component: Lightbox,
  tags: ['!autodocs'],
  args: { images, index: 0, onClose: () => {}, onNavigate: () => {} },
} satisfies Meta<typeof Lightbox>

export default meta
type Story = StoryObj<typeof meta>

/** Full-screen viewer. Arrow keys and the side buttons step through the images; Escape or the backdrop closes it. */
export const Default: Story = {
  render: (args) => {
    const [index, setIndex] = useState(args.index)
    // The h-screen wrapper gives the fixed overlay a full-height parent in tool previews that contain fixed positioning.
    return (
      <div className="h-screen">
        <Lightbox {...args} index={index} onNavigate={setIndex} />
      </div>
    )
  },
}
