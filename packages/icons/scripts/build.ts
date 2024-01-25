import fs from "node:fs/promises"
import outdent from "outdent"

function pascalCase(str: string) {
  return `-${str}`.replaceAll(/-\w/g, (c) => c[1].toUpperCase())
}

export default async function main() {
  const files = await fs.readdir("./assets")

  const icons = await Promise.all(
    files.map((file) =>
      fs
        .readFile(`./assets/${file}`)
        .then<[name: string, svg: string]>((value) => [
          file.replace(/\.svg$/, ""),
          value
            .toString()
            .replace(/xmlns=".*?"/, "")
            .replaceAll(/#0b0d12/gi, "currentColor"),
        ]),
    ),
  )

  await fs.mkdir("./src", { recursive: true })

  const exports = await Promise.all(
    icons.map(async ([name, svg]) => {
      await fs.writeFile(
        `./src/${name}.tsx`,
        outdent`
          import { DOMGenericProperties } from "atomico/types/dom"

          export const ${pascalCase(
            name,
          )} = (props: DOMGenericProperties) => ${svg.replace(
            />/,
            " {...props}>",
          )}
        `,
      )
      return name
    }),
  )

  await fs.writeFile(
    "./src/index.ts",
    `${exports.map((name) => `export * from "./${name}"`).join("\n")}\n`,
  )
}

main().catch(console.log)
