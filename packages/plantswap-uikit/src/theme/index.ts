import type { AlertTheme } from "../components/Alert/types";
import type { CardTheme } from "../components/Card/types";
import type { PlantToggleTheme } from "../components/PlantToggle/types";
import type { RadioTheme } from "../components/Radio/types";
import type { ToggleTheme } from "../components/Toggle/types";
import type { TooltipTheme } from "../components/Tooltip/types";
import type { NavTheme } from "../widgets/Menu/types";
import type { ModalTheme } from "../widgets/Modal/types";
import type { Colors, Breakpoints, MediaQueries, Spacing, Shadows, Radii, ZIndices } from "./types";

export interface PlantTheme {
  siteWidth: number;
  isDark: boolean;
  alert: AlertTheme;
  colors: Colors;
  card: CardTheme;
  nav: NavTheme;
  modal: ModalTheme;
  plantToggle: PlantToggleTheme;
  radio: RadioTheme;
  toggle: ToggleTheme;
  tooltip: TooltipTheme;
  breakpoints: Breakpoints;
  mediaQueries: MediaQueries;
  spacing: Spacing;
  shadows: Shadows;
  radii: Radii;
  zIndices: ZIndices;
}

export { default as dark } from "./dark";
export { default as light } from "./light";

export { lightColors } from "./colors";
export { darkColors } from "./colors";
