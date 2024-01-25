import { useDisabled } from "@atomico/hooks/use-disabled"
import { css, globalReset, globalTokens, useProps } from "@tian-ui/core"
import { Component, c } from "atomico"
import { Button, ButtonProps } from "./button"
import { useButton } from "./use-button"

export interface ButtonIconProps extends ButtonProps {}

const buttonIconStyles = css({
  ":host([size='sm']) .root": {
    height: 32,
    padding: 0,
    width: 32,

    "& ::slotted(*)": {
      height: 16,
      width: 16,
    },
  },

  ":host([size='md']) .root": {
    height: 40,
    padding: 0,
    width: 40,

    "& ::slotted(*)": {
      height: 18,
      width: 18,
    },
  },

  ":host([size='lg']) .root": {
    height: 48,
    padding: 0,
    width: 48,

    "& ::slotted(*)": {
      height: 20,
      width: 20,
    },
  },
})

const defaultProps: Required<
  Pick<ButtonIconProps, "palette" | "size" | "type" | "variant">
> = {
  palette: "brand",
  size: "md",
  type: "button",
  variant: "solid",
}

const _ButtonIcon: Component<ButtonIconProps> = (_props) => {
  const { href, name, type, value } = useProps(
    "ButtonIcon",
    defaultProps,
    _props,
  )

  const disabled = useDisabled()

  const buttonRef = useButton({ disabled, href, name, type, value })

  return (
    <host shadowDom={{ delegatesFocus: true }}>
      {href ? (
        <a aria-disabled={disabled} class="root" href={href} part="root">
          <slot />
        </a>
      ) : (
        <button
          ref={buttonRef}
          class="root"
          disabled={disabled}
          part="root"
          type="button"
        >
          <slot />
        </button>
      )}
    </host>
  )
}

_ButtonIcon.props = {
  ...Button.props,
  palette: { type: String, reflect: true, value: defaultProps.palette },
  size: { type: String, reflect: true, value: defaultProps.size },
  type: { type: String, value: defaultProps.type },
  variant: { type: String, reflect: true, value: defaultProps.variant },
}

_ButtonIcon.styles = [globalTokens, globalReset, buttonIconStyles]

export const ButtonIcon = c(_ButtonIcon, Button)

customElements.define("tian-button-icon", ButtonIcon)

declare global {
  interface HTMLElementTagNameMap {
    "tian-button-icon": InstanceType<typeof ButtonIcon>
  }
}
