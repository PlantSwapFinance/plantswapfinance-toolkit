import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <svg viewBox="0 0 512 512" {...props}>
        <path
        fill="#2B6E37"
        d="M349.5 216.3l-7.1-7.1 23-23c17.5-17.5 9.3-32.1 9.2-32.3l8.7-5c.5.9 12 21.5-10.8 44.3l-23 23.1zM384.2 238.2l-7.1-7.1 16.7-16.7c22.8-22.8 43.5-11.3 44.3-10.8l-5 8.7 2.5-4.3-2.5 4.4c-.6-.3-15.1-8-32.3 9.2l-16.6 16.6z"
      ></path>
      <path
        fill="#D84861"
        d="M386.1 271.6s3.2 39.2-35.4 77.8c-48.8 48.8-113.1 0-113.1 0s-48.8-64.3 0-113.1c38.5-38.5 77.8-35.4 77.8-35.4l70.7 70.7z"
      ></path>
      <path
        fill="#C12944"
        fillRule="evenodd"
        d="M347.112 232.732l7.07 7.07-101.95 101.95-7.07-7.07 101.95-101.95z"
        clipRule="evenodd"
      ></path>
      <path
        fill="#C12944"
        d="M364.2 333.8S323 355 301 341s-6.9-48.2-6.9-48.2-39.2 16.2-56.6-2.1 3.9-58.2 3.9-58.2c-1.3 1.2-2.6 2.5-3.9 3.8-48.8 48.8 0 113.1 0 113.1s64.3 48.8 113.1 0c5.4-5.2 9.8-10.5 13.6-15.6z"
      ></path>
      <path
        fill="#2B6E37"
        d="M386.1 271.6c-9.8 9.8-37 5.4-56.6-14.1-19.5-19.5-23.9-46.8-14.1-56.6 19.5-19.5 51.2-19.5 70.7 0s19.5 51.2 0 70.7zM294.2 312.8c11.045 0 20-8.954 20-20s-8.955-20-20-20c-11.046 0-20 8.954-20 20s8.954 20 20 20zM280.7 237c-7.8 7.8-20.5 7.8-28.3 0-2.7-2.7-4.5-6-5.3-9.4 11.5-9.6 22.7-15.7 32.7-19.7.3.3.6.5.9.8 7.9 7.8 7.9 20.4 0 28.3zM241.1 304.8c-6.1 6.1-15 7.4-22.4 4.1-2.8-10.9-3.9-23.2-1.5-35.7 7.6-4.3 17.4-3.2 23.9 3.3 7.9 7.9 7.9 20.5 0 28.3zM316.2 369.2c-13.9 3.3-27.6 1.9-39.6-1.3.7-3.9 2.5-7.7 5.6-10.7 7.8-7.8 20.5-7.8 28.3 0 3.3 3.3 5.2 7.6 5.7 12zM366.4 330.4c-6.8 2-14.5.4-19.9-5-7.8-7.8-7.8-20.5 0-28.3 7.8-7.8 20.5-7.8 28.3 0 2.2 2.2 3.9 4.9 4.8 7.7 0 .1-.1.2-.1.3-2.4 8.1-6.9 16.2-12.9 25-.1.1-.1.2-.2.3zM379 161.4c5.523 0 10-4.477 10-10s-4.477-10-10-10-10 4.477-10 10 4.477 10 10 10zM435.6 218c5.523 0 10-4.477 10-10s-4.477-10-10-10-10 4.477-10 10 4.477 10 10 10z"
      ></path>
      <path
        fill="#4D2419"
        d="M371.1 281.6c-3.3 0-6.9-.4-10.7-1.2-12.4-2.7-24.6-9.6-34.4-19.4-9.8-9.8-16.7-22-19.4-34.4-2.8-12.5-.8-23.1 5.3-29.2 10.4-10.4 24.2-16.1 38.9-16.1s28.5 5.7 38.9 16.1c10.4 10.4 16.1 24.2 16.1 38.9s-5.7 28.5-16.1 38.9c-4.3 4.2-10.8 6.4-18.6 6.4zm-20.4-90.3c-12 0-23.3 4.7-31.8 13.2-3.5 3.5-4.5 11.2-2.6 20 2.3 10.4 8.4 21.2 16.7 29.5 8.3 8.3 19.1 14.4 29.5 16.7 8.8 1.9 16.5 1 20-2.6 8.5-8.5 13.2-19.8 13.2-31.8s-4.7-23.3-13.2-31.8c-8.4-8.6-19.7-13.2-31.8-13.2z"
      ></path>
      <path
        fill="#4D2419"
        d="M360.5 346.3l-7.5-6.6c30.4-34.4 28.1-67.3 28.1-67.7l10-.8c.1 1.5 2.6 37.6-30.6 75.1zM299.6 376c-9.5 0-19.4-1.6-29.6-4.9-20.5-6.6-34.8-17.3-35.4-17.8-.4-.3-.7-.6-1-1-.5-.7-12.9-17.1-19.1-40-8.5-30.9-1.7-58.4 19.6-79.7 39.7-39.7 80-36.9 81.7-36.8l-.8 10 .4-5-.4 5c-.4 0-37.6-2.4-73.9 33.9-18.9 18.9-24.6 42.4-17 70 5.2 18.8 14.9 33.1 17.1 36 2.7 2 15.4 10.6 32.2 15.9 24.7 7.8 46.5 5.2 64.6-7.9l5.9 8.1c-13.1 9.5-28.1 14.2-44.3 14.2z"
      ></path>
      <path
        fill="#4D2419"
        fillRule="evenodd"
        d="M276.443 303.364l7.07 7.07-42.42 42.42-7.07-7.07 42.42-42.42zM325.99 253.872l7.07 7.07-20.503 20.503-7.07-7.07 20.503-20.503z"
        clipRule="evenodd"
      ></path>
      <path
        fill="#4D2419"
        d="M294.2 317.8c-6.4 0-12.8-2.4-17.7-7.3-9.7-9.7-9.7-25.6 0-35.4 9.7-9.7 25.6-9.7 35.4 0 9.7 9.7 9.7 25.6 0 35.4-4.9 4.9-11.3 7.3-17.7 7.3zm0-40c-3.8 0-7.7 1.5-10.6 4.4-5.8 5.8-5.8 15.4 0 21.2 5.8 5.8 15.4 5.8 21.2 0 5.8-5.8 5.8-15.4 0-21.2-2.9-2.9-6.8-4.4-10.6-4.4zM266.6 247.8c-6.4 0-12.8-2.4-17.7-7.3-3.3-3.3-5.5-7.3-6.6-11.8-.4-1.8.2-3.8 1.7-5 10.6-8.8 22-15.7 34-20.5 1.7-.7 3.7-.4 5.1.9.4.3.8.7 1.2 1.1 9.7 9.7 9.7 25.6 0 35.4-4.9 4.8-11.3 7.2-17.7 7.2zM253 229.2c.7 1.6 1.7 3 3 4.2 5.8 5.8 15.4 5.8 21.2 0 2.8-2.8 4.4-6.6 4.4-10.6 0-3.3-1.1-6.4-3-9-8.9 3.9-17.5 9-25.6 15.4zM226.9 315.7c-3.5 0-7-.7-10.3-2.2-1.4-.6-2.4-1.9-2.8-3.3-3.3-13.3-3.9-26-1.5-37.9.3-1.4 1.2-2.7 2.5-3.4 9.7-5.4 22-3.7 29.9 4.2 4.7 4.7 7.3 11 7.3 17.7 0 6.7-2.6 13-7.3 17.7-4.8 4.6-11.2 7.2-17.8 7.2zm-3.9-10.6c5.1 1.4 10.8 0 14.6-3.8 2.8-2.8 4.4-6.6 4.4-10.6s-1.6-7.8-4.4-10.6c-4.2-4.2-10.5-5.5-15.9-3.4-1.4 8.9-.9 18.5 1.3 28.4zM299.7 376.1c-7.9 0-16-1.1-24.4-3.4-2.5-.7-4.1-3.1-3.6-5.7.9-5.1 3.3-9.7 7-13.4 4.7-4.7 11-7.3 17.7-7.3 6.7 0 13 2.6 17.7 7.3 4 4 6.6 9.4 7.2 15 .3 2.5-1.4 4.8-3.8 5.4-5.9 1.4-11.7 2.1-17.8 2.1zM283 364.3c9.5 2 18.5 2.3 27 1-.7-1.7-1.8-3.3-3.1-4.6-2.8-2.8-6.6-4.4-10.6-4.4s-7.8 1.6-10.6 4.4c-1.1 1.1-2 2.3-2.7 3.6zM360.6 336.2c-6.5 0-12.9-2.6-17.7-7.3-9.7-9.7-9.7-25.6 0-35.4 9.7-9.7 25.6-9.7 35.4 0 2.8 2.8 4.8 6 6 9.7.3 1 .3 2.1 0 3.2 0 .1-.1.3-.2.4-2.4 7.9-6.7 16.2-13.5 26.1l-.2.3c-.6.9-1.6 1.6-2.6 1.9-2.3.8-4.8 1.1-7.2 1.1zm0-40c-3.8 0-7.7 1.5-10.6 4.4-5.8 5.8-5.8 15.4 0 21.2 3.5 3.5 8.5 5 13.3 4.1 5.4-8 8.9-14.7 10.9-21-.7-1.6-1.7-3.1-3-4.3-2.9-2.9-6.7-4.4-10.6-4.4z"
      ></path>
      <path
        fill="#4D2419"
        fillRule="evenodd"
        d="M358.494 204.351l7.07 7.07-7.07 7.07-7.07-7.07 7.07-7.07zM375.465 221.359l7.07 7.07-7.07 7.07-7.07-7.07 7.07-7.07z"
        clipRule="evenodd"
      ></path>
      <path
        fill="#4D2419"
        d="M379 166.4c-3.8 0-7.7-1.5-10.6-4.4-5.8-5.8-5.8-15.4 0-21.2 5.8-5.8 15.4-5.8 21.2 0 5.8 5.8 5.8 15.4 0 21.2-2.9 2.9-6.7 4.4-10.6 4.4zm-3.5-18.5c-1.9 1.9-1.9 5.1 0 7.1s5.1 2 7.1 0c1.9-1.9 1.9-5.1 0-7.1-2-2-5.2-2-7.1 0z"
      ></path>
      <path
        fill="#4D2419"
        d="M372.6 193.2l-7.1-7.1c10-10 11.5-19 11.1-24.8l10-.7c.5 8-1.4 20-14 32.6zM435.6 223c-3.8 0-7.7-1.5-10.6-4.4-5.8-5.8-5.8-15.4 0-21.2 5.8-5.8 15.4-5.8 21.2 0 5.8 5.8 5.8 15.4 0 21.2-2.9 2.9-6.8 4.4-10.6 4.4zm0-20c-1.3 0-2.6.5-3.5 1.5-1.9 1.9-1.9 5.1 0 7.1s5.1 2 7.1 0c1.9-1.9 1.9-5.1 0-7.1-1-1-2.3-1.5-3.6-1.5z"
      ></path>
      <path
        fill="#4D2419"
        d="M400.8 221.5l-7.1-7.1c12.6-12.6 24.7-14.6 32.5-14l-.7 10c-5.7-.4-14.7 1.2-24.7 11.1z"
      ></path>
    </svg>
  );
};

export default Icon;