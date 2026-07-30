import styled from "styled-components";
import { background, border, layout, position, space } from "styled-system";
import { BoxProps } from "./types";
import filterDomProps from "../../util/filterDomProps";

const Box = styled.div.withConfig(filterDomProps)<BoxProps>`
  ${background}
  ${border}
  ${layout}
  ${position}
  ${space}
`;

export default Box;
