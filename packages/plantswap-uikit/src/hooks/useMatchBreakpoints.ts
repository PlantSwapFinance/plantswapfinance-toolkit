import { useEffect, useState } from "react";
import { breakpointMap } from "../theme/base";

type State = {
  [key: string]: boolean;
};

type MediaQueries = {
  [key: string]: string;
};

/**
 * Can't use the media queries from "base.mediaQueries" because of how matchMedia works
 * In order for the listener to trigger we need have have the media query with a range, e.g.
 * (min-width: 370px) and (max-width: 576px)
 * @see https://developer.mozilla.org/en-US/docs/Web/API/MediaQueryList
 */
const mediaQueries: MediaQueries = (() => {
  let prevMinWidth = 0;

  return Object.keys(breakpointMap).reduce((accum, size, index) => {
    // Largest size is just a min-width of second highest max-width
    if (index === Object.keys(breakpointMap).length - 1) {
      return { ...accum, [size]: `(min-width: ${prevMinWidth}px)` };
    }

    const minWidth = prevMinWidth;
    const breakpoint = breakpointMap[size];

    // Min width for next iteration
    prevMinWidth = breakpoint + 1;

    return { ...accum, [size]: `(min-width: ${minWidth}px) and (max-width: ${breakpoint}px)` };
  }, {});
})();

const getKey = (size: string) => `is${size.charAt(0).toUpperCase()}${size.slice(1)}`;

const getInitialState = (): State =>
  Object.keys(mediaQueries).reduce((accum, size) => {
    const key = getKey(size);
    return { ...accum, [key]: false };
  }, {});

const useMatchBreakpoints = (): State => {
  const [state, setState] = useState<State>(getInitialState);

  useEffect(() => {
    // Sync state with the real viewport after mount, so the hook is safe in
    // SSR / non-browser environments where `window` is undefined.
    const mqls = Object.keys(mediaQueries).map((size) => ({
      key: getKey(size),
      mql: window.matchMedia(mediaQueries[size]),
    }));

    setState(mqls.reduce((accum, { key, mql }) => ({ ...accum, [key]: mql.matches }), {}));

    // Create listeners for each media query returning a function to unsubscribe
    const handlers = mqls.map(({ key, mql }) => {
      const handler = (matchMediaQuery: MediaQueryListEvent) => {
        setState((prevState) => ({
          ...prevState,
          [key]: matchMediaQuery.matches,
        }));
      };

      // Safari < 14 fix
      if (mql.addEventListener) {
        mql.addEventListener("change", handler);
      }

      return () => {
        // Safari < 14 fix
        if (mql.removeEventListener) {
          mql.removeEventListener("change", handler);
        }
      };
    });

    return () => {
      handlers.forEach((unsubscribe) => {
        unsubscribe();
      });
    };
  }, [setState]);

  return state;
};

export default useMatchBreakpoints;
