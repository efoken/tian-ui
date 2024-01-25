import { define } from "@atomico/storybook"
import { StoryObj } from "@storybook/web-components"
import { Folder } from "@tian-ui/icons"
import { ButtonIcon, ButtonIconProps } from "./button-icon"

export default {
  title: "Components / Buttons / Button Icon",
  ...define(ButtonIcon, {
    argTypes: {
      children: { category: "Slots", name: "default" },
      palette: {
        control: "radio",
        options: ["brand", "neutral", "success", "error", "warning"],
      },
      size: {
        control: "radio",
        options: ["sm", "md", "lg"],
      },
      variant: {
        control: "radio",
        options: ["solid", "subtle", "outlined", "ghost"],
      },
    },
  }),
}

type Story = StoryObj<ButtonIconProps & { children?: any }>

export const Base: Story = {
  render: ({ children, ...args }) => (
    <ButtonIcon {...args}>{children}</ButtonIcon>
  ),
  args: {
    children: <Folder aria-label="Folder" />,
  },
}
