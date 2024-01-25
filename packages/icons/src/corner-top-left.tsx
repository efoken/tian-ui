import { DOMGenericProperties } from "atomico/types/dom"

export const CornerTopLeft = (props: DOMGenericProperties) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M3 8H17C19.2091 8 21 9.79086 21 12V21M3 8L8 13M3 8L8 3"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
)
