import { DOMGenericProperties } from "atomico/types/dom"

export const Strikethrough = (props: DOMGenericProperties) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M17 7.5C17 5.01472 14.7614 3 12 3C9.23858 3 7 5.01472 7 7.5C7 9.98528 9.23858 12 12 12C14.7614 12 17 14.0147 17 16.5C17 18.9853 14.7614 21 12 21C9.23858 21 7 18.9853 7 16.5M3 12H21"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
)
