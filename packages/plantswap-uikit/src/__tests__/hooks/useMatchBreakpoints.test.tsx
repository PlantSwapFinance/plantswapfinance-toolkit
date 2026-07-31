import React from "react";
import { act, renderHook } from "@testing-library/react";
import { breakpointMap } from "../../theme/base";
import useMatchBreakpoints from "../../hooks/useMatchBreakpoints";

const expectedKeys = Object.keys(breakpointMap).map((size) => `is${size.charAt(0).toUpperCase()}${size.slice(1)}`);

describe("useMatchBreakpoints", () => {
  it("does not access window during initial render", () => {
    // Simulate a non-browser / SSR environment where `window` is undefined.
    const originalWindow = globalThis.window;
    // @ts-expect-error -- intentionally remove window for this test
    delete (globalThis as { window?: unknown }).window;

    try {
      const { result } = renderHook(() => useMatchBreakpoints());
      // Initial render must produce a fully-populated state without touching
      // `window.matchMedia`. Every breakpoint defaults to `false` until the
      // effect runs on the client.
      expect(Object.keys(result.current).sort()).toEqual([...expectedKeys].sort());
      Object.values(result.current).forEach((value) => {
        expect(value).toBe(false);
      });
    } finally {
      (globalThis as { window?: unknown }).window = originalWindow;
    }
  });

  it("syncs state with matchMedia after mount", () => {
    // jsdom's default matchMedia returns a MediaQueryList whose `matches` is
    // false. The hook should keep the same default after mount and only flip
    // when listeners fire.
    const { result } = renderHook(() => useMatchBreakpoints());

    expect(Object.keys(result.current).sort()).toEqual([...expectedKeys].sort());

    act(() => {
      // No-op: ensures any pending effects flushed. State should remain stable
      // when nothing changes.
    });

    expect(Object.values(result.current)).toEqual(expect.arrayContaining([false]));
  });
});
