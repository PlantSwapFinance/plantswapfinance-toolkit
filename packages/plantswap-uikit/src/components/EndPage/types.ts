import type { SVGAttributes } from "react";
import type { DefaultTheme } from "styled-components";
import type { SpaceProps } from "styled-system";

export interface EndPageProps extends SVGAttributes<HTMLOrSVGElement>, SpaceProps {
  theme?: DefaultTheme;
  spin?: boolean;
}
