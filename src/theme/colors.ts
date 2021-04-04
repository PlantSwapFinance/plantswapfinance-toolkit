import { Colors } from "./types";

export const baseColors = {
  failure: "#AC2C2C",
  primary: "#2B6E37",
  primaryBright: "#47B85B",
  primaryDark: "#0098A1",
  secondary: "#399349",
  success: "#399349",
  warning: "#FFB237",
};

export const brandColors = {
  binance: "#F0B90B",
};

export const lightColors: Colors = {
  ...baseColors,
  ...brandColors,
  background: "#FFFFFF",
  backgroundDisabled: "#E9EAEB",
  contrast: "#191326",
  invertedContrast: "#FFFFFF",
  input: "#eeeaf4",
  inputSecondary: "#d7caec",
  tertiary: "#EFF4F5",
  text: "#4D2419",
  textDisabled: "#BDC2C4",
  textSubtle: "#2B6E37",
  borderColor: "#E9EAEB",
  card: "#FFFFFF",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #FFFFFF 0%, #47B85B 100%)",
  },
};

export const darkColors: Colors = {
  ...baseColors,
  ...brandColors,
  secondary: "#399349",
  background: "#2D221F",
  backgroundDisabled: "#3c3742",
  contrast: "#FFFFFF",
  invertedContrast: "#204531",
  input: "#2D221F",
  inputSecondary: "#0E3921",
  primaryDark: "#0098A1",
  tertiary: "#353547",
  text: "#47B85B",
  textDisabled: "#666171",
  textSubtle: "#FFE3A8",
  borderColor: "#2B5D99",
  card: "#27262c",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #399349 0%, #2B6E37 100%)",
  },
};
