import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 511 511" {...props}>
        <g clipPath="url(#prefix__clip0)">
        <path
          d="M107.789 442.957l116.124 67.045 180.881-103.82-58.058-350.627-180.885 103.817-58.062 283.585z"
          fill="#F8DB8F"
        />
        <path
          d="M165.851 159.372l-58.062 283.586 116.124 67.045-58.062-350.631z"
          fill="#F7BD69"
        />
        <path
          d="M107.789 442.958h58.062l58.062 67.044-116.124-67.044z"
          fill="#F79669"
        />
        <path
          d="M165.851 442.958V159.372l-58.062 283.586h58.062z"
          fill="#F8DB8F"
        />
        <path
          d="M165.851 123.809v35.563L346.735 55.556V23.513c0-18.838-20.393-30.616-36.713-21.197L198.978 66.429a66.256 66.256 0 00-33.127 57.38zM260.1 84.823c-6.035 3.489-10.931-.215-10.931-8.262 0-8.05 4.896-17.403 10.931-20.889 6.039-3.485 10.932.215 10.932 8.266 0 8.046-4.893 17.4-10.932 20.885z"
          fill="#FFF5AE"
        />
        <path
          d="M201.348 373.749l180.791-104.382-17.833-107.683-180.79 104.377 17.832 107.688z"
          fill="#A2BF26"
        />
        <path
          d="M309.196 215.925c-19.821 4.343-36.854 18.827-43.462 39.544-6.612 20.721-1.115 42.394 12.522 57.411 19.821-4.343 36.854-18.826 43.466-39.544 6.608-20.721 1.115-42.389-12.526-57.411z"
          fill="#1B6D40"
        />
      </g>
      <defs>
        <clipPath id="prefix__clip0">
          <path fill="#fff" d="M0 0h511v511H0z" />
        </clipPath>
      </defs>
    </Svg>
  );
};

export default Icon;
