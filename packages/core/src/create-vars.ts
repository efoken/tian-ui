import { CSSObject } from "@emotion/serialize"
import { MapLeafNodes, walkObject } from "./walk-object"

function kebabCase(str: string) {
  return str.replaceAll(/([a-z])([A-Z])/g, "$1-$2").toLowerCase()
}

export type CSSVar = `var(--${string})` | `var(--${string}, ${string | number})`

interface NullableTokens {
  [key: string]: string | number | NullableTokens | null
}

export type CSSVars<T extends NullableTokens> = MapLeafNodes<T, CSSVar>

interface Tokens {
  [key: string]: string | number | Tokens
}

interface CreateVarsOptions {
  prefix?: string
}

function toCssVars<T extends Tokens>(obj: T, options: CreateVarsOptions = {}) {
  const varSetters: { name: string; value: string | number }[] = []

  const vars = walkObject(obj, (value, path) => {
    const name = `${options.prefix ? `${options.prefix}-` : ""}${kebabCase(
      path.join("-"),
    )}`

    varSetters.push({
      name: `--${name}`,
      value: value ?? "",
    })

    return `var(--${name})`
  })

  return [vars, varSetters] as [CSSVars<T>, typeof varSetters]
}

export function createVars<T extends Tokens>(
  obj: T,
  options?: CreateVarsOptions,
): [CSSVars<T>, CSSObject] {
  const [vars, varSetters] = toCssVars(obj, options)

  return [
    vars,
    {
      ":host": Object.fromEntries(
        varSetters.map(({ name, value }) => [name, value]),
      ),
    },
  ]
}
