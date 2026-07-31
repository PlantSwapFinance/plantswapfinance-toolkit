// Used by babel-jest to transpile the test suite. The rollup build sets
// `configFile: false` and declares its own presets, so this file only ever
// shapes the Jest pipeline.
//
// ts-jest cannot be used here: it needs the TypeScript compiler API that
// TypeScript 7 no longer exposes through the top-level "typescript" import
// (the same reason rollup.config.mjs dropped @rollup/plugin-typescript).
// Babel strips the types without that API. Type checking still happens in
// `build`, via the `tsc --emitDeclarationOnly` step.
//
// NOTE: this only works while every @babel/core in the tree is v8 — see the
// "@babel/core" entry in the root package.json `resolutions`. Jest 30 depends
// on @babel/core ^7, and a nested v7 core silently paired with the v8
// TypeScript transform strips type *declarations* but leaves type *arguments*
// on call expressions (v7 parses them as `typeParameters`, v8 as
// `typeArguments`). That emits invalid JS like `useState<State>(init)`, which
// evaluates `<State>` as a comparison and throws "State is not defined".
//
// babel-plugin-styled-components is deliberately NOT used here. It minifies
// the CSS it finds, rewriting `rgba(14, 14, 44, 0.4)` to `rgba(14,14,44,0.4)`
// and invalidating every committed inline snapshot. It never ran over `.tsx`
// under ts-jest, so leaving it out keeps the existing snapshots authoritative.
// rollup.config.mjs still applies it for the published build.
const react = ["@babel/preset-react", { runtime: "automatic" }];

module.exports = {
  // Tests only ever run on the local/CI Node, so skip downlevelling.
  // preset-typescript keys off the file extension, so it handles .ts and .tsx.
  presets: [["@babel/preset-env", { targets: { node: "current" } }], "@babel/preset-typescript"],
  // preset-react is scoped to JSX extensions on purpose: Babel's JSX parser
  // reads TS generic syntax like `<T>(...) =>` in plain `.ts` files as a JSX
  // element and fails.
  overrides: [
    { test: /\.tsx$/, presets: [react] },
    { test: /\.jsx$/, presets: [react] },
  ],
};
