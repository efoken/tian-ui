import { define } from "@atomico/storybook"
import { StoryObj } from "@storybook/web-components"
import { FormField, FormFieldProps } from "./form-field"

export default {
  title: "Components / Inputs / Form Field",
  ...define(FormField, {
    argTypes: {
      size: {
        control: "radio",
        options: ["sm", "md"],
      },
    },
  }),
}

type Story = StoryObj<FormFieldProps>

export const Base: Story = {
  render: (args) => <FormField {...args} />,
  args: {
    helperMessage: "Helper message",
    label: "Label",
  },
}
