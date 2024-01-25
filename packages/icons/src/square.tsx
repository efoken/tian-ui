import { DOMGenericProperties } from "atomico/types/dom"

export const Square = (props: DOMGenericProperties) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M2 6.44444C2 3.98985 3.98985 2 6.44444 2H17.5556C20.0102 2 22 3.98985 22 6.44444V17.5556C22 20.0102 20.0102 22 17.5556 22H6.44444C3.98985 22 2 20.0102 2 17.5556V6.44444Z"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
)
