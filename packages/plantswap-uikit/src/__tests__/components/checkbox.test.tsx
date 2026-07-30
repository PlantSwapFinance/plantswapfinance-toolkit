import React from "react";
import { renderWithTheme } from "../../testHelpers";
import Checkbox from "../../components/Checkbox/Checkbox";

const handleChange = jest.fn();

it("renders correctly", () => {
  const { asFragment } = renderWithTheme(<Checkbox checked onChange={handleChange} />);
  expect(asFragment()).toMatchInlineSnapshot(`
    <DocumentFragment>
      .c0 {
      appearance: none;
      overflow: hidden;
      cursor: pointer;
      position: relative;
      display: inline-block;
      height: 32px;
      width: 32px;
      vertical-align: middle;
      transition: background-color 0.2s ease-in-out;
      border: 0;
      border-radius: 8px;
      background-color: #eeeaf4;
      box-shadow: inset 0px 2px 2px -1px rgba(74, 74, 104, 0.1);
    }

    .c0:after {
      content: "";
      position: absolute;
      border-bottom: 2px solid;
      border-left: 2px solid;
      border-color: transparent;
      top: 30%;
      left: 0;
      right: 0;
      width: 50%;
      height: 25%;
      margin: auto;
      transform: rotate(-50deg);
      transition: border-color 0.2s ease-in-out;
    }

    .c0:hover:not(:disabled):not(:checked) {
      box-shadow: 0px 0px 0px 1px #2B6E37,0px 0px 0px 4px rgba(43, 110, 55, 0.5);
    }

    .c0:focus {
      outline: none;
      box-shadow: 0px 0px 0px 1px #2B6E37,0px 0px 0px 4px rgba(43, 110, 55, 0.5);
    }

    .c0:checked {
      background-color: #399349;
    }

    .c0:checked:after {
      border-color: white;
    }

    .c0:disabled {
      cursor: default;
      opacity: 0.6;
    }

    <input
        checked=""
        class="c0"
        scale="md"
        type="checkbox"
      />
    </DocumentFragment>
  `);
});
