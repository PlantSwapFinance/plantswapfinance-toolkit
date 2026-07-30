import React from "react";
import { renderWithTheme } from "../../testHelpers";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";

it("renders correctly", () => {
  const { asFragment } = renderWithTheme(<Breadcrumbs>Link</Breadcrumbs>);
  expect(asFragment()).toMatchInlineSnapshot(`
    <DocumentFragment>
      .c0 {
      align-items: center;
      display: flex;
      flex-wrap: wrap;
      list-style-type: none;
    }

    <ul
        class="c0"
      />
    </DocumentFragment>
  `);
});
