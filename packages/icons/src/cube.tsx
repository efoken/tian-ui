import { DOMGenericProperties } from "atomico/types/dom"

export const Cube = (props: DOMGenericProperties) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M12 10.7713L2 5.76859M12 10.7713L22 5.76859M12 10.7713V23M2 5.76859L11.1128 1.20978C11.6719 0.930072 12.3281 0.930072 12.8873 1.20978L22 5.76859M2 5.76859V16.7425C2 17.511 2.43124 18.2131 3.11275 18.554L12 23M22 5.76859V16.7425C22 17.511 21.5688 18.2131 20.8873 18.554L12 23"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
)
