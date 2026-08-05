import React from "react";
import Link from "./Link";
import type { LinkProps } from "./types";
import OpenNewIcon from "../Svg/Icons/OpenNew";

const LinkExternal: React.FC<LinkProps> = ({ children, ...props }) => (
  <Link external {...props}>
    {children}
    <OpenNewIcon color={props.color ? props.color : "primary"} ml="4px" />
  </Link>
);

export default LinkExternal;
