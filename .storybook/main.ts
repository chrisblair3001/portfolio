import type { StorybookConfig } from '@storybook/react-vite'

// Stories sit next to the components they describe. Vite picks up vite.config.ts on its own,
// so Tailwind and the React plugin behave exactly as they do on the site.
const config: StorybookConfig = {
  stories: ['../src/**/*.stories.@(ts|tsx)'],
  addons: ['@storybook/addon-a11y', '@storybook/addon-docs'],
  framework: '@storybook/react-vite',
  core: { disableTelemetry: true },
  // The site's public folder (just the favicon today).
  staticDirs: ['../public'],
}

export default config
