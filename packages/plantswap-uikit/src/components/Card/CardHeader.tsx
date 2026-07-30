import styled from "styled-components";
import { space, SpaceProps } from "styled-system";
import { CardTheme } from "./types";
import filterDomProps from "../../util/filterDomProps";

export interface CardHeaderProps extends SpaceProps {
  variant?: keyof CardTheme["cardHeaderBackground"];
}

const CardHeader = styled.div.withConfig(filterDomProps)<CardHeaderProps>`
  background: ${({ theme, variant = "default" }) => theme.card.cardHeaderBackground[variant]};
  ${space}
`;

(CardHeader as any).defaultProps = {
  p: "24px",
};

export default CardHeader;
