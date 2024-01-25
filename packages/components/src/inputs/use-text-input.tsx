import { useRender } from "@atomico/hooks/use-render"
import { Ref, useRef } from "atomico"

export interface UseTextInputProps {
  disabled?: boolean
  error?: boolean
  id?: string
  maxLength?: number
  minLength?: number
  name?: string
  placeholder?: string
  type: "email" | "password" | "search" | "tel" | "text" | "url"
  value?: string
}

export function useTextInput(
  {
    disabled,
    error,
    id,
    maxLength,
    minLength,
    name,
    placeholder,
    type,
    value,
  }: UseTextInputProps,
  inputRef?: Ref<HTMLInputElement>,
) {
  const _inputRef = useRef<HTMLInputElement>()

  useRender(
    () =>
      inputRef ? null : (
        <input
          ref={_inputRef}
          aria-invalid={error}
          disabled={disabled}
          id={id}
          maxLength={maxLength}
          minLength={minLength}
          name={name}
          placeholder={placeholder}
          slot="input"
          type={type}
          value={value}
        />
      ),
    [
      disabled,
      error,
      id,
      inputRef,
      maxLength,
      minLength,
      name,
      placeholder,
      type,
      value,
    ],
  )

  return inputRef ?? _inputRef
}
