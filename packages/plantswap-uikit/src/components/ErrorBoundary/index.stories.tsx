import type { Meta } from "@storybook/react";
import React, { useState } from "react";
import styled from "styled-components";
import { Button } from "../Button";
import { Card, CardBody } from "../Card";
import { Flex } from "../Box";
import { Heading } from "../Heading";
import { Text } from "../Text";
import ErrorBoundary from "./ErrorBoundary";

const Row = styled.div`
  margin-bottom: 32px;
`;

export default {
  title: "Components/ErrorBoundary",
  component: ErrorBoundary,
  argTypes: {},
} as Meta;

const Bomb: React.FC<{ shouldThrow: boolean }> = ({ shouldThrow }) => {
  if (shouldThrow) {
    throw new Error("Failed to load the farm data from the contract");
  }

  return <Text>Everything is growing just fine.</Text>;
};

export const Default: React.FC = () => {
  const [shouldThrow, setShouldThrow] = useState(false);

  return (
    <div style={{ padding: "32px", width: "500px" }}>
      <Row>
        <Button scale="sm" mb="16px" onClick={() => setShouldThrow(true)}>
          Crash the child
        </Button>
        <ErrorBoundary onReset={() => setShouldThrow(false)}>
          <Bomb shouldThrow={shouldThrow} />
        </ErrorBoundary>
      </Row>
    </div>
  );
};

export const CustomCopy: React.FC = () => (
  <div style={{ padding: "32px", width: "500px" }}>
    <ErrorBoundary
      title="This farm could not be loaded"
      description="The pool data is temporarily unavailable. Your funds are safe."
      actionText="Reload the farm"
      showDetails={false}
    >
      <Bomb shouldThrow />
    </ErrorBoundary>
  </div>
);

export const CustomFallback: React.FC = () => (
  <div style={{ padding: "32px", width: "500px" }}>
    <ErrorBoundary
      fallback={({ error, resetErrorBoundary }) => (
        <Card>
          <CardBody>
            <Flex alignItems="center" flexDirection="column">
              <Heading scale="md" mb="8px">
                Custom fallback
              </Heading>
              <Text color="failure" mb="16px">
                {error.message}
              </Text>
              <Button scale="sm" variant="secondary" onClick={resetErrorBoundary}>
                Retry
              </Button>
            </Flex>
          </CardBody>
        </Card>
      )}
    >
      <Bomb shouldThrow />
    </ErrorBoundary>
  </div>
);

export const WithResetKeys: React.FC = () => {
  const [route, setRoute] = useState("farms");

  return (
    <div style={{ padding: "32px", width: "500px" }}>
      <Text mb="16px">
        The boundary below auto-recovers whenever <code>route</code> changes, the way it would on navigation.
      </Text>
      <Button scale="sm" mb="16px" onClick={() => setRoute(route === "farms" ? "pools" : "farms")}>
        Navigate to {route === "farms" ? "pools" : "farms"}
      </Button>
      <ErrorBoundary resetKeys={[route]}>
        <Bomb shouldThrow={route === "farms"} />
      </ErrorBoundary>
    </div>
  );
};
