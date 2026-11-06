import type { Meta, StoryObj } from '@storybook/react-vite'
import ImageGallery from './ImageGallery'

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
  title: 'Content/ImageGallery',
  component: ImageGallery,
  args: { images },
  decorators: [
    (Story) => (
      <div className="mx-auto max-w-[1152px] px-[clamp(24px,6vw,80px)] py-10">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof ImageGallery>

export default meta
type Story = StoryObj<typeof meta>

/** A horizontally scrolling strip of screenshots with edge fades. Click an image to open the lightbox. */
export const Default: Story = {}

/** One screenshot at a time on a fixed 4:3 stage, with previous and next buttons, a counter and the image's description as a caption. Better in a narrow column. */
export const Carousel: Story = { args: { variant: 'carousel' } }

/** A carousel with a single screenshot shows it at natural size with no controls. */
export const SingleImage: Story = { args: { variant: 'carousel', images: images.slice(0, 1) } }

export const OnPhone: Story = { globals: { viewport: { value: 'phone' } } }
