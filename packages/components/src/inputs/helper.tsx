import {
  css,
  globalReset,
  globalTokens,
  globalVars,
  useProps,
} from "@tian-ui/core"
import { InfoCircle } from "@tian-ui/icons"
import { Component, c } from "atomico"

export interface HelperProps {
  icon?: boolean
  palette?: "neutral" | "error" | "warning" | "success"
  size?: "sm" | "md"
}

const helperStyles = css({
  ":host": {
    alignItems: "center",
    display: "inline-flex",
  },

  ":host([palette='neutral'])": {
    color: globalVars.fg.neutral.secondary,
  },

  ":host([palette='error'])": {
    color: globalVars.fg.error.secondary,
  },

  ":host([palette='warning'])": {
    color: globalVars.fg.warning.secondary,
  },

  ":host([palette='success'])": {
    color: globalVars.fg.success.secondary,
  },

  ":host([size='sm'])": {
    ...globalVars.text.paragraph.xs,
    gap: globalVars.xs,
  },

  ":host([size='md'])": {
    ...globalVars.text.paragraph.sm,
    gap: globalVars.sm,
  },

  ".icon": {
    display: "flex",

    "::slotted(*), svg": {
      height: 16,
      width: 16,
    },
  },
})

const defaultProps: Required<Pick<HelperProps, "icon" | "palette" | "size">> = {
  icon: true,
  palette: "neutral",
  size: "md",
}

const _Helper: Component<HelperProps> = (_props) => {
  const { palette } = useProps("Helper", defaultProps, _props)

  const iconMapping = {
    neutral: <InfoCircle />,
    error: <InfoCircle />,
    warning: <InfoCircle />,
    success: <InfoCircle />,
  }

  return (
    <host shadowDom>
      <div class="icon" part="icon">
        {iconMapping[palette]}
      </div>
      <slot />
    </host>
  )
}

_Helper.props = {
  icon: { type: Boolean, value: defaultProps.icon },
  palette: { type: String, reflect: true, value: defaultProps.palette },
  size: { type: String, reflect: true, value: defaultProps.size },
}

_Helper.styles = [globalTokens, globalReset, helperStyles]

export const Helper = c(_Helper)

customElements.define("tian-helper", Helper)

declare global {
  interface HTMLElementTagNameMap {
    "tian-helper": InstanceType<typeof Helper>
  }
}
