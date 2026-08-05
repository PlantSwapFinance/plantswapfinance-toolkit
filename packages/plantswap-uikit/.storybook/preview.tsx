import React from "react";
import { ThemeProvider } from "styled-components";
/* eslint-disable import/no-unresolved */
import type { Preview } from "@storybook/react";
import { light } from "../src/theme";

const preview: Preview = {
  decorators: [
    (Story) => (
      <ThemeProvider theme={light}>
        <Story />
      </ThemeProvider>
    ),
  ],
};

export default preview;
