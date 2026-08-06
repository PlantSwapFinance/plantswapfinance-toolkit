// The uikit targets the browser and deliberately does not pull in `@types/node`, so
// `process` is unknown to the compiler. Bundlers (webpack, vite, rollup) replace
// `process.env.NODE_ENV` with a string literal at build time; the try/catch keeps the
// read safe in the runtimes where they do not and `process` is genuinely undefined.
declare const process: { env?: { NODE_ENV?: string } } | undefined;

const getNodeEnv = (): string | undefined => {
  try {
    return process?.env?.NODE_ENV;
  } catch {
    return undefined;
  }
};

/**
 * True only when the bundle is known to be a non-production build. When `NODE_ENV` cannot
 * be resolved we assume production, so debug output is never leaked by accident.
 */
const isDevelopment = (): boolean => {
  const nodeEnv = getNodeEnv();

  return nodeEnv !== undefined && nodeEnv !== "production";
};

export default isDevelopment;
