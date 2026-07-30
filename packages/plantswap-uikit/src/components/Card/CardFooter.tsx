import styled from "styled-components";
import { space, SpaceProps } from "styled-system";
import filterDomProps from "../../util/filterDomProps";

export type CardFooterProps = SpaceProps;

const CardFooter = styled.div.withConfig(filterDomProps)<CardFooterProps>`
  border-top: 1px solid ${({ theme }) => theme.colors.cardBorder};
  ${space}
`;

(CardFooter as any).defaultProps = {
  p: "24px",
};

export default CardFooter;
