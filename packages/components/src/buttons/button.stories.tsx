import { define } from "@atomico/storybook"
import { StoryObj } from "@storybook/web-components"
import { Folder } from "@tian-ui/icons"
import { Button, ButtonProps } from "./button"

export default {
  title: "Components / Buttons / Button",
  ...define(Button, {
    argTypes: {
      children: { type: "string", category: "Slots", name: "default" },
      endIcon: { category: "Slots" },
      palette: {
        control: "radio",
        options: ["brand", "neutral", "success", "error", "warning"],
      },
      size: {
        control: "radio",
        options: ["sm", "md", "lg"],
      },
      startIcon: { category: "Slots" },
      variant: {
        control: "radio",
        options: ["solid", "subtle", "outlined", "ghost"],
      },
    },
  }),
}

type Story = StoryObj<ButtonProps & { children?: any }>

export const Base: Story = {
  render: ({ children, ...args }) => (
    <Button {...args}>
      {children}
      <Folder slot="end-icon" />
    </Button>
  ),
  args: {
    children: "Button",
  },
}
