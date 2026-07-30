import React from "react";
import { renderWithTheme } from "../../testHelpers";
import Button from "../../components/Button/Button";

it("renders correctly", () => {
  const { asFragment } = renderWithTheme(<Button>Submit</Button>);
  expect(asFragment()).toMatchInlineSnapshot(`
    <DocumentFragment>
      .c0 {
      align-items: center;
      border: 0;
      border-radius: 16px;
      box-shadow: 0px -1px 0px 0px rgba(14, 14, 44, 0.4) inset;
      cursor: pointer;
      display: inline-flex;
      font-family: inherit;
      font-size: 16px;
      font-weight: 600;
      justify-content: center;
      letter-spacing: 0.03em;
      line-height: 1;
      opacity: 1;
      outline: 0;
      transition: background-color 0.2s,opacity 0.2s;
      height: 48px;
      padding: 0 24px;
      background-color: #2B6E37;
      color: white;
    }

    .c0:hover:not(:disabled):not(.plant-button--disabled):not(.plant-button--disabled):not(:active) {
      opacity: 0.65;
    }

    .c0:active:not(:disabled):not(.plant-button--disabled):not(.plant-button--disabled) {
      opacity: 0.85;
      transform: translateY(1px);
      box-shadow: none;
    }

    .c0:disabled,
    .c0.plant-button--disabled {
      background-color: #E9EAEB;
      border-color: #E9EAEB;
      box-shadow: none;
      color: #BDC2C4;
      cursor: not-allowed;
    }

    <button
        class="c0"
        scale="md"
      >
        Submit
      </button>
    </DocumentFragment>
  `);
});
