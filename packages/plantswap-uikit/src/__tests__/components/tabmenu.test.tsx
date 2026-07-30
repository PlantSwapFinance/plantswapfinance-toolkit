import React from "react";
import { renderWithTheme } from "../../testHelpers";
import { TabMenu, Tab } from "../../components/TabMenu";

const handleClick = jest.fn();

it("renders correctly", () => {
  const { asFragment } = renderWithTheme(
    <TabMenu activeIndex={0} onItemClick={handleClick}>
      <Tab>Item 1</Tab>
      <Tab>Item 2</Tab>
    </TabMenu>
  );
  expect(asFragment()).toMatchInlineSnapshot(`
    <DocumentFragment>
      .c0 {
      padding: 0 4px;
    }

    .c1 {
      display: flex;
    }

    .c2 {
      border-bottom: 2px solid #2B6E37;
      overflow-x: scroll;
      -ms-overflow-style: none;
      scrollbar-width: none;
    }

    .c2 ::-webkit-scrollbar {
      display: none;
    }

    .c3 {
      justify-content: space-between;
      flex-grow: 1;
    }

    .c3>button+button {
      margin-left: 4px;
    }

    .c4 {
      display: inline-flex;
      justify-content: center;
      cursor: pointer;
      border: 0;
      outline: 0;
      flex-grow: 1;
      padding: 8px;
      border-radius: 16px 16px 0 0;
      font-size: 16px;
      font-weight: 600;
      color: #FFFFFF;
      background-color: #2B6E37;
    }

    .c5 {
      display: inline-flex;
      justify-content: center;
      cursor: pointer;
      border: 0;
      outline: 0;
      flex-grow: 1;
      padding: 8px;
      border-radius: 16px 16px 0 0;
      font-size: 16px;
      font-weight: 600;
      color: #2B6E37;
      background-color: #eeeaf4;
    }

    @media screen and (min-width: 370px) {
      .c0 {
        padding: 0 16px;
      }
    }

    @media screen and (min-width: 852px) {
      .c3 {
        flex-grow: 0;
      }
    }

    @media screen and (min-width: 852px) {
      .c4 {
        flex-grow: 0;
      }
    }

    @media screen and (min-width: 852px) {
      .c5 {
        flex-grow: 0;
      }
    }

    <div
        class="c0 c1 c2"
      >
        <div
          class="c1 c3"
        >
          <button
            class="c4"
            color="backgroundAlt"
            scale="md"
          >
            Item 1
          </button>
          <button
            class="c5"
            color="textSubtle"
            scale="md"
          >
            Item 2
          </button>
        </div>
      </div>
    </DocumentFragment>
  `);
});
