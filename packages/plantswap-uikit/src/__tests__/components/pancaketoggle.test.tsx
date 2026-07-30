import React from "react";
import { renderWithTheme } from "../../testHelpers";
import PlantToggle from "../../components/PlantToggle/PlantToggle";

const handleChange = jest.fn();

it("renders correctly", () => {
  const { asFragment } = renderWithTheme(<PlantToggle checked onChange={handleChange} scale="md" />);
  expect(asFragment()).toMatchInlineSnapshot(`
    <DocumentFragment>
      .c0 {
      position: relative;
      display: inline-block;
    }

    .c0:label:before {
      content: none;
    }

    .c0 .plants {
      transition: 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    }

    .c0 .plant {
      background: #2B6E37;
      border-radius: 50%;
      width: 32px;
      height: 32px;
      position: absolute;
      transition: 0.4s ease;
      top: 2px;
      left: 4px;
      box-shadow: 0 2px 0 2px #399349;
    }

    .c0 .plant:nth-child(1) {
      background: #FFFFFF;
      box-shadow: 0 2px 0 2px #BDC2C4;
    }

    .c0 .plant:nth-child(2) {
      left: 0;
      top: -3px;
      transform: scale(0);
      transition: 0.2s ease 0.2s;
    }

    .c0 .plant:nth-child(3) {
      top: -8px;
      transform: scale(0);
      transition: 0.2s ease 0.2s;
    }

    .c0 .plant:nth-child(3):before,
    .c0 .plant:nth-child(3):after {
      content: "";
      position: absolute;
      background: #2B6E37;
      border-radius: 20px;
      width: 50%;
      height: 20%;
    }

    .c0 .plant:nth-child(3):before {
      top: 20px;
      left: 5px;
    }

    .c0 .plant:nth-child(3):after {
      top: 22px;
      right: 5px;
    }

    .c1 {
      height: 40px;
      left: 0;
      opacity: 0;
      position: absolute;
      top: 0;
      width: 40px;
    }

    .c1:focus+label {
      box-shadow: 0px 0px 0px 1px #2B6E37,0px 0px 0px 4px rgba(43, 110, 55, 0.5);
    }

    .c1:checked+label .plants {
      transform: translateX(34px);
    }

    .c1:checked+label .plant:nth-child(1) {
      background: #FFFFFF;
      box-shadow: 0 2px 0 2px #399349;
      transition-delay: 0.2s;
    }

    .c1:checked+label .plant:nth-child(2) {
      transform: scale(1);
      transition-delay: 0.2s;
    }

    .c1:checked+label .plant:nth-child(3) {
      transform: scale(1);
      transition-delay: 0.4s;
    }

    .c1:checked+label .butter {
      transform: scale(1);
      transition-delay: 0.6s;
    }

    .c2 {
      width: 72px;
      height: 40px;
      background: #399349;
      box-shadow: inset 0px 2px 2px -1px rgba(74, 74, 104, 0.1);
      display: inline-block;
      border-radius: 50px;
      position: relative;
      transition: all 0.3s ease;
      transform-origin: 20% center;
      cursor: pointer;
    }

    <div
        class="c0"
        scale="md"
      >
        <input
          checked=""
          class="c1"
          id="plant-toggle"
          scale="md"
          type="checkbox"
        />
        <label
          class="c2"
          for="plant-toggle"
          scale="md"
        >
          <div
            class="plants"
          >
            <div
              class="plant"
            />
          </div>
        </label>
      </div>
    </DocumentFragment>
  `);
});

it("renders correctly scale sm", () => {
  const { asFragment } = renderWithTheme(<PlantToggle checked onChange={handleChange} scale="sm" />);
  expect(asFragment()).toMatchInlineSnapshot(`
    <DocumentFragment>
      .c0 {
      position: relative;
      display: inline-block;
    }

    .c0:label:before {
      content: none;
    }

    .c0 .plants {
      transition: 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    }

    .c0 .plant {
      background: #2B6E37;
      border-radius: 50%;
      width: 16px;
      height: 16px;
      position: absolute;
      transition: 0.4s ease;
      top: 2px;
      left: 4px;
      box-shadow: 0 1px 0 1px #399349;
    }

    .c0 .plant:nth-child(1) {
      background: #FFFFFF;
      box-shadow: 0 1px 0 1px #BDC2C4;
    }

    .c0 .plant:nth-child(2) {
      left: 0;
      top: 0px;
      transform: scale(0);
      transition: 0.2s ease 0.2s;
    }

    .c0 .plant:nth-child(3) {
      top: -3px;
      transform: scale(0);
      transition: 0.2s ease 0.2s;
    }

    .c0 .plant:nth-child(3):before,
    .c0 .plant:nth-child(3):after {
      content: "";
      position: absolute;
      background: #2B6E37;
      border-radius: 20px;
      width: 50%;
      height: 20%;
    }

    .c0 .plant:nth-child(3):before {
      top: 10px;
      left: 2.5px;
    }

    .c0 .plant:nth-child(3):after {
      top: 11px;
      right: 2.5px;
    }

    .c1 {
      height: 40px;
      left: 0;
      opacity: 0;
      position: absolute;
      top: 0;
      width: 40px;
    }

    .c1:focus+label {
      box-shadow: 0px 0px 0px 1px #2B6E37,0px 0px 0px 4px rgba(43, 110, 55, 0.5);
    }

    .c1:checked+label .plants {
      transform: translateX(16px);
    }

    .c1:checked+label .plant:nth-child(1) {
      background: #FFFFFF;
      box-shadow: 0 1px 0 1px #399349;
      transition-delay: 0.2s;
    }

    .c1:checked+label .plant:nth-child(2) {
      transform: scale(1);
      transition-delay: 0.2s;
    }

    .c1:checked+label .plant:nth-child(3) {
      transform: scale(1);
      transition-delay: 0.4s;
    }

    .c1:checked+label .butter {
      transform: scale(1);
      transition-delay: 0.6s;
    }

    .c2 {
      width: 36px;
      height: 20px;
      background: #399349;
      box-shadow: inset 0px 2px 2px -1px rgba(74, 74, 104, 0.1);
      display: inline-block;
      border-radius: 50px;
      position: relative;
      transition: all 0.3s ease;
      transform-origin: 20% center;
      cursor: pointer;
    }

    <div
        class="c0"
        scale="sm"
      >
        <input
          checked=""
          class="c1"
          id="plant-toggle"
          scale="sm"
          type="checkbox"
        />
        <label
          class="c2"
          for="plant-toggle"
          scale="sm"
        >
          <div
            class="plants"
          >
            <div
              class="plant"
            />
          </div>
        </label>
      </div>
    </DocumentFragment>
  `);
});
