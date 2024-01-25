import { useDisabled } from "@atomico/hooks/use-disabled"
import {
  createVars,
  css,
  globalReset,
  globalTokens,
  globalVars,
  hover,
  useProps,
} from "@tian-ui/core"
import { useAssignedNodes } from "@tian-ui/hooks"
import { Component, c } from "atomico"
import { useButton } from "./use-button"

export interface ButtonProps {
  disabled?: boolean
  href?: string
  name?: string
  palette?: "brand" | "neutral" | "success" | "error" | "warning"
  size?: "sm" | "md" | "lg"
  type?: "button" | "submit" | "reset"
  value?: string
  variant?: "solid" | "subtle" | "outlined" | "ghost"
}

export const [vars, buttonVars] = createVars(
  {
    lg: "0.75rem",
    md: "0.625rem",
    sm: "0.5rem",

    padding: {
      lg: "1.25rem",
      md: "1rem",
      sm: "0.75rem",
    },

    gap: {
      lg: "0.625rem",
      md: "0.5rem",
      sm: "0.375rem",
    },

    border: {
      focusRing: globalVars.color.brand[500],
      brand: {
        default: globalVars.border.brand.secondary,
        hover: globalVars.border.brand.secondary,
        active: globalVars.border.brand.secondary,
      },
      neutral: {
        default: globalVars.border.neutral.secondary,
        hover: globalVars.border.neutral.secondary,
        active: globalVars.border.neutral.secondary,
      },
      success: {
        default: globalVars.border.success.secondary,
        hover: globalVars.border.success.secondary,
        active: globalVars.border.success.secondary,
      },
      error: {
        default: globalVars.border.error.secondary,
        hover: globalVars.border.error.secondary,
        active: globalVars.border.error.secondary,
      },
      warning: {
        default: globalVars.border.warning.secondary,
        hover: globalVars.border.warning.secondary,
        active: globalVars.border.warning.secondary,
      },
    },

    bg: {
      brand: {
        solid: {
          default: globalVars.bg.brand.solid,
          hover: globalVars.bg.brand.solidHover,
          active: globalVars.bg.brand.solidActive,
        },
        subtle: {
          default: globalVars.bg.brand.secondary,
          hover: globalVars.bg.brand.secondaryHover,
          active: globalVars.bg.brand.secondaryActive,
        },
      },
      neutral: {
        solid: {
          default: globalVars.bg.neutral.solid,
          hover: globalVars.bg.neutral.solidHover,
          active: globalVars.bg.neutral.solidActive,
        },
        subtle: {
          default: globalVars.bg.neutral.secondary,
          hover: globalVars.bg.neutral.secondaryHover,
          active: globalVars.bg.neutral.secondaryActive,
        },
      },
      success: {
        solid: {
          default: globalVars.bg.success.solid,
          hover: globalVars.bg.success.solidHover,
          active: globalVars.bg.success.solidActive,
        },
        subtle: {
          default: globalVars.bg.success.secondary,
          hover: globalVars.bg.success.secondaryHover,
          active: globalVars.bg.success.secondaryActive,
        },
      },
      error: {
        solid: {
          default: globalVars.bg.error.solid,
          hover: globalVars.bg.error.solidHover,
          active: globalVars.bg.error.solidActive,
        },
        subtle: {
          default: globalVars.bg.error.secondary,
          hover: globalVars.bg.error.secondaryHover,
          active: globalVars.bg.error.secondaryActive,
        },
      },
      warning: {
        solid: {
          default: globalVars.bg.warning.solid,
          hover: globalVars.bg.warning.solidHover,
          active: globalVars.bg.warning.solidActive,
        },
        subtle: {
          default: globalVars.bg.warning.secondary,
          hover: globalVars.bg.warning.secondaryHover,
          active: globalVars.bg.warning.secondaryActive,
        },
      },
    },

    fg: {
      brand: {
        solid: {
          default: globalVars.fg.brand.solid,
          hover: globalVars.fg.brand.solid,
          active: globalVars.fg.brand.solid,
        },
        subtle: {
          default: globalVars.fg.brand.secondary,
          hover: globalVars.fg.brand.secondaryHover,
          active: globalVars.fg.brand.secondaryActive,
        },
        ghost: {
          default: globalVars.fg.brand.tertiary,
          hover: globalVars.fg.brand.tertiaryHover,
          active: globalVars.fg.brand.tertiaryActive,
        },
      },
      neutral: {
        solid: {
          default: globalVars.fg.neutral.solid,
          hover: globalVars.fg.neutral.solid,
          active: globalVars.fg.neutral.solid,
        },
        subtle: {
          default: globalVars.fg.neutral.secondary,
          hover: globalVars.fg.neutral.secondaryHover,
          active: globalVars.fg.neutral.secondaryActive,
        },
        ghost: {
          default: globalVars.fg.neutral.tertiary,
          hover: globalVars.fg.neutral.tertiaryHover,
          active: globalVars.fg.neutral.tertiaryActive,
        },
      },
      success: {
        solid: {
          default: globalVars.fg.success.solid,
          hover: globalVars.fg.success.solid,
          active: globalVars.fg.success.solid,
        },
        subtle: {
          default: globalVars.fg.success.secondary,
          hover: globalVars.fg.success.secondaryHover,
          active: globalVars.fg.success.secondaryActive,
        },
        ghost: {
          default: globalVars.fg.success.tertiary,
          hover: globalVars.fg.success.tertiaryHover,
          active: globalVars.fg.success.tertiaryActive,
        },
      },
      error: {
        solid: {
          default: globalVars.fg.error.solid,
          hover: globalVars.fg.error.solid,
          active: globalVars.fg.error.solid,
        },
        subtle: {
          default: globalVars.fg.error.secondary,
          hover: globalVars.fg.error.secondaryHover,
          active: globalVars.fg.error.secondaryActive,
        },
        ghost: {
          default: globalVars.fg.error.tertiary,
          hover: globalVars.fg.error.tertiaryHover,
          active: globalVars.fg.error.tertiaryActive,
        },
      },
      warning: {
        solid: {
          default: globalVars.fg.warning.solid,
          hover: globalVars.fg.warning.solid,
          active: globalVars.fg.warning.solid,
        },
        subtle: {
          default: globalVars.fg.warning.secondary,
          hover: globalVars.fg.warning.secondaryHover,
          active: globalVars.fg.warning.secondaryActive,
        },
        ghost: {
          default: globalVars.fg.warning.tertiary,
          hover: globalVars.fg.warning.tertiaryHover,
          active: globalVars.fg.warning.tertiaryActive,
        },
      },
    },
  },
  {
    prefix: "button",
  },
)

