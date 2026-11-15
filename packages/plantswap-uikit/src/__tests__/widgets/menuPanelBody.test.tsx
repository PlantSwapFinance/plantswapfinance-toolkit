import React from "react";
import noop from "lodash/noop";
import { BrowserRouter, MemoryRouter } from "react-router-dom";
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

describe("Menu PanelBody active page", () => {
  const ACTIVE_BAR = "inset 4px 0px 0px";

  const renderAt = (pathname: string, isPushed: boolean) =>
    renderWithTheme(
      <MemoryRouter initialEntries={[pathname]}>
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
      </MemoryRouter>,
    );

  // The highlight is drawn on the MenuEntry row: the link's parent, or the section header itself.
  const rowOf = (el: HTMLElement) => (el.tagName === "A" ? (el.parentElement as HTMLElement) : el);
  const boxShadowOf = (el: HTMLElement) => getComputedStyle(rowOf(el)).boxShadow;

  it("marks the current top-level page", () => {
    renderAt("/", true);

    expect(boxShadowOf(screen.getByRole("link", { name: "Home" }))).toContain(ACTIVE_BAR);
    expect(boxShadowOf(screen.getByRole("button", { name: "Earn" }))).toBe("none");
  });

  it("marks the current sub-page and its section", () => {
    renderAt("/gardens", true);

    expect(boxShadowOf(screen.getByRole("link", { name: "Gardens" }))).toContain(ACTIVE_BAR);
    expect(boxShadowOf(screen.getByRole("link", { name: "Farms" }))).toBe("none");
    expect(boxShadowOf(screen.getByRole("button", { name: "Earn" }))).toContain(ACTIVE_BAR);
    expect(boxShadowOf(screen.getByRole("link", { name: "Home" }))).toBe("none");
  });

  it("marks the section of the current page while the sidebar is collapsed", () => {
    renderAt("/farms", false);

    expect(boxShadowOf(screen.getByRole("button", { name: "Earn" }))).toContain(ACTIVE_BAR);
  });

  it("indents sub-pages under their section", () => {
    renderAt("/", true);

    expect(getComputedStyle(rowOf(screen.getByRole("link", { name: "Farms" }))).padding).toBe("0px 32px");
    expect(getComputedStyle(rowOf(screen.getByRole("link", { name: "Home" }))).padding).toBe("0px 16px");
  });
});
