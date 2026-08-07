import React from "react";
import styled from "styled-components";
import { Button } from "../Button";
import { Card, CardBody } from "../Card";
import { Flex } from "../Box";
import { Heading } from "../Heading";
import { Text } from "../Text";
import { RefreshIcon, WarningIcon } from "../Svg";
import isDevelopment from "../../util/isDevelopment";
import type { ErrorFallbackProps } from "./types";

const IconCircle = styled(Flex)`
  align-items: center;
  background-color: ${({ theme }) => theme.colors.failure};
  border-radius: ${({ theme }) => theme.radii.circle};
  height: 56px;
  justify-content: center;
  width: 56px;
`;

const Details = styled.details`
  background-color: ${({ theme }) => theme.colors.background};
  border: 1px solid ${({ theme }) => theme.colors.cardBorder};
  border-radius: ${({ theme }) => theme.radii.default};
  margin-top: 24px;
  padding: 12px 16px;
  text-align: left;
  width: 100%;
`;

const Summary = styled.summary`
  color: ${({ theme }) => theme.colors.textSubtle};
  cursor: pointer;
  font-size: 14px;
  font-weight: 600;
  list-style: none;

  &::-webkit-details-marker {
    display: none;
  }
`;

const Stack = styled.pre`
  color: ${({ theme }) => theme.colors.textSubtle};
  font-size: 12px;
  line-height: 1.4;
  margin: 12px 0 0;
  max-height: 240px;
  overflow: auto;
  white-space: pre-wrap;
  word-break: break-word;
`;

const defaultDescription =
  "An unexpected error occurred and this section could not be displayed. Try again, or reload the page if the problem persists.";

/**
 * The themed crash screen rendered by `ErrorBoundary` when no `fallback` is supplied.
 * Exported so apps can reuse the same look from their own boundary or route handler.
 */
const ErrorFallback: React.FC<ErrorFallbackProps> = ({
  error,
  errorInfo,
  resetErrorBoundary,
  title = "Something went wrong",
  description = defaultDescription,
  actionText = "Try again",
  showDetails,
}) => {
  const detailsVisible = showDetails ?? isDevelopment();

  return (
    <Card>
      <CardBody>
        <Flex alignItems="center" flexDirection="column">
          <IconCircle mb="16px">
            <WarningIcon color="invertedContrast" width="28px" />
          </IconCircle>
          <Heading scale="md" mb="8px" textAlign="center">
            {title}
          </Heading>
          <Text color="textSubtle" mb="24px" textAlign="center">
            {description}
          </Text>
          <Button scale="sm" onClick={resetErrorBoundary} startIcon={<RefreshIcon color="currentColor" width="20px" />}>
            {actionText}
          </Button>
          {detailsVisible && (
            <Details>
              <Summary>Error details</Summary>
              <Stack>
                {error.message}
                {errorInfo?.componentStack}
              </Stack>
            </Details>
          )}
        </Flex>
      </CardBody>
    </Card>
  );
};

export default ErrorFallback;
