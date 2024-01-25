import { DOMGenericProperties } from "atomico/types/dom"

export const LineHeight = (props: DOMGenericProperties) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M4 2H20M4 22H20M15.125 13.5L12 6L8.875 13.5M15.125 13.5L17 18M15.125 13.5H8.875M8.875 13.5L7 18"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
)