const buttonStyles = css(buttonVars, {
  ":host": {
    display: "inline-flex",
  },

  ".root": {
    alignItems: "center",
    backgroundColor: "transparent",
    cursor: "pointer",
    display: "flex",
    justifyContent: "center",
    outline: "none",
    position: "relative",
    textBoxEdge: "cap alphabetic",
    textBoxTrim: "both",
    textDecoration: "none",
    userSelect: "none",

    "&::before": {
      borderRadius: "inherit",
      boxShadow: `0 0 0 2px ${vars.border.focusRing}`,
      content: "''",
      inset: 0,
      opacity: 0,
      pointerEvents: "none",
      position: "absolute",
      zIndex: -1,
    },

    "&:focus-visible::before": {
      opacity: 0.16,
    },

    '&:disabled, &[aria-disabled="true"]': {
      cursor: "not-allowed",
      opacity: 0.32,
      pointerEvents: "none",
    },
  },

  ".label": {
    display: "flex",
  },

  ":where(.start-icon, .end-icon):not([hidden])": {
    display: "flex",

    "& ::slotted(*)": {
      height: 18,
      width: 18,
    },
  },

  ...Object.fromEntries(
    (["brand", "neutral", "success", "error", "warning"] as const).map(
      (palette) => [
        `:host([variant='solid'][palette='${palette}']) .root`,
        {
          backgroundColor: vars.bg[palette].solid.default,
          color: vars.fg[palette].solid.default,

          ...hover({
            backgroundColor: vars.bg[palette].solid.hover,
            color: vars.fg[palette].solid.hover,
          }),

          "&:active": {
            backgroundColor: vars.bg[palette].solid.active,
            color: vars.fg[palette].solid.active,
          },
        },
      ],
    ),
  ),

  ...Object.fromEntries(
    (["brand", "neutral", "success", "error", "warning"] as const).map(
      (palette) => [
        `:host([variant='subtle'][palette='${palette}']) .root`,
        {
          backgroundColor: vars.bg[palette].subtle.default,
          color: vars.fg[palette].subtle.default,

          ...hover({
            backgroundColor: vars.bg[palette].subtle.hover,
            color: vars.fg[palette].subtle.hover,
          }),

          "&:active": {
            backgroundColor: vars.bg[palette].subtle.active,
            color: vars.fg[palette].subtle.active,
          },
        },
      ],
    ),
  ),

  ...Object.fromEntries(
    (["brand", "neutral", "success", "error", "warning"] as const).map(
      (palette) => [
        `:host([variant='outlined'][palette='${palette}']) .root`,
        {
          boxShadow: `inset 0 0 0 1px ${vars.border[palette].default}`,
          color: vars.fg[palette].ghost.default,

          ...hover({
            boxShadow: `inset 0 0 0 1px ${vars.border[palette].hover}`,
            color: vars.fg[palette].ghost.hover,
          }),

          "&:active": {
            boxShadow: `inset 0 0 0 1px ${vars.border[palette].active}`,
            color: vars.fg[palette].ghost.active,
          },
        },
      ],
    ),
  ),

  ...Object.fromEntries(
    (["brand", "neutral", "success", "error", "warning"] as const).map(
      (palette) => [
        `:host([variant='ghost'][palette='${palette}']) .root`,
        {
          color: vars.fg[palette].ghost.default,

          ...hover({
            color: vars.fg[palette].ghost.hover,
          }),

          "&:active": {
            color: vars.fg[palette].ghost.active,
          },
        },
      ],
    ),
  ),

  ":host([size='sm']) .root": {
    ...globalVars.text.button.sm,
    borderRadius: vars.sm,
    gap: vars.gap.sm,
    height: 32,
    padding: `0 ${vars.padding.sm}`,
  },

  ":host([size='md']) .root": {
    ...globalVars.text.button.md,
    borderRadius: vars.md,
    gap: vars.gap.md,
    height: 40,
    padding: `0 ${vars.padding.md}`,
  },

  ":host([size='lg']) .root": {
    ...globalVars.text.button.lg,
    borderRadius: vars.lg,
    gap: vars.gap.lg,
    height: 48,
    padding: `0 ${vars.padding.lg}`,
  },
})

