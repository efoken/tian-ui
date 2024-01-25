import { DOMGenericProperties } from "atomico/types/dom"

export const ArrowDown = (props: DOMGenericProperties) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M12 3L12 21M12 21L19 14M12 21L5 14"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
)
