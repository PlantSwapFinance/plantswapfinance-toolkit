import styled from "styled-components";
import Text from "../Text/Text";
import type { HeadingProps } from "./types";
import { tags, scales } from "./types";

const style = {
  [scales.MD]: {
    fontSize: "20px",
    fontSizeLg: "20px",
  },
  [scales.LG]: {
    fontSize: "24px",
    fontSizeLg: "24px",
  },
  [scales.XL]: {
    fontSize: "32px",
    fontSizeLg: "40px",
  },
  [scales.XXL]: {
    fontSize: "48px",
    fontSizeLg: "64px",
  },
};

const Heading = styled(Text).attrs<HeadingProps>(({ as = tags.H2 }) => ({ bold: true, as }))<HeadingProps>`
  font-size: ${({ scale }: HeadingProps) => style[scale || scales.MD].fontSize};
  font-weight: 600;
  line-height: 1.1;

  ${({ theme }) => theme.mediaQueries.lg} {
    font-size: ${({ scale }: HeadingProps) => style[scale || scales.MD].fontSizeLg};
  }
`;

export default Heading;
