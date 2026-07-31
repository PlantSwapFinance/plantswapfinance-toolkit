# eslint-config-plantswap

PlantSwap Eslint config with:

- Airbnb config
- Typescript
- Prettier

## Usage

```
npx install-peerdeps --dev @plantswap-libs/eslint-config-plantswap
```

This package is a [flat config](https://eslint.org/docs/latest/use/configure/configuration-files)
array, so spread it into your `eslint.config.mjs`:

```js
import plantswap from "@plantswap-libs/eslint-config-plantswap";

export default [
  ...plantswap,
  {
    // your project overrides
  },
];
```

### Supported ESLint versions

ESLint 8 and 9. ESLint 10 is **not** supported yet: `eslint-plugin-react`,
`eslint-plugin-import` and `eslint-plugin-jsx-a11y` have no v10-compatible
release (they still call APIs such as `context.getFilename()` that v10 removed),
and the Airbnb rules depend on all three.

`eslint-config-airbnb` is itself eslintrc-only, so it is loaded through
`FlatCompat` from `@eslint/eslintrc` rather than dropped, which keeps the rule
set stable for consumers.

### TypeScript 7

`typescript-eslint` does not support TypeScript 7 yet
([typescript-eslint#10940](https://github.com/typescript-eslint/typescript-eslint/issues/10940));
it throws on load when the resolved `typescript` major is >= 7. This package
therefore depends on the TypeScript 6 compiler API aliased as `typescript`
(`npm:@typescript/typescript6`), so linting keeps working while the rest of a
project builds with TypeScript 7. That package exposes its binary as `tsc6`, so
it does not shadow your own `tsc`.
