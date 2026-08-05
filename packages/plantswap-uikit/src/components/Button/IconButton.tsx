import styled from "styled-components";
import Button from "./Button";
import type { BaseButtonProps, PolymorphicComponent } from "./types";

// The styled component returned by `styled(Button)` is typed as
// `IStyledComponentBase<...>` under styled-components v6; widening it to
// the project's `PolymorphicComponent` requires an explicit cast. The
// prior annotation compiled under typescript 4 but fails under
// typescript 7's stricter assignability checks.
const IconButton = styled(Button)<BaseButtonProps>`
  padding: 0;
  width: ${({ scale }) => (scale === "sm" ? "32px" : "48px")};
` as unknown as PolymorphicComponent<BaseButtonProps, "button">;

export default IconButton;