const defaultProps: Required<
  Pick<ButtonProps, "palette" | "size" | "type" | "variant">
> = {
  palette: "brand",
  size: "md",
  type: "button",
  variant: "solid",
}

const _Button: Component<ButtonProps> = (_props) => {
  const { href, name, type, value } = useProps("Button", defaultProps, _props)

  const disabled = useDisabled()

  const buttonRef = useButton({ disabled, href, name, type, value })

  const [startIcons, startIconSlotRef] = useAssignedNodes()
  const [endIcons, endIconSlotRef] = useAssignedNodes()

  const children = (
    <>
      <div
        class="start-icon"
        hidden={startIcons.length === 0}
        part="start-icon"
      >
        <slot ref={startIconSlotRef} name="start-icon" />
      </div>
      <div class="label" part="label">
        <slot />
      </div>
      <div class="end-icon" hidden={endIcons.length === 0} part="end-icon">
        <slot ref={endIconSlotRef} name="end-icon" />
      </div>
    </>
  )

  return (
    <host shadowDom={{ delegatesFocus: true }}>
      {href ? (
        <a aria-disabled={disabled} class="root" href={href} part="root">
          {children}
        </a>
      ) : (
        <button
          ref={buttonRef}
          class="root"
          disabled={disabled}
          part="root"
          type="button"
        >
          {children}
        </button>
      )}
    </host>
  )
}

_Button.props = {
  disabled: Boolean,
  href: String,
  name: String,
  palette: { type: String, reflect: true, value: defaultProps.palette },
  size: { type: String, reflect: true, value: defaultProps.size },
  type: { type: String, value: defaultProps.type },
  value: String,
  variant: { type: String, reflect: true, value: defaultProps.variant },
}

_Button.styles = [globalTokens, globalReset, buttonStyles]

export const Button = c(_Button)

customElements.define("tian-button", Button)

declare global {
  interface HTMLElementTagNameMap {
    "tian-button": InstanceType<typeof Button>
  }
}
