import { babel } from "@rollup/plugin-babel";
import commonjs from "@rollup/plugin-commonjs";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import url from "@rollup/plugin-url";
import pkg from "./package.json" with { type: "json" };

// @rollup/plugin-typescript relied on the TypeScript compiler API
// (ModuleKind/ts.sys) that TypeScript 7 no longer exposes through the
// top-level "typescript" import. Babel transpiles TS without that API
// so the build keeps working under TS 7. nodeResolve handles the
// relative `.ts`/`.tsx` imports the old typescript plugin used to
// resolve; commonjs unwraps the CJS-style default-imports inside
// styled-components' published ESM build (it does `import t from "react"`
// against react's CJS entry). Declaration files are still produced by
// the `tsc` step that follows rollup in `build`.
export default {
  input: "src/index.ts",
  output: [
    { file: pkg.main, format: "cjs" },
    { file: pkg.module, format: "es" },
  ],
  plugins: [
    url(),
    nodeResolve({
      extensions: [".ts", ".tsx", ".js", ".jsx", ".mjs", ".json"],
    }),
    commonjs(),
    babel({
      babelHelpers: "bundled",
      extensions: [".ts", ".tsx", ".js", ".jsx"],
      // Ignore babel.config.js so its preset-env/styled-components preset
      // doesn't bleed into the rollup pipeline (Babel 8's JSX parser would
      // otherwise turn TS generic syntax like `<T>(...) =>` in plain `.ts`
      // files into JSX parse errors).
      configFile: false,
      babelrc: false,
      presets: [
        ["@babel/preset-env", { targets: "> 0.25%, not dead" }],
        "@babel/preset-typescript",
      ],
      overrides: [
        {
          test: /\.tsx$/,
          presets: [["@babel/preset-react", { runtime: "automatic" }]],
          plugins: ["babel-plugin-styled-components"],
        },
      ],
    }),
  ],
};
