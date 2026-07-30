import { babel } from "@rollup/plugin-babel";
import commonjs from "@rollup/plugin-commonjs";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import url from "@rollup/plugin-url";
import path from "node:path";
import pkg from "./package.json" with { type: "json" };

const ENTRY = path.resolve("src/index.ts");

// Keep peer/runtime dependencies external so the published bundle does
// not ship duplicate copies of React, styled-components, react-router,
// lodash, etc. Consumers must deduplicate against their own installs;
// bundling them inline broke theming and hooks in downstream apps.
// Anything that is not a relative or absolute path is treated as a
// bare module specifier and left as an `import`/`require` in the output.
// The entry file is exempt — rollup refuses to treat the input as external.
const external = (id) => {
  if (id === ENTRY || id === "src/index.ts") return false;
  if (id.startsWith("\0")) return false;
  if (id.startsWith(".") || id.startsWith("/")) return false;
  return !path.isAbsolute(id);
};

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
  input: ENTRY,
  external,
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
