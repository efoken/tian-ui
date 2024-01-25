export function cx(...classes: (string | boolean | null | undefined)[]) {
  return classes.flat().filter(Boolean).join(" ")
}
