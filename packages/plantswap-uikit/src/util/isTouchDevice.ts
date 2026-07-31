// `msMaxTouchPoints` is the legacy IE/Edge spelling and is absent from the DOM
// lib types, so widen Navigator rather than casting the whole thing to `any`.
type LegacyTouchNavigator = Navigator & { msMaxTouchPoints?: number };

const isTouchDevice = (): boolean => {
  const { maxTouchPoints, msMaxTouchPoints } = navigator as LegacyTouchNavigator;

  return "ontouchstart" in window || maxTouchPoints > 0 || (msMaxTouchPoints ?? 0) > 0;
};

export default isTouchDevice;
