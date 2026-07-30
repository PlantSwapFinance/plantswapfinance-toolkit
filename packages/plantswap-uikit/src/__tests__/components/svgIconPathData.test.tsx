import React from "react";
import { renderWithTheme } from "../../testHelpers";
import { AAAIcon, AuctionIcon, RewardIcon, RewardPurppleIcon } from "../../components/Svg";
import { SvgProps } from "../../components/Svg/types";

// Valid SVG path data only holds command letters, numbers (incl. exponents) and separators.
const INVALID_PATH_CHAR_REGEX = /[^MmLlHhVvCcSsQqTtAaZzEe0-9.,+\-\s]/;

const icons: [string, React.FC<SvgProps>][] = [
  ["AAAIcon", AAAIcon],
  ["AuctionIcon", AuctionIcon],
  ["RewardIcon", RewardIcon],
  ["RewardPurppleIcon", RewardPurppleIcon],
];

it.each(icons)("%s renders valid SVG path data", (_name, Icon) => {
  const { container } = renderWithTheme(<Icon />);

  const pathData = Array.from(container.querySelectorAll("path"), (element) => element.getAttribute("d") ?? "");

  expect(pathData.length).toBeGreaterThan(0);
  pathData.forEach((data) => {
    expect(data).not.toMatch(INVALID_PATH_CHAR_REGEX);
  });
});
