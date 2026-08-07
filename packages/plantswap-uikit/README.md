# 🌱 PlantSwap UIkit

[![Version](https://img.shields.io/npm/v/@plantswap/uikit)](https://www.npmjs.com/package/@plantswap/uikit) [![Size](https://img.shields.io/bundlephobia/min/@plantswap/uikit)](https://www.npmjs.com/package/@plantswap/uikit)

PlantSwap UIkit is a set of React components and hooks used to build pages on Plantswap's apps. It also contains a theme file for dark and light mode.

## Install

`yarn add @plantswap/uikit`

> **Note:** the package was previously published as `@plantswap-libs/uikit`. That name is frozen at `0.0.9` and no longer receives updates — use `@plantswap/uikit` instead.

## Peer dependencies

The UIkit does not bundle React, the router, or styled-components — your app
provides them. Supported majors:

| Peer                  | Supported ranges                    |
| --------------------- | ----------------------------------- |
| `react` / `react-dom` | `^17.0.2 \|\| ^18.0.0 \|\| ^19.0.0` |
| `react-router-dom`    | `^5.2.0 \|\| ^6.0.0 \|\| ^7.0.0`    |
| `styled-components`   | `^5.2.3 \|\| ^6.0.0`                |

The UIkit only touches the router surface that is stable across all three
majors — `Link`, `NavLink`, `useLocation`, and the router providers. Active
menu state is derived from `useLocation()` rather than the `activeClassName`
prop that react-router v5 offered and v6 removed, so `Menu` navigation
behaves the same on every supported major.

One combination is ruled out by the router itself, not by us:
`react-router-dom@7` declares `react >=18`, so pair it with React 18 or 19. If
you are still on React 17, stay on `react-router-dom` v5 or v6.

## Setup

### Theme

Before using PlantSwap UIkit, you need to provide the theme file to styled-component.

```
import { ThemeProvider } from 'styled-components'
import { light, dark } from '@plantswap/uikit'
...
<ThemeProvider theme={isDark}>...</ThemeProvider>
```

### Reset

A reset CSS is available as a global styled component.

```
import { ResetCSS } from '@plantswap/uikit'
...
<ResetCSS />
```

### Error boundary

`ErrorBoundary` catches render, lifecycle and constructor errors thrown by its descendants and
swaps that subtree for a themed card instead of letting the whole app unmount. Wrap the app, a
route, or any widget that can fail on its own.

```jsx
import { ErrorBoundary } from '@plantswap/uikit'
;<ErrorBoundary onError={(error, errorInfo) => reportToSentry(error, errorInfo)}>
  <FarmList />
</ErrorBoundary>
```

The default card shows the error message and component stack outside of production builds only.
Force it either way with `showDetails`, and adjust the copy with `title`, `description` and
`actionText`.

Pass `resetKeys` to recover automatically — the boundary clears its error whenever one of the
values changes, which makes navigation a natural recovery point.

```jsx
<ErrorBoundary resetKeys={[pathname]}>
  <Outlet />
</ErrorBoundary>
```

For a completely different look, pass `fallback` — either a node, or a render function receiving
the error and a reset handler.

```jsx
<ErrorBoundary
  fallback={({ error, resetErrorBoundary }) => (
    <MyCrashScreen message={error.message} onRetry={resetErrorBoundary} />
  )}
>
  <FarmList />
</ErrorBoundary>
```

Note that React error boundaries cannot catch errors thrown from event handlers, async callbacks,
or server rendering. Store those in state and rethrow during render to surface them here.

### Types

This project is built with Typescript and export all the relevant types.
