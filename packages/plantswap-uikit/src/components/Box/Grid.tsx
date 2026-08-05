import styled from "styled-components";
import { grid, flexbox } from "styled-system";
import Box from "./Box";
import type { GridProps } from "./types";

const Grid = styled(Box)<GridProps>`
  display: grid;
  ${flexbox}
  ${grid}
`;

export default Grid;
