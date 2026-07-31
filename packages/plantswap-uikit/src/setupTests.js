import "@testing-library/jest-dom";
import "jest-styled-components";
import { TextDecoder, TextEncoder } from "node:util";

// jsdom does not expose TextEncoder/TextDecoder as globals, but react-router v7
// dereferences them at import time, so every suite that renders a router-aware
// widget fails to load without this. Node's implementations are spec-compliant.
if (typeof globalThis.TextEncoder === "undefined") {
  globalThis.TextEncoder = TextEncoder;
  globalThis.TextDecoder = TextDecoder;
}

// jsdom does not implement matchMedia at all. useMatchBreakpoints calls it in
// its mount effect, so provide an inert MediaQueryList that never matches.
// Tests that care about breakpoint changes drive the listeners themselves.
if (typeof globalThis.matchMedia !== "function") {
  globalThis.matchMedia = (query) => ({
    matches: false,
    media: query,
    onchange: null,
    addEventListener: () => {},
    removeEventListener: () => {},
    addListener: () => {},
    removeListener: () => {},
    dispatchEvent: () => false,
  });
}
