import {
  css,
  globalReset,
  globalTokens,
  globalVars,
  useProps,
} from "@tian-ui/core"
import { ChevronDown } from "@tian-ui/icons"
import { Component, DOMEvent, c, useProp, useRef, useState } from "atomico"

export interface AccordionProps {
  open?: boolean
  variant?: "outline" | "underline" | "subtle"
}

const accordionStyles = css({
  ":host": {
    display: "block",
  },

  ".root": {
    display: "flex",
    flexDirection: "column",
    gap: globalVars["4xl"],
    overflow: "hidden",
  },

  ".expand-icon, .content": {
    transitionDuration: "300ms",
    transitionProperty: "opacity, transform",
    transitionTimingFunction: "linear",
  },

  ":host([variant='outline']) .root": {
    backgroundColor: globalVars.bg.primary,
    borderRadius: globalVars.xl,
    boxShadow: `inset 0 0 0 1px ${globalVars.border.tertiary}`,
  },

  ":host([variant='underline']) .root": {
    backgroundColor: globalVars.bg.primary,
    boxShadow: `inset 0 -1px 0 0 ${globalVars.border.tertiary}`,
  },

  ":host([variant='subtle']) .root": {
    backgroundColor: globalVars.bg.secondary,
    borderRadius: globalVars.xl,
  },

  ".summary": {
    backgroundColor: "transparent",
    cursor: "pointer",
    display: "flex",
    outline: "none",
    padding: globalVars["4xl"],
    userSelect: "none",
    width: "100%",
  },

  ".title": {
    ...globalVars.text.paragraph.lg,
    alignItems: "center",
    alignSelf: "stretch",
    display: "flex",
    fontWeight: 700,
    gap: globalVars.xl,
    height: 30,
    width: "100%",

    "& ::slotted([slot='icon'])": {
      height: 24,
      width: 24,
    },
  },

  ".expand-icon": {
    alignItems: "center",
    display: "flex",
    height: 40,
    justifyContent: "center",
    marginInlineStart: "auto",
    width: 40,

    "& svg": {
      height: 18,
      width: 18,
    },
  },

  ".content": {
    ...globalVars.text.paragraph.lg,
    color: globalVars.fg.secondary,
    fontWeight: 500,
    padding: `0 ${globalVars["4xl"]} ${globalVars["4xl"]}`,
  },
})

const defaultProps: Required<Pick<AccordionProps, "open" | "variant">> = {
  open: false,
  variant: "outline",
}

const _Accordion: Component<AccordionProps> = (_props) => {
  useProps("Accordion", defaultProps, _props)

  const [open, setOpen] = useProp<boolean>("open")

  const rootRef = useRef<HTMLDetailsElement>()
  const summaryRef = useRef<HTMLElement>()
  const contentRef = useRef<HTMLDivElement>()

  const [shrinking, setShrinking] = useState(false)
  const [expanding, setExpanding] = useState(false)

  const [height, setHeight] = useState<number | undefined>()

  const animationRef = useRef<Animation>()

  const expand = () => {
    setExpanding(true)

    animationRef.current?.cancel()

    if (rootRef.current != null) {
      animationRef.current = rootRef.current.animate(
        {
          height: [
            `${rootRef.current.offsetHeight}px`,
            `${
              (summaryRef.current?.clientHeight ?? 0) +
              (contentRef.current?.clientHeight ?? 0)
            }px`,
          ],
        },
        {
          duration: 300,
          easing: "ease-in-out",
        },
      )
      animationRef.current.addEventListener("finish", () => {
        setOpen(true)
        setExpanding(false)
        animationRef.current = undefined
        setHeight(undefined)
      })
      animationRef.current.addEventListener("cancel", () => {
        setExpanding(false)
      })
    }
  }

  const shrink = () => {
    setShrinking(true)

    animationRef.current?.cancel()

    if (rootRef.current != null) {
      animationRef.current = rootRef.current.animate(
        {
          height: [
            `${rootRef.current.offsetHeight}px`,
            `${summaryRef.current?.offsetHeight ?? 0}px`,
          ],
        },
        {
          duration: 300,
          easing: "ease-in-out",
        },
      )
      animationRef.current.addEventListener("finish", () => {
        setOpen(false)
        setShrinking(false)
        animationRef.current = undefined
        setHeight(undefined)
      })
      animationRef.current.addEventListener("cancel", () => {
        setShrinking(false)
      })
    }
  }

  const handleTriggerClick = (event: DOMEvent<HTMLElement, MouseEvent>) => {
    event.preventDefault()

    if (shrinking || !open) {
      if (rootRef.current != null) {
        setHeight(rootRef.current.offsetHeight)
        requestAnimationFrame(() => expand())
      }
    } else if (expanding || open) {
      shrink()
    }
  }

  return (
    <host shadowDom>
      <details
        ref={rootRef}
        class="root"
        open={expanding || open || shrinking}
        part="root"
        style={{
          height: height == null ? "auto" : `${height}px`,
          overflow: height == null && !shrinking ? "visible" : "hidden",
        }}
      >
        <summary
          ref={summaryRef}
          class="summary"
          part="summary"
          onclick={handleTriggerClick}
        >
          <div class="title" part="title">
            <slot name="icon" />
            <slot name="title" />
            <div
              class="expand-icon"
              part="expand-icon"
              style={{
                transform:
                  (expanding || open) && !shrinking
                    ? "rotate(180deg)"
                    : "rotate(0deg)",
              }}
            >
              <ChevronDown aria-hidden />
            </div>
          </div>
        </summary>
        <div
          ref={contentRef}
          class="content"
          part="content"
          style={{
            opacity: (expanding || open) && !shrinking ? 1 : 0,
          }}
        >
          <slot />
        </div>
      </details>
    </host>
  )
}

_Accordion.props = {
  open: { type: Boolean, value: defaultProps.open },
  variant: { type: String, reflect: true, value: defaultProps.variant },
}

_Accordion.styles = [globalTokens, globalReset, accordionStyles]

export const Accordion = c(_Accordion)

customElements.define("tian-accordion", Accordion)

declare global {
  interface HTMLElementTagNameMap {
    "tian-accordion": InstanceType<typeof Accordion>
  }
}
