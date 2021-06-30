import React, { useState } from "react";
import PlantswapToggle from "./PlantswapToggle";

export default {
  title: "Components/PlantswapToggle",
  component: PlantswapToggle,
};

export const Default: React.FC = () => {
  const [isChecked, setIsChecked] = useState(false);

  const toggle = () => setIsChecked(!isChecked);

  return (
    <>
      <div style={{ marginBottom: "32px" }}>
        <PlantswapToggle checked={isChecked} onChange={toggle} />
      </div>
      <div>
        <PlantswapToggle checked={isChecked} onChange={toggle} scale="sm" />
      </div>
    </>
  );
};
