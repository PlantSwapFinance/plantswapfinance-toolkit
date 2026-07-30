import styled from "styled-components";
import { space, SpaceProps } from "styled-system";
import filterDomProps from "../../util/filterDomProps";

export type CardBodyProps = SpaceProps;

const CardBody = styled.div.withConfig(filterDomProps)<CardBodyProps>`
  ${space}
`;

(CardBody as any).defaultProps = {
  p: "24px",
};

export default CardBody;
