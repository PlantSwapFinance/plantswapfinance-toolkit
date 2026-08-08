import { darkColors, lightColors } from "../../theme/colors";
import type { ErrorTheme } from "./types";

export const light: ErrorTheme = {
  background: "#FFFFFF",
  titleColor: lightColors.text,
  descriptionColor: lightColors.textSubtle,
  iconColor: lightColors.failure,
  borderColor: lightColors.cardBorder,
};

export const dark: ErrorTheme = {
  background: darkColors.backgroundAlt,
  titleColor: darkColors.text,
  descriptionColor: darkColors.textSubtle,
  iconColor: darkColors.failure,
  borderColor: darkColors.cardBorder,
};
