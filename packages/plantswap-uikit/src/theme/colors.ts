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

export const additionalColors = {
  binance: "#F0B90B",
  pancakeswap: "#3ed2db",
  goose: "#ff9900",
  cafeswap: "#9c2222",
  overlay: "#452a7a",
};

export const lightColors: Colors = {
  ...baseColors,
  ...additionalColors,
  background: "#FFFFFF",
  backgroundDisabled: "#E9EAEB",
  backgroundAlt: "#FFFFFF",
  cardBorder: "#E7E3EB",
  contrast: "#0E3921",
  dropdown: "#F6F6F6",
  dropdownDeep: "#EEEEEE",
  invertedContrast: "#FFFFFF",
  input: "#eeeaf4",
  inputSecondary: "#d7caec",
  tertiary: "#EFF4F5",
  text: "#4D2419",
  textDisabled: "#BDC2C4",
  textSubtle: "#2B6E37",
  borderColor: "#E9EAEB",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #FFFFFF 0%, #47B85B 100%)",
    inverseBubblegum: "linear-gradient(139.73deg, #F3EFFF 0%, #E5FDFF 100%)",
    cardHeader: "linear-gradient(111.68deg, #F2ECF2 0%, #E8F2F6 100%)",
    blue: "linear-gradient(180deg, #A7E8F1 0%, #94E1F2 100%)",
    violet: "linear-gradient(180deg, #E2C9FB 0%, #CDB8FA 100%)",
    violetAlt: "linear-gradient(180deg, #CBD7EF 0%, #9A9FD0 100%)",
  },
};

export const darkColors: Colors = {
  ...baseColors,
  ...additionalColors,
  secondary: "#399349",
  background: "#2D221F",
  backgroundDisabled: "#3c3742",
  backgroundAlt: "#27262c",
  cardBorder: "#383241",
  contrast: "#FFFFFF",
  dropdown: "#1E1D20",
  dropdownDeep: "#100C18",
  invertedContrast: "#204531",
  input: "#2D221F",
  inputSecondary: "#0E3921",
  primaryDark: "#0098A1",
  tertiary: "#353547",
  text: "#47B85B",
  textDisabled: "#666171",
  textSubtle: "#FFE3A8",
  borderColor: "#2B6E37",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #399349 0%, #2B6E37 100%)",
    inverseBubblegum: "linear-gradient(139.73deg, #3D2A54 0%, #313D5C 100%)",
    cardHeader: "linear-gradient(166.77deg, #3B4155 0%, #3A3045 100%)",
    blue: "linear-gradient(180deg, #00707F 0%, #19778C 100%)",
    violet: "linear-gradient(180deg, #6C4999 0%, #6D4DB2 100%)",
    violetAlt: "linear-gradient(180deg, #434575 0%, #66578D 100%)",
  },
};
