import { DOMGenericProperties } from "atomico/types/dom"

export const Plus = (props: DOMGenericProperties) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M4 12L20 12M12 4L12 20"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
)
