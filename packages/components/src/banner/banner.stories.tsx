import { define } from "@atomico/storybook"
import { StoryObj } from "@storybook/web-components"
import { EmojiHappy } from "@tian-ui/icons"
import { Button } from "../buttons"
import { Banner, BannerProps } from "./banner"

export default {
  title: "Components / Banner",
  ...define(Banner, {
    argTypes: {
      buttons: { category: "Slots" },
      icon: { category: "Slots" },
      palette: {
        control: "radio",
        options: ["neutral", "brand", "success", "error", "warning"],
      },
      size: {
        control: "radio",
        options: ["md", "lg"],
      },
    },
  }),
}

type Story = StoryObj<BannerProps>

export const Base: Story = {
  render: ({ palette, size, ...args }) => (
    <Banner palette={palette} size={size} {...args}>
      <EmojiHappy slot="icon" />
      <Button
        palette={palette}
        size={size === "md" ? "sm" : "md"}
        slot="buttons"
        variant="subtle"
      >
        Button
      </Button>
      <Button
        palette={palette}
        size={size === "md" ? "sm" : "md"}
        slot="buttons"
        variant="solid"
      >
        Button
      </Button>
    </Banner>
  ),
  args: {
    description: "Inline message example",
    title: "Banner title",
  },
}
