import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 512 512" {...props}>
      <path
          d="M466.646 151.575c0-38.848-29.481-70.8-67.291-74.725-10.612-28.618-38.076-49.054-70.394-49.054-14.146 0-27.331 3.982-38.624 10.778C277.494 15.574 252.942 0 224.723 0c-37.412 0-68.353 27.38-74.094 63.176-3.053-.373-6.14-.631-9.293-.631-41.495 0-75.14 33.638-75.14 75.14 0 2.033.15 4.024.307 6.016-21.041 13.317-35.048 36.732-35.048 63.474 0 23.639 10.937 44.697 28.003 58.471-.074 1.352-.207 2.696-.207 4.066 0 41.494 33.638 75.14 75.14 75.14 12.437 0 24.136-3.07 34.467-8.413 14.313 10.28 34.807 23.141 44.73 20.577 0 0 3.692 57.185 2.896 71.706-1.519 27.63-9.808 58.388-15.64 83.28h90.341s-13.317-55.492-13.899-74.02c-.58-18.529 5.792-52.647 5.792-52.647l31.339-32.417c12.064 8.247 26.634 12.935 42.349 12.935 38.848 0 70.801-29.555 74.726-67.366 28.616-10.612 49.053-38.151 49.053-70.469 0-19.084-7.169-36.442-18.886-49.7 3.17-8.315 4.987-17.309 4.987-26.743zM186.215 324.033a75.46 75.46 0 0014.935-19.93l14.752 30.908c-.007 0-8.031 3.543-29.687-10.978zm55.161 19.084c-7.634 1.386-20.635-22.121-29.862-41.23 10.231 5.219 21.78 8.223 34.06 8.223 3.153 0 6.248-.256 9.302-.638-2.374 15.292-6.555 32.376-13.5 33.645zm32.434 15.043c-17.657 4.904-7.086-31.671-2.025-52.845 3.66-1.361 7.203-2.962 10.571-4.863 2.033 15.433 8.737 29.356 18.669 40.366-8.605 7.643-18.512 14.928-27.215 17.342z" />
    </Svg>
  );
};

export default Icon;