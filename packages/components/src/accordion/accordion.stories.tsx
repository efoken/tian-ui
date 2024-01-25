import { define } from "@atomico/storybook"
import { StoryObj } from "@storybook/web-components"
import { Home } from "@tian-ui/icons"
import { Accordion, AccordionProps } from "./accordion"

export default {
  title: "Components / Accordion",
  ...define(Accordion, {
    argTypes: {
      children: { category: "Slots", name: "default" },
      icon: { category: "Slots" },
      title: { type: "string", category: "Slots" },
      variant: {
        control: "radio",
        options: ["outline", "underline", "subtle"],
      },
    },
  }),
}

type Story = StoryObj<AccordionProps & { children?: any; title?: string }>

export const Base: Story = {
  render: ({ children, title, ...args }) => (
    <Accordion {...args}>
      <Home slot="icon" />
      <h3 slot="title">{title}</h3>
      {children}
    </Accordion>
  ),
  args: {
    children: <p>Accordion content</p>,
    title: "Accordion title",
  },
}
