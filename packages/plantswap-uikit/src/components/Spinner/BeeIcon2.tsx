import React from "react";
import Svg from "../Svg/Svg";
import { SvgProps } from "../Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <svg viewBox="0 0 256 256" {...props}>
      <path
        fill="#FFC970"
        d="M103.296 133.983c-1.525-1.354-4.74-.696-7.179 1.47-2.44 2.166-3.182 5.02-1.657 6.373 1.525 1.354 4.74.696 7.179-1.47 2.44-2.166 3.182-5.02 1.657-6.373z"
      ></path>
      <path
        fill="#DF7E07"
        d="M96.675 134.972l5.523 4.903-1.105.98-5.522-4.902 1.105-.981zM94.797 137.218l4.86 4.314-1.105.981-4.86-4.315 1.105-.98z"
      ></path>
      <path
        fill="#4893CC"
        d="M98.888 137.916s-1-9.708-5.967-5.298c-4.968 4.41 5.967 5.298 5.967 5.298z"
      ></path>
      <path
        fill="#DF7E07"
        d="M101.095 134.962l1.104.981-1.104.98-1.105-.98 1.105-.981z"
      ></path>
      <path
        fill="#4D2419"
        d="M99.37 137.359l2.828 2.51-1.104.981-2.828-2.51 1.105-.981zM94.797 137.218l4.86 4.314-1.105.981-4.86-4.314 1.105-.981z"
      ></path>
      <path
        fill="#4D2419"
        d="M98.889 138.609h-.078c-.688-.055-6.796-.624-7.827-3.12-.422-1.04.047-2.164 1.375-3.356 1.328-1.193 2.609-1.595 3.78-1.221 2.828.902 3.453 6.324 3.515 6.948a.693.693 0 01-.218.555.955.955 0 01-.547.194zm-3.593-6.449c-.625 0-1.313.5-1.828.943-.594.527-1.266 1.29-1.016 1.9.454 1.124 3.484 1.831 5.53 2.108-.343-2.038-1.202-4.521-2.374-4.909a1.2 1.2 0 00-.312-.042zM101.095 134.962l1.105.981-1.105.98-1.104-.98 1.104-.981z"
      ></path>
      <path
        fill="#4D2419"
        d="M96.577 143.227c-1.078 0-2-.305-2.672-.915-1.39-1.234-1.359-3.412.078-5.547l1.344.707c-1.031 1.553-1.156 3.106-.313 3.869.547.485 1.438.624 2.516.402 1.218-.249 2.483-.915 3.561-1.872 1.078-.957 1.828-2.08 2.109-3.162.25-.957.094-1.761-.453-2.233-.859-.762-2.609-.651-4.358.278l-.797-1.193c2.406-1.276 4.874-1.29 6.249-.069.937.832 1.25 2.08.875 3.522-.344 1.332-1.25 2.691-2.531 3.828-1.281 1.137-2.812 1.927-4.312 2.246a5.997 5.997 0 01-1.296.139z"
      ></path>
    </svg>
  );
};

export default Icon;
