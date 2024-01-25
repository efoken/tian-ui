export function isValidElement<T extends keyof HTMLElementTagNameMap>(
  node?: Node | null,
  localName?: T,
): node is HTMLElementTagNameMap[T] {
  return (
    node != null &&
    node instanceof HTMLElement &&
    (localName == null || node.localName === localName)
  )
}
