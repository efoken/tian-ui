import { DOMGenericProperties } from "atomico/types/dom"

export const Truck = (props: DOMGenericProperties) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M15 16H4C2.89543 16 2 15.1046 2 14V5C2 3.89543 2.89543 3 4 3H13C14.1046 3 15 3.89543 15 5V6M15 16H20C21.1046 16 22 15.1046 22 14V11.7016C22 11.4603 21.9564 11.2228 21.8729 11M15 16V11M15 6H17.0388C17.6463 6 18.2209 6.27618 18.6005 6.75061L21.5617 10.4522C21.6947 10.6184 21.7993 10.8035 21.8729 11M15 6V11M21.8729 11H15M10 18.5C10 19.8807 8.88071 21 7.5 21C6.11929 21 5 19.8807 5 18.5C5 17.1193 6.11929 16 7.5 16C8.88071 16 10 17.1193 10 18.5ZM19 18.5C19 19.8807 17.8807 21 16.5 21C15.1193 21 14 19.8807 14 18.5C14 17.1193 15.1193 16 16.5 16C17.8807 16 19 17.1193 19 18.5Z"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
)