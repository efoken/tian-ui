import { DOMGenericProperties } from "atomico/types/dom"

export const BarChart = (props: DOMGenericProperties) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M2 4C2 2.89543 2.89543 2 4 2C5.10457 2 6 2.89543 6 4V20C6 21.1046 5.10457 22 4 22C2.89543 22 2 21.1046 2 20V4Z"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M10 10C10 8.89543 10.8954 8 12 8C13.1046 8 14 8.89543 14 10V20C14 21.1046 13.1046 22 12 22C10.8954 22 10 21.1046 10 20V10Z"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M18 15C18 13.8954 18.8954 13 20 13C21.1046 13 22 13.8954 22 15V20C22 21.1046 21.1046 22 20 22C18.8954 22 18 21.1046 18 20V15Z"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
)
