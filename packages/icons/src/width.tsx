import { DOMGenericProperties } from "atomico/types/dom"

export const Width = (props: DOMGenericProperties) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M22 12L18.6667 9M22 12L18.6667 15M22 12L2 12M2 12L5.33333 9M2 12L5.33333 15"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
)
