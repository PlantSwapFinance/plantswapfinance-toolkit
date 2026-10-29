import React from "react";
import { act, renderHook } from "@testing-library/react";
import { renderToString } from "react-dom/server";
import { breakpointMap } from "../../theme/base";
import useMatchBreakpoints from "../../hooks/useMatchBreakpoints";

const expectedKeys = Object.keys(breakpointMap).map((size) => `is${size.charAt(0).toUpperCase()}${size.slice(1)}`);

describe("useMatchBreakpoints", () => {
  it("does not access window during initial render", () => {
    // `window` cannot be removed from the jsdom global to fake an SSR
    // environment: it is a non-configurable accessor, so `delete` was a silent
    // no-op on Node 24 and throws a TypeError on Node 26, whose V8 made
    // strict-mode `delete` of a non-configurable property an error.
    //
    // Exercise the render phase directly instead. `renderToString` never runs
    // effects, so it renders exactly like a server would -- any `window`
    // access during render surfaces as a `window.matchMedia` call.
    const matchMedia = jest.spyOn(window, "matchMedia").mockImplementation(() => {
      throw new Error("window.matchMedia must not be accessed during render");
    });

    let renderedState: Record<string, boolean> | undefined;
    const Probe = () => {
      renderedState = useMatchBreakpoints();
      return null;
    };

    try {
      renderToString(<Probe />);
    } finally {
      matchMedia.mockRestore();
    }

    // Initial render must produce a fully-populated state without touching
    // `window.matchMedia`. Every breakpoint defaults to `false` until the
    // effect runs on the client.
    expect(matchMedia).not.toHaveBeenCalled();
    expect(Object.keys(renderedState ?? {}).sort()).toEqual([...expectedKeys].sort());
    Object.values(renderedState ?? {}).forEach((value) => {
      expect(value).toBe(false);
    });
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
