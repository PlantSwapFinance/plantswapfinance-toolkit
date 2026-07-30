import React from "react";
import { renderWithTheme } from "../../testHelpers";
import Tag from "../../components/Tag/Tag";

it("renders correctly", () => {
  const { asFragment } = renderWithTheme(<Tag>Core</Tag>);
  expect(asFragment()).toMatchInlineSnapshot(`
    <DocumentFragment>
      .c0 {
      align-items: center;
      border-radius: 16px;
      color: #ffffff;
      display: inline-flex;
      font-weight: 400;
      white-space: nowrap;
    }

    .c0>svg {
      fill: currentColor;
    }

    <div
        class="c0"
      >
        Core
      </div>
    </DocumentFragment>
  `);
});
