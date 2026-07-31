import plantswap from "@plantswap-libs/eslint-config-plantswap";

export default [
  {
    ignores: ["dist/**", "storybook-static/**", "node_modules/**"],
  },
  ...plantswap,
  {
    rules: {
      "import/no-extraneous-dependencies": [
        "error",
        {
          devDependencies: [
            "src/setupTests.[jt]s?(x)",
            "src/testHelpers.[jt]s?(x)",
            "**/*.test.[jt]s?(x)",
            "**/*.stories.[jt]s?(x)",
            "rollup.config.mjs",
          ],
        },
      ],
    },
  },
  {
    // Stories deliberately define throwaway components inline to demonstrate
    // render-prop and controlled-state usage; they are never mounted in an app.
    files: ["**/*.stories.[jt]s?(x)"],
    rules: {
      "react/no-unstable-nested-components": "off",
    },
  },
];
