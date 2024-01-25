import { DOMGenericProperties } from "atomico/types/dom"

export const CornerDownLeft = (props: DOMGenericProperties) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M3 16H17C19.2091 16 21 14.2091 21 12V3M3 16L8 11M3 16L8 21"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
)
