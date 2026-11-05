import type { Preview } from '@storybook/react-vite'
import { MemoryRouter } from 'react-router-dom'
import '../src/index.css'
// Archivo with both the weight and width axes (the headlines use font-stretch: 125%), and Manrope.
import '@fontsource-variable/archivo/standard.css'
import '@fontsource/manrope/400.css'
import '@fontsource/manrope/500.css'
import './fonts.css'

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
        white: { name: 'White', value: '#ffffff' },
        ink: { name: 'Ink', value: '#292828' },
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
    backgrounds: { value: 'white' },
  },
}

export default preview
