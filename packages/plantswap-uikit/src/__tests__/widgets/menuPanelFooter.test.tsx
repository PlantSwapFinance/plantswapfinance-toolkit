import React from "react";
import noop from "lodash/noop";
import { screen } from "@testing-library/react";
import { renderWithTheme } from "../../testHelpers";
import PanelFooter from "../../widgets/Menu/components/PanelFooter";

it("gives the collapsed settings button an accessible name", () => {
  renderWithTheme(
    <PanelFooter
      isPushed={false}
      pushNav={noop}
      isDark={false}
      toggleTheme={noop}
      langs={[]}
      setLang={noop}
      currentLang="en-US"
      links={[]}
    />,
  );

  expect(screen.getByRole("button", { name: "Open settings menu" })).toBeInTheDocument();
});
