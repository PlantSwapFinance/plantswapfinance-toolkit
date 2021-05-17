import React from "react";
import Svg from "../Svg/Svg";
import { SvgProps } from "../Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <svg viewBox="0 0 256 256" {...props}>
      <path
        fill="#FFC970"
        d="M162.525 102.983c1.544-1.354 4.799-.696 7.269 1.47 2.47 2.166 3.221 5.02 1.677 6.373-1.544 1.354-4.798.696-7.268-1.47-2.471-2.166-3.222-5.02-1.678-6.373z"
      ></path>
      <path
        fill="#DF7E07"
        d="M169.229 103.972l-5.592 4.903 1.119.98 5.591-4.902-1.118-.981zM171.131 106.218l-4.92 4.314 1.118.981 4.92-4.315-1.118-.98z"
      ></path>
      <path
        fill="#4893CC"
        d="M166.988 106.916s1.012-9.708 6.042-5.298c5.03 4.41-6.042 5.298-6.042 5.298z"
      ></path>
      <path
        fill="#DF7E07"
        d="M164.754 103.962l-1.118.981 1.118.98 1.118-.98-1.118-.981z"
      ></path>
      <path
        fill="#4D2419"
        d="M166.5 106.359l-2.863 2.51 1.118.981 2.863-2.51-1.118-.981zM171.131 106.218l-4.92 4.314 1.118.981 4.92-4.314-1.118-.981z"
      ></path>
      <path
        fill="#4D2419"
        d="M166.988 107.609h.079c.696-.055 6.88-.624 7.924-3.12.427-1.04-.047-2.164-1.392-3.356-1.344-1.193-2.641-1.595-3.828-1.22-2.862.901-3.495 6.323-3.558 6.947a.688.688 0 00.221.555.975.975 0 00.554.194zm3.638-6.449c.632 0 1.328.5 1.85.943.601.527 1.281 1.29 1.028 1.9-.458 1.124-3.527 1.831-5.599 2.108.348-2.038 1.218-4.521 2.404-4.909.111-.028.206-.042.317-.042zM164.754 103.962l-1.118.981 1.118.98 1.118-.98-1.118-.981z"
      ></path>
      <path
        fill="#4D2419"
        d="M169.329 112.227c1.091 0 2.024-.305 2.704-.915 1.408-1.234 1.377-3.412-.079-5.547l-1.36.707c1.044 1.553 1.171 3.106.316 3.869-.553.485-1.455.624-2.546.402-1.234-.249-2.515-.915-3.607-1.872-1.091-.957-1.85-2.08-2.135-3.162-.253-.957-.095-1.761.459-2.233.87-.762 2.641-.651 4.413.278l.807-1.193c-2.436-1.276-4.935-1.29-6.327-.069-.949.832-1.266 2.08-.886 3.522.348 1.332 1.265 2.691 2.562 3.828s2.847 1.927 4.366 2.246c.443.097.886.139 1.313.139z"
      ></path>
    </svg>
  );
};

export default Icon;
