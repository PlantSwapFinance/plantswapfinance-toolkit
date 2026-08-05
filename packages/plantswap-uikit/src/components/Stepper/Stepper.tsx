import React from "react";
import styled from "styled-components";
import type { ThemedProps, StepProps } from "./types";
import filterDomProps from "../../util/filterDomProps";

const StepperWrapper = styled.div.withConfig(filterDomProps)<ThemedProps>`
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
