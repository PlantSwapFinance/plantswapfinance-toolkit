import styled from "styled-components";
import type { SpaceProps } from "styled-system";
import { space } from "styled-system";
import type { CardTheme } from "./types";
import filterDomProps from "../../util/filterDomProps";

export interface CardHeaderProps extends SpaceProps {
  variant?: keyof CardTheme["cardHeaderBackground"];
}

const CardHeader = styled.div
  .withConfig(filterDomProps)
  .attrs<CardHeaderProps>(({ p = "24px" }) => ({ p }))<CardHeaderProps>`
  background: ${({ theme, variant = "default" }) => theme.card.cardHeaderBackground[variant]};
  ${space}
`;

export default CardHeader;
