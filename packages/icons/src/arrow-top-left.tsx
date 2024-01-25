import { DOMGenericProperties } from "atomico/types/dom"

export const ArrowTopLeft = (props: DOMGenericProperties) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M5 5H14M5 5V14M5 5L19 19"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
)
