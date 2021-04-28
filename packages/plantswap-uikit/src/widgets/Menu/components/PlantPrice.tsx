import React from "react";
import styled from "styled-components";
import { PlantRoundIcon } from "../../../components/Svg";
import Text from "../../../components/Text/Text";
import Skeleton from "../../../components/Skeleton/Skeleton";

interface Props {
  plantPriceUsd?: number;
}

const PriceLink = styled.a`
  display: flex;
  align-items: center;
  svg {
    transition: transform 0.3s;
  }
  :hover {
    svg {
      transform: scale(1.2);
    }
  }
`;

const PlantPrice: React.FC<Props> = ({ plantPriceUsd }) => {
  return plantPriceUsd ? (
    <PriceLink href="https://plantswap.info/token/0x58BA5Bd8872ec18BD360a9592149daed2fC57c69" target="_blank">
      <PlantRoundIcon width="24px" mr="8px" />
      <Text color="textSubtle" bold>{`$${plantPriceUsd.toFixed(3)}`}</Text>
    </PriceLink>
  ) : (
    <Skeleton width={80} height={24} />
  );
};

export default React.memo(PlantPrice);
