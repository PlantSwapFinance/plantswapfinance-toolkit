const { FlatCompat } = require("@eslint/eslintrc");
const globals = require("globals");
const prettier = require("eslint-config-prettier");
const tsParser = require("@typescript-eslint/parser");

// ESLint 10 removed .eslintrc support, so this shareable config is now a flat
// config array. eslint-config-airbnb is still eslintrc-only, so it is
// translated with FlatCompat rather than dropped -- that keeps the rule set
// downstream consumers already lint against. Plugins resolve relative to this
// package so airbnb/react/import come from our own dependencies rather than
// the consumer's tree.
const compat = new FlatCompat({
  baseDirectory: __dirname,
  resolvePluginsRelativeTo: __dirname,
});

const EXTENSIONS = [".js", ".ts", ".jsx", ".tsx"];

module.exports = [
  ...compat.extends("airbnb", "airbnb/hooks", "plugin:@typescript-eslint/recommended"),
  {
    languageOptions: {
      parser: tsParser,
      ecmaVersion: "latest",
      sourceType: "module",
      parserOptions: {
        ecmaFeatures: { jsx: true },
      },
      globals: {
        ...globals.browser,
        ...globals.es2015,
      },
    },
    settings: {
      "import/resolver": {
        node: { extensions: EXTENSIONS },
      },
      "import/extensions": EXTENSIONS,
    },
    rules: {
      // Typescript
      "@typescript-eslint/no-unused-vars": "warn",
      "no-use-before-define": "off",
      "@typescript-eslint/no-use-before-define": ["warn"],
      "no-shadow": "off",
      "@typescript-eslint/no-shadow": ["error"],
      // Keep type-only imports as `import type` so Rollup (via Babel) does not
      // try to resolve erased TypeScript interfaces/types as runtime exports.
      "@typescript-eslint/consistent-type-imports": [
        "error",
        {
          prefer: "type-imports",
          fixStyle: "separate-type-imports",
          disallowTypeAnnotations: false,
        },
      ],
      // React
      "react/jsx-filename-extension": ["error", { extensions: [".tsx"] }],
      "react/prop-types": 0,
      "react/jsx-props-no-spreading": 0,
      "react/no-multi-comp": 0,
      // airbnb wants function declarations for components. Every component in
      // this codebase is a typed arrow (`const X: React.FC<Props> = () => {}`),
      // which is the only way to annotate the component type without repeating
      // the generics, so allow arrows instead of rewriting ~400 components.
      "react/function-component-definition": [
        "error",
        {
          namedComponents: "arrow-function",
          unnamedComponents: "arrow-function",
        },
      ],
      // Optional props are expressed with TypeScript's `?:` and default values
      // in destructuring, not React defaultProps, which React 19 removed for
      // function components.
      "react/require-default-props": 0,
      "import/extensions": [
        "error",
        "ignorePackages",
        {
          js: "never",
          mjs: "never",
          jsx: "never",
          ts: "never",
          tsx: "never",
        },
      ],
    },
  },
  // Last so it always wins over the formatting rules airbnb enables.
  { rules: prettier.rules },
];
