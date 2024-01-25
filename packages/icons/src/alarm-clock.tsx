import { DOMGenericProperties } from "atomico/types/dom"

export const AlarmClock = (props: DOMGenericProperties) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M12 10V12.6318C12 12.8676 12.0937 13.0937 12.2604 13.2604L14 15M4 21L6.34315 18.6569M6.34315 18.6569C7.79086 20.1046 9.79086 21 12 21C14.2091 21 16.2091 20.1046 17.6569 18.6569M6.34315 18.6569C4.89543 17.2091 4 15.2091 4 13C4 8.58172 7.58172 5 12 5C16.4183 5 20 8.58172 20 13C20 15.2091 19.1046 17.2091 17.6569 18.6569M20 21L17.6569 18.6569M3 6L6 3M21 6L18 3"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
)
