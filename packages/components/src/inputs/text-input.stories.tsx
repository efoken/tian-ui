import { define } from "@atomico/storybook"
import { StoryObj } from "@storybook/web-components"
import { TextInput, TextInputProps } from "./text-input"

export default {
  title: "Components / Inputs / Text Input",
  ...define(TextInput, {
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

type Story = StoryObj<TextInputProps>

export const Base: Story = {
  render: (args) => <TextInput {...args} />,
  args: {
    placeholder: "Placeholder",
  },
}
