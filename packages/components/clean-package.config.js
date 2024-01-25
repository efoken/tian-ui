const fs = require("node:fs")

module.exports = {
  replace: {
    main: "dist/index.js",
    module: "dist/index.mjs",
    exports: Object.fromEntries(
      [...fs.readdirSync("./src"), "package.json"].map((file) =>
        file === "index.ts"
          ? [
              ".",
              {
                types: "./dist/index.d.ts",
                import: "./dist/index.mjs",
                require: "./dist/index.js",
              },
            ]
          : file === "package.json"
            ? [`./${file}`, `./${file}`]
            : [
                `./${file}`,
                {
                  types: `./dist/${file}/index.d.ts`,
                  import: `./dist/${file}/index.mjs`,
                  require: `./dist/${file}/index.js`,
                },
              ],
      ),
    ),
    types: "dist/index.d.ts",
  },
}
