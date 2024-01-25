import {
  css,
  globalReset,
  globalTokens,
  globalVars,
  useProps,
} from "@tian-ui/core"
import { useAssignedNodes } from "@tian-ui/hooks"
import { Cross } from "@tian-ui/icons"
import { Component, c } from "atomico"
import { ButtonIcon } from "../buttons"

export interface BannerProps {
  description?: string
  palette?: "neutral" | "brand" | "success" | "error" | "warning"
  size?: "md" | "lg"
  title?: string
}

const bannerStyles = css({
  ":host": {
    display: "block",
  },

  ".root": {
    display: "flex",
  },

  ".icon": {
    display: "flex",
  },

  ".content": {
    display: "flex",
    flexGrow: 1,
  },

  ".text": {
    display: "flex",
    flexDirection: "column",
  },

  ".description": {
    ...globalVars.text.paragraph.md,
  },

  ".buttons": {
    display: "flex",
    gap: globalVars.md,
  },

  ":host([palette='neutral']) .root": {
    "&": {
      backgroundColor: globalVars.bg.secondary,
      boxShadow: `inset 0 0 0 1px ${globalVars.border.tertiary}`,
    },

    "& .icon": {
      color: globalVars.fg.tertiary,
    },

    "& .title": {
      color: globalVars.fg.primary,
    },

    "& .description": {
      color: globalVars.fg.secondary,
    },
  },

  ":host([palette='brand']) .root": {
    "&": {
      backgroundColor: globalVars.bg.brand.primary,
      boxShadow: `inset 0 0 0 1px ${globalVars.border.brand.tertiary}`,
    },

    "& .icon": {
      color: globalVars.fg.brand.tertiary,
    },

    "& .title": {
      color: globalVars.fg.brand.primary,
    },

    "& .description": {
      color: globalVars.fg.brand.secondary,
    },
  },

  ":host([palette='success']) .root": {
    "&": {
      backgroundColor: globalVars.bg.success.primary,
      boxShadow: `inset 0 0 0 1px ${globalVars.border.success.tertiary}`,
    },

    "& .icon": {
      color: globalVars.fg.success.tertiary,
    },

    "& .title": {
      color: globalVars.fg.success.primary,
    },

    "& .description": {
      color: globalVars.fg.success.secondary,
    },
  },

  ":host([palette='error']) .root": {
    "&": {
      backgroundColor: globalVars.bg.error.primary,
      boxShadow: `inset 0 0 0 1px ${globalVars.border.error.tertiary}`,
    },

    "& .icon": {
      color: globalVars.fg.error.tertiary,
    },

    "& .title": {
      color: globalVars.fg.error.primary,
    },

    "& .description": {
      color: globalVars.fg.error.secondary,
    },
  },

  ":host([palette='warning']) .root": {
    "&": {
      backgroundColor: globalVars.bg.warning.primary,
      boxShadow: `inset 0 0 0 1px ${globalVars.border.warning.tertiary}`,
    },

    "& .icon": {
      color: globalVars.fg.warning.tertiary,
    },

    "& .title": {
      color: globalVars.fg.warning.primary,
    },

    "& .description": {
      color: globalVars.fg.warning.secondary,
    },
  },

  ":host([size='md']) .root": {
    "&": {
      borderRadius: globalVars.md,
      gap: globalVars.xl,
      padding: globalVars["2xl"],
    },

    "& .icon ::slotted(*)": {
      height: 20,
      width: 20,
    },

    "& .content": {
      alignItems: "center",
      gap: globalVars.xl,
    },

    "& .text": {
      flexGrow: 1,
      gap: globalVars.none,
    },

    "& .title": {
      ...globalVars.text.paragraph.md,
      fontWeight: 700,
    },
  },

  ":host([size='lg']) .root": {
    "&": {
      borderRadius: globalVars.xl,
      gap: globalVars["2xl"],
      padding: globalVars["3xl"],
    },

    "& .icon ::slotted(*)": {
      height: 24,
      width: 24,
    },

    "& .content": {
      alignItems: "flex-start",
      flexDirection: "column",
      gap: globalVars["2xl"],
    },

    "& .text": {
      alignSelf: "stretch",
      gap: globalVars.xxs,
    },

    "& .title": {
      ...globalVars.text.paragraph.lg,
      fontWeight: 700,
    },
  },
})

const defaultProps: Required<Pick<BannerProps, "palette" | "size">> = {
  palette: "neutral",
  size: "md",
}

const _Banner: Component<BannerProps> = (_props) => {
  const { description, palette, title } = useProps(
    "Banner",
    defaultProps,
    _props,
  )

  const [buttons, buttonsSlotRef] = useAssignedNodes()

  return (
    <host shadowDom>
      <div class="root" part="root">
        <div class="icon" part="icon">
          <slot name="icon" />
        </div>
        <div class="content" part="content">
          <div class="text" part="text">
            <div class="title" part="title">
              {title}
            </div>
            <div class="description" part="description">
              {description}
            </div>
          </div>
          <div class="buttons" hidden={buttons.length === 0} part="buttons">
            <slot ref={buttonsSlotRef} name="buttons" />
          </div>
        </div>
        <ButtonIcon
          class="close-button"
          palette={palette}
          part="close-button"
          size="sm"
          variant="ghost"
        >
          <Cross aria-label="Close" />
        </ButtonIcon>
      </div>
    </host>
  )
}

_Banner.props = {
  description: String,
  palette: { type: String, reflect: true, value: defaultProps.palette },
  size: { type: String, reflect: true, value: defaultProps.size },
  title: String,
}

_Banner.styles = [globalTokens, globalReset, bannerStyles]

export const Banner = c(_Banner)

customElements.define("tian-banner", Banner)

declare global {
  interface HTMLElementTagNameMap {
    "tian-banner": InstanceType<typeof Banner>
  }
}
