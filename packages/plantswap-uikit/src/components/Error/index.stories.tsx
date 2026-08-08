import React from "react";
import { Button } from "../Button";
import Error from "./Error";

export default {
  title: "Components/Error",
  component: Error,
  argTypes: {},
};

export const Default: React.FC = () => <Error title="Something went wrong" />;

export const WithDescription: React.FC = () => (
  <Error
    title="Something went wrong"
    description="We couldn't load the latest data. Check your connection and try again."
  />
);

export const WithCodeAndAction: React.FC = () => (
  <Error
    code={500}
    title="Internal Server Error"
    description="The server encountered an unexpected condition that prevented it from fulfilling the request."
    action={<Button onClick={() => window.location.reload()}>Try again</Button>}
  />
);

export const CustomIcon: React.FC = () => (
  <Error
    icon={<span style={{ fontSize: 32 }}>🌱</span>}
    title="No sprouts yet"
    description="Start planting to grow your first sprout."
  />
);
