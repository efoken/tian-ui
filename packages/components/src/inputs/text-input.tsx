import { useDisabled } from "@atomico/hooks/use-disabled"
import {
  createVars,
  css,
  cx,
  globalReset,
  globalTokens,
  globalVars,
  hover,
  useProps,
} from "@tian-ui/core"
import { Component, Ref, c } from "atomico"
import { useTextInput } from "./use-text-input"

export interface TextInputProps {
  disabled?: boolean
  error?: boolean
  inputRef?: Ref<HTMLInputElement>
  maxLength?: number
  minLength?: number
  name?: string
  placeholder?: string
  size?: "md" | "lg"
  type: "email" | "password" | "search" | "tel" | "text" | "url"
  value?: string
  variant?: "outlined" | "faded"
}

export const [vars, inputVars] = createVars(
  {
    lg: "0.625rem",
    md: "0.375rem",

    padding: {
      lg: "1rem",
      md: "0.75rem",
    },

    gap: {
      lg: "0.75rem",
      md: "0.5rem",
    },

    border: {
      focusRing: globalVars.color.brand[500],
      default: {
        default: globalVars.color.neutral[100],
        hover: globalVars.color.neutral[200],
        active: globalVars.color.brand[500],
        error: globalVars.color.error[200],
      },
      subtle: {
        active: globalVars.color.brand[500],
        error: globalVars.color.error[200],
      },
    },

    bg: {
      default: {
        default: globalVars.color.white,
        hover: globalVars.color.neutral[50],
        active: globalVars.color.white,
        error: globalVars.color.white,
      },
      subtle: {
        default: globalVars.color.neutral[50],
        hover: globalVars.color.neutral[100],
        active: globalVars.color.brand[25],
        error: globalVars.color.error[25],
      },
    },

    fg: {
      default: {
        primary: {
          default: globalVars.color.neutral[0],
          hover: globalVars.color.neutral[0],
          active: globalVars.color.neutral[0],
          error: globalVars.color.error[900],
        },
        secondary: {
          default: globalVars.color.neutral[500],
          hover: globalVars.color.neutral[500],
          active: globalVars.color.brand[500],
          error: globalVars.color.error[500],
        },
      },
      subtle: {
        primary: {
          default: globalVars.color.black,
          hover: globalVars.color.black,
          active: globalVars.color.black,
          error: globalVars.color.black,
        },
        secondary: {
          default: globalVars.color.neutral[500],
          hover: globalVars.color.neutral[500],
          active: globalVars.color.brand[500],
          error: globalVars.color.error[500],
        },
      },
    },
  },
  {
    prefix: "input",
  },
)

