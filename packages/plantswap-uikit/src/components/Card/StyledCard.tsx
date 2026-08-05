import type { DefaultTheme } from "styled-components";
import styled from "styled-components";
import { space } from "styled-system";
import type { CardProps } from "./types";
import filterDomProps from "../../util/filterDomProps";

interface StyledCardProps extends CardProps {
  theme: DefaultTheme;
}

/**
 * Priority: Warning --> Success --> Active
 */
const getBoxShadow = ({ isActive, isSuccess, isWarning, theme }: StyledCardProps) => {
  if (isWarning) {
    return theme.card.boxShadowWarning;
  }

  if (isSuccess) {
    return theme.card.boxShadowSuccess;
  }

  if (isActive) {
    return theme.card.boxShadowActive;
  }

  return theme.card.boxShadow;
};

const StyledCard = styled.div
  .withConfig(filterDomProps)
  .attrs<StyledCardProps>(({ isActive = false, isSuccess = false, isWarning = false, isDisabled = false }) => ({
    isActive,
    isSuccess,
    isWarning,
    isDisabled,
  }))<StyledCardProps>`
  background-color: ${({ theme }) => theme.card.background};
  border: ${({ theme }) => theme.card.boxShadow};
  border-radius: ${({ theme }) => theme.radii.card};
  box-shadow: ${getBoxShadow};
  color: ${({ theme, isDisabled }) => theme.colors[isDisabled ? "textDisabled" : "text"]};
  overflow: hidden;
  position: relative;

  ${space}
`;

export default StyledCard;
