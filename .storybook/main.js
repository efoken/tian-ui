import { mergeConfig } from "vite"

/** @type {import("@storybook/web-components-vite").StorybookConfig} */
const config = {
  stories: ["../packages/components/src/**/*.stories.{ts,tsx}"],
  addons: ["@storybook/addon-essentials", "@storybook/addon-a11y"],
  framework: {
    name: "@storybook/web-components-vite",
    options: {},
  },
  viteFinal: async (config) =>
    mergeConfig(config, {
      plugins: [
        ...(await import("@atomico/vite")).default({
          storybook: ["../packages/components/src/**/*.{ts,tsx}"],
        }),
      ],
    }),
}

export default config
