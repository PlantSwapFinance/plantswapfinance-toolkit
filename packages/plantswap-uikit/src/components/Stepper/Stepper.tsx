import React from "react";
import styled from "styled-components";
import { ThemedProps, StepProps } from "./types";

const StepperWrapper = styled.div<ThemedProps>`
  display: flex;
  flex-direction: column;
  width: fit-content;
`;

type StepperProps = { children?: React.ReactNode };

const Stepper: React.FC<StepperProps> = ({ children }) => {
  const numberOfSteps = React.Children.count(children);
  return (
    <StepperWrapper>
      {React.Children.map(children, (child) => {
        if (React.isValidElement<StepProps>(child)) {
          return React.cloneElement(child, { numberOfSteps });
        }
        return child;
      })}
    </StepperWrapper>
  );
};

export default Stepper;
