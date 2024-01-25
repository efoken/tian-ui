import { CSSObject, serializeStyles } from "@emotion/serialize"

const sheets = new Map<string, CSSStyleSheet | HTMLStyleElement>()

const cache = {
  registered: {},
}

export function createSheet(cssText: string) {
  if (document.adoptedStyleSheets) {
    const sheet = new CSSStyleSheet()
    sheet.replaceSync(cssText)
    return sheet
  }
  const sheet = document.createElement("style")
  sheet.textContent = cssText
  return sheet
}

export function css(...args: CSSObject[]) {
  const serialized = serializeStyles(args, cache.registered)
  const sheet = sheets.get(serialized.name) ?? createSheet(serialized.styles)
  sheets.set(serialized.name, sheet)
  return sheet
}