const textInputStyles = css(inputVars, {
  ":host": {
    display: "flex",
    flexShrink: 0,
  },

  ".root": {
    borderStyle: "solid",
    borderWidth: 1,
    display: "flex",
    width: "100%",

    "&.is-disabled": {
      opacity: 0.32,
      pointerEvents: "none",
    },
  },

  "::slotted([slot='input'])": {
    backgroundColor: "transparent",
    borderRadius: "inherit",
    borderWidth: 0,
    boxSizing: "border-box",
    color: "inherit",
    display: "flex",
    font: "inherit",
    lineHeight: "normal",
    margin: -1,
    outline: "none",
    width: "calc(100% + 2px)",
  },

  ":host([variant='outlined']) .root": {
    backgroundColor: vars.bg.default.default,
    borderColor: vars.border.default.default,
    color: vars.fg.default.primary.default,

    "::slotted([slot='input'])::placeholder": {
      color: vars.fg.default.secondary.default,
    },

    ...hover({
      backgroundColor: vars.bg.default.hover,
      borderColor: vars.border.default.hover,
      color: vars.fg.default.primary.hover,

      "::slotted([slot='input'])::placeholder": {
        color: vars.fg.default.secondary.hover,
      },
    }),

    "&:focus-within": {
      backgroundColor: vars.bg.default.active,
      borderColor: vars.border.default.active,
      color: vars.fg.default.primary.active,

      "::slotted([slot='input'])::placeholder": {
        color: vars.fg.default.secondary.active,
      },
    },
  },

  ":host([variant='outlined'][error]) .root": {
    backgroundColor: vars.bg.default.error,
    borderColor: vars.border.default.error,
    color: vars.fg.default.primary.error,

    "::slotted([slot='input'])::placeholder": {
      color: vars.fg.default.secondary.error,
    },
  },

  ":host([variant='faded']) .root": {
    backgroundColor: vars.bg.subtle.default,
    borderColor: "transparent",
    color: vars.fg.subtle.primary.default,

    "::slotted([slot='input'])::placeholder": {
      color: vars.fg.subtle.secondary.default,
    },

    ...hover({
      backgroundColor: vars.bg.subtle.hover,
      color: vars.fg.subtle.primary.hover,

      "::slotted([slot='input'])::placeholder": {
        color: vars.fg.subtle.secondary.hover,
      },
    }),

    "&:focus-within": {
      backgroundColor: vars.bg.subtle.active,
      borderColor: vars.border.subtle.active,
      color: vars.fg.subtle.primary.active,

      "::slotted([slot='input'])::placeholder": {
        color: vars.fg.subtle.secondary.active,
      },
    },
  },

  ":host([variant='faded'][error]) .root": {
    backgroundColor: vars.bg.subtle.error,
    borderColor: vars.border.subtle.error,
    color: vars.fg.subtle.primary.error,

    "::slotted([slot='input'])::placeholder": {
      color: vars.fg.subtle.secondary.error,
    },
  },

  ":host([size='md']) .root": {
    ...globalVars.text.input.md,
    borderRadius: vars.md,
    gap: vars.gap.md,
  },

  ":host([size='md']) ::slotted([slot='input'])": {
    height: 40,
    padding: `${globalVars.none} ${vars.padding.md}`,
  },

  ":host([size='lg']) .root": {
    ...globalVars.text.input.lg,
    borderRadius: vars.lg,
    gap: vars.gap.lg,
  },

  ":host([size='lg']) ::slotted([slot='input'])": {
    height: 48,
    padding: `${globalVars.none} ${vars.padding.lg}`,
  },
})

const defaultProps: Required<
  Pick<TextInputProps, "error" | "size" | "type" | "variant">
> = {
  error: false,
  size: "md",
  type: "text",
  variant: "outlined",
}

const _TextInput: Component<TextInputProps> = (_props) => {
  const {
    error,
    inputRef,
    maxLength,
    minLength,
    name,
    placeholder,
    type,
    value,
  } = useProps("TextInput", defaultProps, _props)

  const disabled = useDisabled()

  useTextInput(
    {
      type,
      disabled,
      error,
      maxLength,
      minLength,
      name,
      placeholder,
      value,
    },
    inputRef,
  )

  return (
    <host shadowDom={{ delegatesFocus: true }}>
      <div class={cx("root", disabled && "is-disabled")} part="root">
        {inputRef ? <slot /> : <slot name="input" />}
      </div>
    </host>
  )
}

_TextInput.props = {
  disabled: Boolean,
  error: { type: Boolean, reflect: true, value: defaultProps.error },
  inputRef: Object,
  maxLength: { type: Number, attr: "maxlength" },
  minLength: { type: Number, attr: "minlength" },
  name: String,
  placeholder: String,
  size: { type: String, reflect: true, value: defaultProps.size },
  type: { type: String, value: defaultProps.type },
  value: String,
  variant: { type: String, reflect: true, value: defaultProps.variant },
}

_TextInput.styles = [globalTokens, globalReset, textInputStyles]

export const TextInput = c(_TextInput)

customElements.define("tian-text-input", TextInput)

declare global {
  interface HTMLElementTagNameMap {
    "tian-text-input": InstanceType<typeof TextInput>
  }
}
