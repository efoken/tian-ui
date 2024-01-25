type Primitive = string | number | null | undefined

type Walkable = {
  [Key in string | number]: Primitive | Walkable
}

export type MapLeafNodes<T, U> = {
  [Prop in keyof T]: T[Prop] extends Primitive | boolean
    ? U
    : T[Prop] extends Record<string | number, any>
      ? MapLeafNodes<T[Prop], U>
      : never
}

export function walkObject<T extends Walkable, U>(
  obj: T,
  fn: (value: Primitive, path: string[]) => U,
  path: string[] = [],
): MapLeafNodes<T, U> {
  const clone = structuredClone<any>(obj)

  for (const [key, value] of Object.entries(obj)) {
    const currentPath = [...path, key]

    if (
      typeof value === "string" ||
      typeof value === "number" ||
      value == null
    ) {
      clone[key] = fn(value as Primitive, currentPath)
    } else if (typeof value === "object" && !Array.isArray(value)) {
      clone[key] = walkObject(value as Walkable, fn, currentPath)
    } else {
      console.warn(
        `Skipping invalid key "${currentPath.join(
          ".",
        )}". Should be a string, number, null or object. Received: "${
          Array.isArray(value) ? "Array" : typeof value
        }"`,
      )
    }
  }

  return clone
}
