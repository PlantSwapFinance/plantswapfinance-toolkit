import type { ElementType } from "react";
import React, { cloneElement, isValidElement } from "react";
import type { SpaceProps } from "styled-system";
import getExternalLinkProps from "../../util/getExternalLinkProps";
import StyledButton from "./StyledButton";
import type { ButtonProps } from "./types";
import { scales, variants } from "./types";

const Button = <E extends ElementType = "button">(props: ButtonProps<E>): React.JSX.Element => {
  const {
    startIcon,
    endIcon,
    external = false,
    className,
    isLoading = false,
    disabled = false,
    variant = variants.PRIMARY,
    scale = scales.MD,
    children,
    ...rest
  } = props;
  const internalProps = external ? getExternalLinkProps() : {};
  const isDisabled = isLoading || disabled;
  const classNames = className ? [className] : [];

  if (isLoading) {
    classNames.push("plant-button--loading");
  }

  if (isDisabled && !isLoading) {
    classNames.push("plant-button--disabled");
  }

  return (
    <StyledButton
      $isLoading={isLoading}
      className={classNames.join(" ")}
      disabled={isDisabled}
      variant={variant}
      scale={scale}
      {...internalProps}
      {...rest}
    >
      <>
        {isValidElement(startIcon) &&
          cloneElement(startIcon, {
            mr: "0.5rem",
          } as SpaceProps)}
        {children}
        {isValidElement(endIcon) &&
          cloneElement(endIcon, {
            ml: "0.5rem",
          } as SpaceProps)}
      </>
    </StyledButton>
  );
};

export default Button;
