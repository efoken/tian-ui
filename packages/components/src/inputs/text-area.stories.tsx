import { define } from "@atomico/storybook"
import { StoryObj } from "@storybook/web-components"
import { TextArea, TextAreaProps } from "./text-area"

export default {
  title: "Components / Inputs / Text Area",
  ...define(TextArea, {
    argTypes: {
      type: {
        control: "radio",
        options: ["text", "email", "url"],
      },
      size: {
        control: "radio",
        options: ["md", "lg"],
      },
      variant: {
        control: "radio",
        options: ["outlined", "faded"],
      },
    },
  }),
}

type Story = StoryObj<TextAreaProps>

export const Base: Story = {
  render: (args) => <TextArea {...args} />,
  args: {
    placeholder: "Placeholder",
  },
}
