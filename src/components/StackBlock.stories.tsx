import type { Meta, StoryObj } from '@storybook/react-vite'
import StackBlock from './StackBlock'

const meta = {
  title: 'Content/StackBlock',
  component: StackBlock,
  args: {
    sections: [
      {
        kind: 'steps',
        title: 'The build loop',
        items: [
          { name: 'Prototype', note: 'A working first version.', tools: ['Claude Code'] },
          { name: 'Refine', note: 'Type, color and every screen.', tools: ['Claude Design'] },
          { name: 'Bundle', note: 'Designs and notes packaged as one handoff.' },
          { name: 'Build', note: 'Back to code, from the bundle.', tools: ['Claude Code'] },
        ],
      },
      {
        kind: 'items',
        title: 'Skills used',
        items: [
          { name: 'design-sync', note: 'Publishes the component library to the design tool.' },
          { name: 'ux-writing', note: 'A pass over the copy on every screen.' },
          { name: 'design-critique', note: 'Structured critiques of screens.' },
        ],
      },
      {
        kind: 'chips',
        title: 'Where it runs',
        items: [{ name: 'Vercel' }, { name: 'Render' }, { name: 'GitHub' }],
      },
      {
        kind: 'chips',
        title: 'The app',
        items: [{ name: 'React' }, { name: 'TypeScript' }, { name: 'Vite' }, { name: 'Storybook' }],
      },
    ],
  },
  decorators: [
    (Story) => (
      <div className="mx-auto max-w-[772px] px-6 py-10 sm:px-10">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof StackBlock>

export default meta
type Story = StoryObj<typeof meta>

/** A numbered flow (`steps`, built for 4 or 8 cells) with optional tools under each step, a titled list of tools with notes (`items`), and labelled rows of tool names (`chips`). */
export const Default: Story = {}

/** Cells and lists collapse to fewer columns on a phone. */
export const OnPhone: Story = { globals: { viewport: { value: 'phone' } } }
