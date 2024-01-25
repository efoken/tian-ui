import { DOMGenericProperties } from "atomico/types/dom"

export const HorizontalBarChart = (props: DOMGenericProperties) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M2 8.66667L20 8.66667C21.1046 8.66667 22 7.77124 22 6.66667L22 4C22 2.89543 21.1046 2 20 2L4 2C2.89543 2 2 2.89543 2 4L2 8.66667ZM2 8.66667L2 15.3333M2 8.66667L14.4444 8.66667C15.549 8.66667 16.4444 9.5621 16.4444 10.6667L16.4444 13.3333C16.4444 14.4379 15.549 15.3333 14.4444 15.3333L2 15.3333M2 15.3333L2 20C2 21.1046 2.89543 22 4 22L8.88889 22C9.99346 22 10.8889 21.1046 10.8889 20L10.8889 17.3333C10.8889 16.2288 9.99346 15.3333 8.88889 15.3333L2 15.3333Z"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
)
