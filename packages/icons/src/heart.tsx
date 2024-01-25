import { DOMGenericProperties } from "atomico/types/dom"

export const Heart = (props: DOMGenericProperties) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" {...props}>
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M3.48901 4.61239C5.57156 2.46254 8.94805 2.46254 11.0306 4.61239L11.6388 5.24019C11.8366 5.44438 12.1634 5.44438 12.3612 5.24019L12.9694 4.61239C15.0519 2.46254 18.4284 2.46254 20.511 4.61239C25.1469 9.3981 17.8516 15.9803 13.7024 20.2954C12.7991 21.2349 11.2009 21.2349 10.2976 20.2954C6.14837 15.9803 -1.1469 9.3981 3.48901 4.61239Z"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
)
