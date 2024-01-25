import { useDisabled } from "@atomico/hooks/use-disabled"
import { useRender } from "@atomico/hooks/use-render"
import { css, cx, globalReset, globalTokens, useProps } from "@tian-ui/core"
import { Component, c } from "atomico"
import { TextInput, TextInputProps, inputVars, vars } from "./text-input"

export interface TextAreaProps extends TextInputProps {
  rows?: number
}

const textAreaStyles = css(inputVars, {
  "::slotted([slot='input'])": {
    resize: "none",
  },

  ":host([size='md']) ::slotted([slot='input'])": {
    height: "auto",
    lineHeight: `calc(40px - ${vars.padding.md} * 2)`,
    minHeight: 40,
    padding: `${vars.padding.md}`,
  },

  ":host([size='lg']) ::slotted([slot='input'])": {
    height: "auto",
    lineHeight: `calc(48px - ${vars.padding.lg} * 2)`,
    minHeight: 48,
    padding: `${vars.padding.lg}`,
  },
})

const defaultProps: Required<
  Pick<TextAreaProps, "error" | "size" | "variant">
> = {
  error: false,
  size: "md",
  variant: "outlined",
}

const _TextArea: Component<TextAreaProps> = (_props) => {
  const { error, maxLength, minLength, name, placeholder, rows, value } =
    useProps("TextArea", defaultProps, _props)

  const disabled = useDisabled()

  useRender(() => (
    <textarea
      aria-invalid={error}
      disabled={disabled}
      maxLength={maxLength}
      minLength={minLength}
      name={name}
      placeholder={placeholder}
      rows={rows}
      slot="input"
    >
      {value}
    </textarea>
  ))

  return (
    <host shadowDom={{ delegatesFocus: true }}>
      <div class={cx("root", disabled && "is-disabled")} part="root">
        <slot name="input" />
      </div>
    </host>
  )
}

_TextArea.props = {
  ...TextInput.props,
  error: { type: Boolean, reflect: true, value: defaultProps.error },
  rows: Number,
  size: { type: String, reflect: true, value: defaultProps.size },
  variant: { type: String, reflect: true, value: defaultProps.variant },
}

_TextArea.styles = [globalTokens, globalReset, textAreaStyles]

export const TextArea = c(_TextArea, TextInput)

customElements.define("tian-text-area", TextArea)

declare global {
  interface HTMLElementTagNameMap {
    "tian-text-area": InstanceType<typeof TextArea>
  }
}
