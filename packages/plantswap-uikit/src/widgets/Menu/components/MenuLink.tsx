import React, { AnchorHTMLAttributes } from "react";
import { NavLink } from "react-router-dom";

const MenuLink: React.FC<AnchorHTMLAttributes<HTMLAnchorElement>> = ({ href, target, rel, ...otherProps }) => {
  const isHttpLink = href?.startsWith("http");

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const Tag: any = isHttpLink ? "a" : NavLink;
  const props = isHttpLink ? { href } : { to: href };
  const computedRel = target === "_blank" ? rel ?? "noopener noreferrer" : rel;
  return <Tag role="button" target={target} rel={computedRel} {...props} {...otherProps} />;
};

export default MenuLink;
