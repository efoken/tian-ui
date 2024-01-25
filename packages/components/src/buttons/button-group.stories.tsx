import { define } from "@atomico/storybook"
import { StoryObj } from "@storybook/web-components"
import { Folder } from "@tian-ui/icons"
import { Button } from "./button"
import { ButtonGroup, ButtonGroupProps } from "./button-group"

export default {
  title: "Components / Buttons / Button Group",
  ...define(ButtonGroup, {
    argTypes: {
      children: { category: "Slots", name: "default" },
      size: {
        control: "radio",
        options: ["sm", "md", "lg"],
      },
    },
  }),
}

type Story = StoryObj<ButtonGroupProps & { children?: any }>

export const Base: Story = {
  render: ({ children, ...args }) => (
    <ButtonGroup {...args}>{children}</ButtonGroup>
  ),
  args: {
    children: (
      <>
        {[0, 1, 2, 3, 4].map((i) => (
          <Button key={i}>
            <Folder slot="start-icon" />
            Button
            <Folder slot="end-icon" />
          </Button>
        ))}
      </>
    ),
  },
}
