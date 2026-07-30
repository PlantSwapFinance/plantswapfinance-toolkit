# 🌱 PlantSwap Toolkit

PlantSwap UIkit is a set of React components and hooks used to build pages on PlantSwap's apps. It also contains a theme file for dark and light mode.

This repository is a monorepo manage with [yarn workspaces](https://classic.yarnpkg.com/en/docs/workspaces/) and [Lerna](https://lerna.js.org/). 

## Packages

- [plantswapfinance-uikit](https://github.com/plantswapfinance/plantswapfinance-toolkit/tree/master/packages/plantswap-uikit) : React components used to build the PlantSwap UI
- [eslint-config-plantswap](https://github.com/plantswapfinance/plantswapfinance-toolkit/tree/master/packages/eslint-config-plantswap) : An ESLint config for PlantSwap, with Typescript and Prettier support

## How to use

Clone the repository 

```
git clone git@github.com:plantswapfinance/plantswapfinance-toolkit.git
```

Run yarn at the root of the workspace

```
cd plantswapfinance-toolkit
yarn
```

Then, refer to the readme of each project.

## Git hooks

Git hooks are managed with [Husky](https://typicode.github.io/husky/). Running `yarn` at the root installs them automatically via the `prepare` script:

- `pre-commit` formats staged `.js`/`.jsx`/`.ts`/`.tsx` files with Prettier and re-stages them.
- `commit-msg` runs [commitlint](https://commitlint.js.org/), which enforces [Conventional Commits](https://www.conventionalcommits.org/) with a sentence-case subject (e.g. `fix: Correct the button padding`).

To bypass the hooks for a single commit, use `git commit --no-verify`.
