import type { ReactNode } from "react";
import type { SpaceProps } from "styled-system";

export type ErrorTheme = {
  background: string;
  titleColor: string;
  descriptionColor: string;
  iconColor: string;
  borderColor: string;
};

export interface ErrorProps extends SpaceProps {
  /**
   * Optional error code shown above the title (e.g. HTTP status, contract error code).
   */
  code?: string | number;
  /**
   * Short, human-readable title for the error.
   */
  title: string;
  /**
   * Longer description explaining what went wrong and/or how to recover.
   */
  description?: ReactNode;
  /**
   * Optional call-to-action rendered below the description (typically a `Button`).
   */
  action?: ReactNode;
  /**
   * Optional icon override. Defaults to the inline `ErrorIcon`.
   */
  icon?: ReactNode;
  /**
   * Optional full override for the body content.
   */
  children?: ReactNode;
}
