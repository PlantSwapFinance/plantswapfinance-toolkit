import React from "react";
import { renderWithTheme } from "../../testHelpers";
import { Error } from "../../components/Error";

it("renders correctly with a title", () => {
  const { getByText, asFragment } = renderWithTheme(<Error title="Boom" />);
  expect(getByText("Boom")).toBeInTheDocument();
  expect(asFragment()).toMatchSnapshot();
});

it("renders code, description and custom children", () => {
  const { getByText } = renderWithTheme(
    <Error code={404} title="Not found" description="Page does not exist">
      <span>extra content</span>
    </Error>,
  );
  expect(getByText("404")).toBeInTheDocument();
  expect(getByText("Not found")).toBeInTheDocument();
  expect(getByText("Page does not exist")).toBeInTheDocument();
  expect(getByText("extra content")).toBeInTheDocument();
});
