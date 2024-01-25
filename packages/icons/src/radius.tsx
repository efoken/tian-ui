import { DOMGenericProperties } from "atomico/types/dom"

export const Radius = (props: DOMGenericProperties) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M21 3H15C8.37258 3 3 8.37258 3 15V21"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
)
