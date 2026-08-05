import styled from "styled-components";
import type { OverlayProps } from "./types";
import filterDomProps from "../../util/filterDomProps";

const Overlay = styled.div.withConfig(filterDomProps).attrs<OverlayProps>(({ show = false, zIndex = 10 }) => ({
  role: "presentation",
  show,
  zIndex,
}))<OverlayProps>`
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.overlay};
  transition: opacity 0.4s;
  opacity: ${({ show }) => (show ? 0.6 : 0)};
  z-index: ${({ zIndex }) => zIndex};
  pointer-events: ${({ show }) => (show ? "initial" : "none")};
`;

export default Overlay;
