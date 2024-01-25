import { DOMGenericProperties } from "atomico/types/dom"

export const Stopwatch = (props: DOMGenericProperties) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M12 5.5C7.58172 5.5 4 9.08172 4 13.5C4 17.9183 7.58172 21.5 12 21.5C16.4183 21.5 20 17.9183 20 13.5C20 9.08172 16.4183 5.5 12 5.5ZM12 5.5V2.5M12 9.5V13.1318C12 13.3676 12.0937 13.5937 12.2604 13.7604L14.6667 16.1667M12 2.5H15M12 2.5H9M3 6.5L5 4.5M21 6.5L19 4.5"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
)
