import styled from "styled-components";
import type { SpaceProps } from "styled-system";
import { space } from "styled-system";
import filterDomProps from "../../util/filterDomProps";

export type CardBodyProps = SpaceProps;

const CardBody = styled.div.withConfig(filterDomProps).attrs<CardBodyProps>(({ p = "24px" }) => ({ p }))<CardBodyProps>`
  ${space}
`;

export default CardBody;
