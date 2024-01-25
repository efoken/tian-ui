import { css, globalReset, globalTokens, useProps } from "@tian-ui/core"
import { useAssignedNodes } from "@tian-ui/hooks"
import { isValidElement } from "@tian-ui/utils"
import { Component, c, useEffect } from "atomico"
import { buttonVars, vars } from "./button"

export interface ButtonGroupProps {
  size?: "sm" | "md" | "lg"
}

const buttonIconStyles = css(buttonVars, {
  ":host": {
    boxShadow: `inset 0 0 0 1px ${vars.border.neutral.default}`,
    display: "inline-flex",
  },

  ":host([size='sm'])": {
    borderRadius: vars.sm,
  },

  ":host([size='md'])": {
    borderRadius: vars.md,
  },

  ":host([size='lg'])": {
    borderRadius: vars.lg,
  },

  "::slotted(*)": {
    borderInlineEndColor: vars.border.neutral.default,
    borderInlineEndStyle: "solid",
    borderInlineEndWidth: 1,
    marginInlineStart: -1,
  },

  "::slotted(:last-child)": {
    borderInlineEndWidth: 0,
  },
})

const defaultProps: Required<Pick<ButtonGroupProps, "size">> = {
  size: "md",
}

const _ButtonGroup: Component<ButtonGroupProps> = (_props) => {
  const { size } = useProps("ButtonGroup", defaultProps, _props)

  const [children, slotRef] = useAssignedNodes<
    HTMLElementTagNameMap["tian-button"]
  >((node) => isValidElement(node, "tian-button"))

  useEffect(() => {
    for (const node of children) {
      node.palette = "neutral"
      node.size = size
      node.variant = "ghost"
    }
  }, [children, size])

  return (
    <host shadowDom={{ delegatesFocus: true }}>
      <slot ref={slotRef} />
    </host>
  )
}

_ButtonGroup.props = {
  size: { type: String, reflect: true, value: defaultProps.size },
}

_ButtonGroup.styles = [globalTokens, globalReset, buttonIconStyles]

export const ButtonGroup = c(_ButtonGroup)

customElements.define("tian-button-group", ButtonGroup)

declare global {
  interface HTMLElementTagNameMap {
    "tian-button-group": InstanceType<typeof ButtonGroup>
  }
}
