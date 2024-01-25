import { defineConfig } from "tsup"

export default defineConfig({
  format: ["cjs", "esm"],
  target: "es2021",
  sourcemap: true,
})
