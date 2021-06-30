import { darkColors, lightColors } from "../../theme/colors";
import { PlantswapToggleTheme } from "./types";

export const light: PlantswapToggleTheme = {
  handleBackground: lightColors.backgroundAlt,
  handleShadow: lightColors.textDisabled,
};

export const dark: PlantswapToggleTheme = {
  handleBackground: darkColors.backgroundAlt,
  handleShadow: darkColors.textDisabled,
};
