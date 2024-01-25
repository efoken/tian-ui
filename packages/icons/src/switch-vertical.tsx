import { DOMGenericProperties } from "atomico/types/dom"

export const SwitchVertical = (props: DOMGenericProperties) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M17 3L17 21M17 21L13 17M17 21L21 17M7 21L7 3M7 3L3 7M7 3L11 7"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
)
