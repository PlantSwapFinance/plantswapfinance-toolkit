import React from "react";
import styled from "styled-components";
import { space } from "styled-system";
import { Box, Flex } from "../Box";
import { Heading } from "../Heading";
import { Text } from "../Text";
import { ErrorIcon } from "../Svg";
import type { ErrorProps } from "./types";

const Container = styled(Flex)`
  align-items: center;
  background-color: ${({ theme }) => theme.error.background};
  border: 1px solid ${({ theme }) => theme.error.borderColor};
  border-radius: ${({ theme }) => theme.radii.card};
  box-shadow: ${({ theme }) => theme.shadows.level1};
  flex-direction: column;
  justify-content: center;
  padding: 32px 24px;
  text-align: center;

  ${space}
`;

const IconWrapper = styled(Box)`
  align-items: center;
  background-color: ${({ theme }) => theme.colors.backgroundDisabled};
  border-radius: ${({ theme }) => theme.radii.circle};
  display: flex;
  height: 72px;
  justify-content: center;
  margin-bottom: 16px;
  width: 72px;
`;

const Code = styled(Text)`
  letter-spacing: 1px;
  margin-bottom: 8px;
  text-transform: uppercase;
`;

const Title = styled(Heading)`
  color: ${({ theme }) => theme.error.titleColor};
`;

const Description = styled(Text)`
  color: ${({ theme }) => theme.error.descriptionColor};
  margin-bottom: 16px;
  max-width: 480px;
`;

const Error: React.FC<ErrorProps> = ({ code, title, description, action, icon, children, ...props }) => (
  <Container {...props}>
    <IconWrapper>{icon ?? <ErrorIcon width="40px" color="failure" />}</IconWrapper>
    {code !== undefined && <Code bold>{code}</Code>}
    <Title as="h2" mb="8px">
      {title}
    </Title>
    {description && <Description>{description}</Description>}
    {action && <Box>{action}</Box>}
    {children}
  </Container>
);

export default Error;
