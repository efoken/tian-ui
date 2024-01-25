import { useReflectEvent } from "@atomico/hooks/use-reflect-event"
import { useRender } from "@atomico/hooks/use-render"
import { useRef } from "atomico"

export interface UseButtonProps {
  disabled?: boolean
  href?: string
  name?: string
  type: "button" | "submit" | "reset"
  value?: string
}

export function useButton({
  disabled,
  href,
  name,
  type,
  value,
}: UseButtonProps) {
  const innerRef = useRef<HTMLButtonElement>()

  useRender(
    () =>
      href ? undefined : (
        <button
          ref={innerRef}
          disabled={disabled}
          name={name}
          slot="button"
          tabIndex={-1}
          type={type}
          value={value}
        />
      ),
    [disabled, href, name, type, value],
  )

  const buttonRef = useRef<HTMLButtonElement>()

  useReflectEvent(buttonRef, innerRef, "click")

  return buttonRef
}
