import { CSSObject } from "@emotion/serialize"

export function hover(obj: CSSObject) {
  return {
    "@media (hover: hover)": {
      "&:hover": obj,
    },
    "@media (hover: none)": {
      "&:active": obj,
    },
  }
}
