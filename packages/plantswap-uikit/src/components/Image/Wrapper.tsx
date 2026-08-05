import React, { forwardRef } from "react";
import styled from "styled-components";
import { space } from "styled-system";
import type { WrapperProps } from "./types";
import filterDomProps from "../../util/filterDomProps";

const StyledWrapper = styled.div.withConfig(filterDomProps)<{ $width: number; $height: number }>`
  max-height: ${({ $height }) => $height}px;
  max-width: ${({ $width }) => $width}px;
  position: relative;
  width: 100%;

  &:after {
    content: "";
    display: block;
    padding-top: ${({ $width, $height }) => ($height / $width) * 100}%;
  }

  ${space}
`;

const Wrapper = forwardRef<HTMLDivElement, WrapperProps>(({ width, height, ...props }, ref) => (
  <StyledWrapper ref={ref} $width={width} $height={height} {...props} />
));

export default Wrapper;
