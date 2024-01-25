import { DOMGenericProperties } from "atomico/types/dom"

export const SwitchHorizontal = (props: DOMGenericProperties) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M3 7L21 7M21 7L17 11M21 7L17 3M21 17L3 17M3 17L7 21M3 17L7 13"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
)
