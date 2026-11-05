import type { Preview } from '@storybook/react-vite'
import { MemoryRouter } from 'react-router-dom'
// The self-hosted fonts (Bricolage Grotesque, Manrope, JetBrains Mono) are imported by index.css.
import '../src/index.css'

const preview: Preview = {
  tags: ['autodocs'],
  decorators: [
    // The same wrapper main.tsx puts around the site: a router. `parameters.route` sets where it starts.
    (Story, context) => (
      <MemoryRouter initialEntries={[(context.parameters.route as string | undefined) ?? '/']}>
        <Story />
      </MemoryRouter>
    ),
  ],
  parameters: {
    layout: 'fullscreen',
    controls: { matchers: { color: /(background|color)$/i } },
    backgrounds: {
      options: {
        night: { name: 'Night', value: '#121212' },
        paper: { name: 'Paper', value: '#ffffff' },
      },
    },
    viewport: {
      options: {
        phone: { name: 'Phone, 390', type: 'mobile', styles: { width: '390px', height: '844px' } },
        tablet: { name: 'Tablet, 768', type: 'tablet', styles: { width: '768px', height: '1024px' } },
        desktop: { name: 'Desktop, 1280', type: 'desktop', styles: { width: '1280px', height: '800px' } },
      },
    },
    a11y: { test: 'todo' },
  },
  initialGlobals: {
    backgrounds: { value: 'night' },
  },
}

export default preview
