import type React from "react";
import type { SpaceProps } from "styled-system";

export const variants = {
  WARNING: "warning",
  DANGER: "danger",
} as const;

export type Variant = (typeof variants)[keyof typeof variants];

export interface MessageProps extends SpaceProps {
  variant: Variant;
  icon?: React.ReactNode;
  children?: React.ReactNode;
}
