module.exports = {
  stories: ["../src/**/*.stories.@(ts|tsx|js|jsx)"],
  addons: ["@storybook/addon-links", "@storybook/addon-a11y"],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  typescript: {
    reactDocgen: "react-docgen-typescript",
    reactDocgenTypescriptOptions: {
      // Barrel files re-export default exports (`export { default as Box } from "./Box"`).
      // The docgen plugin resolves those to the literal identifier `default` and emits
      // `default.displayName = ...`, which is not parseable. styled-components v6 types
      // make every styled component look like a documentable component, so the barrels
      // now trip this. They declare no components of their own, so skip them.
      exclude: ["**/*.stories.tsx", "**/index.tsx"],
    },
  },
};