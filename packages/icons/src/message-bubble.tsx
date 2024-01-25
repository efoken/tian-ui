import { DOMGenericProperties } from "atomico/types/dom"

export const MessageBubble = (props: DOMGenericProperties) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M9 14H15M9 10H15M21 12C21 16.9706 16.9706 21 12 21C10.8971 21 9.84046 20.8016 8.86394 20.4386C8.22996 20.2028 7.54752 20.0905 6.88427 20.2231L5.20631 20.5587C4.15672 20.7687 3.23134 19.8433 3.44126 18.7937L3.77685 17.1157C3.9095 16.4525 3.79715 15.77 3.56145 15.1361C3.1984 14.1595 3 13.1029 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
)
