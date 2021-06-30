import React from "react";
import { PlantswapStack, PlantswapInput, PlantswapLabel } from "./StyledPlantswapToggle";
import { PlantswapToggleProps, scales } from "./types";

const PlantswapToggle: React.FC<PlantswapToggleProps> = ({ checked, scale = scales.MD, ...props }) => (
  <PlantswapStack scale={scale}>
    <PlantswapInput id={props.id || "plantswap-toggle"} scale={scale} type="checkbox" checked={checked} {...props} />
    <PlantswapLabel scale={scale} checked={checked} htmlFor={props.id || "plantswap-toggle"}>
      <div className="plantswaps">
        <div className="plantswap" />
        <div className="plantswap" />
        <div className="plantswap" />
        <div className="butter" />
      </div>
    </PlantswapLabel>
  </PlantswapStack>
);

PlantswapToggle.defaultProps = {
  scale: scales.MD,
};

export default PlantswapToggle;
