import { DOMGenericProperties } from "atomico/types/dom"

export const CornerDownRight = (props: DOMGenericProperties) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M21 16H7C4.79086 16 3 14.2091 3 12V3M21 16L16 11M21 16L16 21"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
)
