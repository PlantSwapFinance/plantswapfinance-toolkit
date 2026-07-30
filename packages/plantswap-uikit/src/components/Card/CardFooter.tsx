import styled from "styled-components";
import { space, SpaceProps } from "styled-system";
import filterDomProps from "../../util/filterDomProps";

export type CardFooterProps = SpaceProps;

const CardFooter = styled.div
  .withConfig(filterDomProps)
  .attrs<CardFooterProps>(({ p = "24px" }) => ({ p }))<CardFooterProps>`
  border-top: 1px solid ${({ theme }) => theme.colors.cardBorder};
  ${space}
`;

export default CardFooter;
