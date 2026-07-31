import React from "react";
import { SpaceProps } from "styled-system";
import { scales, TagProps } from "./types";
import { StyledTag } from "./StyledTag";

const Tag: React.FC<TagProps> = ({
  startIcon,
  endIcon,
  children,
  variant = "primary",
  scale = scales.MD,
  outline = false,
  ...props
}) => (
  <StyledTag {...props}>
    {React.isValidElement(startIcon) &&
      React.cloneElement(startIcon, {
        mr: "0.5em",
      } as SpaceProps)}
    {children}
    {React.isValidElement(endIcon) &&
      React.cloneElement(endIcon, {
        ml: "0.5em",
      } as SpaceProps)}
  </StyledTag>
);

export default Tag;
