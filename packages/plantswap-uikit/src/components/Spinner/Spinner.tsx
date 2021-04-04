import React from "react";
import styled, { keyframes } from "styled-components";
import PlantIcon from "./PlantIcon";
import BeeIcon from "./BeeIcon";
import SunIcon from "./SunIcon";
import { SpinnerProps } from "./types";

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const float = keyframes`
	0% {
		transform: translatey(0px);
	}
	50% {
		transform: translatey(30px);
	}
	100% {
		transform: translatey(0px);
	}
`;

const Container = styled.div`
  position: relative;
`;

const RotatingSunIcon = styled(SunIcon)`
  position: absolute;
  top: 0;
  left: 0;
  animation: ${rotate} 2s linear infinite;
  transform: translate3d(0, 0, 0);
`;

const FloatingBeeIcon = styled(BeeIcon)`
  animation: ${float} 6s ease-in-out infinite;
  transform: translate3d(0, 0, 0);
`;

const FixPlantIcon = styled(PlantIcon)`
  transform: translate3d(0, 0, 0);
`;

const Spinner: React.FC<SpinnerProps> = ({ size = 128 }) => {
  return (
    <Container>
      <RotatingSunIcon width={`${size * 2}px`} />
      <FloatingBeeIcon width={`${size * 5}px`} />
      <FixPlantIcon width={`${size * 5}px`} />
    </Container>
  );
};

export default Spinner;
