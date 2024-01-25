import { decorator } from "@atomico/storybook"

/** @type {import("@storybook/web-components").Preview} */
const preview = {
  parameters: {
    actions: {
      argTypesRegex: "^on.*",
    },
  },
  decorators: [decorator({ source: "code" })],
}

export default preview
