import { DOMGenericProperties } from "atomico/types/dom"

export const Hexagon = (props: DOMGenericProperties) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M9.25759 2.72603C10.9546 1.75799 13.0454 1.75799 14.7424 2.72603L18.7576 5.01644C20.4546 5.98449 21.5 7.7735 21.5 9.70959V14.2904C21.5 16.2265 20.4546 18.0155 18.7576 18.9836L14.7424 21.274C13.0454 22.242 10.9546 22.242 9.25759 21.274L5.24241 18.9836C3.5454 18.0155 2.5 16.2265 2.5 14.2904V9.70959C2.5 7.7735 3.5454 5.98449 5.24241 5.01644L9.25759 2.72603Z"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
)
