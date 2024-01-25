import { DOMGenericProperties } from "atomico/types/dom"

export const CornerTopRight = (props: DOMGenericProperties) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M21 8H7C4.79086 8 3 9.79086 3 12V21M21 8L16 13M21 8L16 3"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
)
