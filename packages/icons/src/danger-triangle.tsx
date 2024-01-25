import { DOMGenericProperties } from "atomico/types/dom"

export const DangerTriangle = (props: DOMGenericProperties) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M12 16.3157H12.0097M12 12.6724V9.54948M4.16109 21H19.8389C21.4434 21 22.4869 19.3713 21.7694 17.987L14.8957 4.72628C13.7026 2.42458 10.2974 2.42457 9.10432 4.72628L2.23064 17.987C1.51311 19.3713 2.55664 21 4.16109 21Z"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
)
