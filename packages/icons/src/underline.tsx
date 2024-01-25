import { DOMGenericProperties } from "atomico/types/dom"

export const Underline = (props: DOMGenericProperties) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M18 3V10.875C18 13.9816 15.3137 16.5 12 16.5C8.68629 16.5 6 13.9816 6 10.875V3M5 21H19"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
)
