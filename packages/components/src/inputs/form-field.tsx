import {
  css,
  globalReset,
  globalTokens,
  globalVars,
  useProps,
} from "@tian-ui/core"
import { useRender } from "@tian-ui/hooks/src/use-render"
import { omit } from "@tian-ui/utils"
import { Component, c } from "atomico"
import { Helper } from "./helper"
import { TextInput, TextInputProps } from "./text-input"
import { useTextInput } from "./use-text-input"

export interface FormFieldProps
  extends Omit<TextInputProps, "inputRef" | "size" | "type" | "variant"> {
  helperMessage?: string
  label?: string
  size?: "sm" | "md"
}

const textAreaStyles = css({
  ":host": {
    display: "flex",
    flexDirection: "column",
  },

  ":host([size='sm'])": {
    gap: globalVars.sm,
  },

  ":host([size='sm']) ::slotted([slot='label'])": {
    ...globalVars.text.input.sm,
    color: globalVars.fg.tertiary,
  },

  ":host([size='md'])": {
    gap: globalVars.md,
  },

  ":host([size='md']) ::slotted([slot='label'])": {
    ...globalVars.text.input.md,
    color: globalVars.fg.tertiary,
  },
})

const defaultProps: Required<Pick<FormFieldProps, "size">> = {
  size: "md",
}

const _FormField: Component<FormFieldProps> = (_props) => {
  const {
    disabled,
    error,
    helperMessage,
    label,
    maxLength,
    minLength,
    name,
    placeholder,
    size,
    value,
  } = useProps("FormField", defaultProps, _props)

  const inputRef = useTextInput({
    disabled,
    error,
    id: "input",
    maxLength,
    minLength,
    name,
    placeholder,
    type: "text",
    value,
  })

  useRender(
    () => (
      <label htmlFor="input" slot="label">
        {label}
      </label>
    ),
    [label],
  )

  return (
    <host shadowDom>
      <slot name="label" />
      <TextInput
        aria-describedby="helper-message"
        disabled={disabled}
        error={error}
        inputRef={inputRef}
        size={size === "sm" ? "md" : "lg"}
        type="text"
      >
        <slot name="input" />
      </TextInput>
      <Helper
        id="helper-message"
        palette={error ? "error" : "neutral"}
        size={size}
      >
        {helperMessage}
      </Helper>
    </host>
  )
}

_FormField.props = {
  ...omit(TextInput.props, ["inputRef", "size", "type", "variant"]),
  helperMessage: String,
  label: String,
  size: { type: String, reflect: true, value: defaultProps.size },
}

_FormField.styles = [globalTokens, globalReset, textAreaStyles]

export const FormField = c(_FormField)

customElements.define("tian-form-field", FormField)

declare global {
  interface HTMLElementTagNameMap {
    "tian-form-field": InstanceType<typeof FormField>
  }
}
