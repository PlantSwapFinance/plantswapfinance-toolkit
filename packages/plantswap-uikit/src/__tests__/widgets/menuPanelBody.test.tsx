import React from "react";
import noop from "lodash/noop";
import { BrowserRouter } from "react-router-dom";
import { screen } from "@testing-library/react";
import { renderWithTheme } from "../../testHelpers";
import PanelBody from "../../widgets/Menu/components/PanelBody";
import type { MenuEntry } from "../../widgets/Menu/types";

const links: MenuEntry[] = [
  { label: "Home", icon: "HomeIcon", href: "/" },
  {
    label: "Earn",
    icon: "FarmIcon",
    items: [
      { label: "Farms", href: "/farms" },
      { label: "Gardens", href: "/gardens" },
    ],
  },
];

const renderPanelBody = (isPushed: boolean) =>
  renderWithTheme(
    <BrowserRouter>
      <PanelBody
        isPushed={isPushed}
        pushNav={noop}
        isMobile={false}
        links={links}
        isDark={false}
        toggleTheme={noop}
        currentLang="en-US"
        langs={[]}
        setLang={noop}
      />
    </BrowserRouter>,
  );

describe("Menu PanelBody", () => {
  it("shows each entry label as a tooltip while the sidebar is collapsed", () => {
    renderPanelBody(false);

    expect(screen.getByRole("link", { name: "Home" })).toHaveAttribute("title", "Home");
    const earn = screen.getByRole("button", { name: "Earn" });
    expect(earn).toHaveAttribute("title", "Earn");
    expect(earn).toHaveAttribute("aria-expanded", "false");
  });

  it("does not add tooltips once the sidebar is expanded and labels are visible", () => {
    renderPanelBody(true);

    expect(screen.getByRole("link", { name: "Home" })).not.toHaveAttribute("title");
    expect(screen.getByRole("button", { name: "Earn" })).not.toHaveAttribute("title");
  });
});
