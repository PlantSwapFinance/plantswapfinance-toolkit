import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 512 512" {...props}>
      <path
        d="M118.401 189.447l-.477 48.802c3.453-.011 10.867-.285 20.743-2.024l-.466-47.726c.665.585 1.373 1.188 2.101 1.795l-.803-1.931 11.566.444c.071.004.385.011.922.011 3.245 0 16.372-.396 32.652-5.972-.869-2.478-1.576-4.995-2.005-7.514 0 0 .396.096 1.107.214-5.203-4.858-10.205-11.658-14.216-21.282l-4.421-10.675 11.558.437c.063.003.289.007.659.007 4.803 0 21.075-.822 38.343-10.66-8.022-1.699-17.346-4.462-27.154-9.024 10.056-2.708 22.529-10.457 30.717-31.088 0 0-19.31 1.177-41.728-9.068 6.759-2.871 14.241-9.102 19.435-22.185 0 0-18.121 1.096-37.418-9.879 6.084-.677 15.311-4.237 20.972-18.504 0 0-34.658 2.124-52.596-33.625-17.328 36.046-52.018 34.51-52.018 34.51 5.79 13.9 14.84 17.438 20.934 18.108-19.133 11.34-37.315 10.548-37.315 10.548 5.351 12.843 12.82 18.952 19.566 21.752-22.333 10.734-41.788 9.88-41.788 9.88 8.426 20.22 20.809 27.824 30.84 30.458-27.95 13.657-52.459 12.58-52.459 12.58 20.243 48.581 58.97 38.406 58.97 38.406-2.8 18.245-19.095 36.884-19.095 36.884 29.386 1.192 51.042-13.149 62.874-23.679zM496.347 135.938s-24.352 1.483-52.435-11.585c10.056-2.708 22.529-10.456 30.717-31.087 0 0-19.311 1.176-41.729-9.068 6.76-2.871 14.241-9.102 19.437-22.186 0 0-18.123 1.096-37.419-9.879 6.083-.677 15.311-4.236 20.972-18.504 0 0-34.659 2.124-52.595-33.625-17.328 36.045-52.02 34.51-52.02 34.51 5.792 13.902 14.841 17.438 20.935 18.108-19.133 11.34-37.313 10.548-37.313 10.548 5.349 12.843 12.82 18.952 19.569 21.752-22.333 10.734-41.788 9.88-41.788 9.88 8.424 20.22 20.809 27.823 30.839 30.457-7.603 3.715-14.925 6.312-21.593 8.162 16.484 8.517 31.571 9.25 36.16 9.25.758 0 1.21-.018 1.28-.022l11.628-.713-4.298 10.829c-4.577 11.533-10.619 19.121-16.798 24.154a42.95 42.95 0 01-.866 3.899c16.177 5.639 29.585 6.208 34.251 6.208a39.53 39.53 0 001.788-.033l11.618-.703-2.93 7.381-.389 39.75c8.921 1.68 16.158 2.23 20.69 2.394l-.462-47.319c11.799 10.385 34.065 25.119 64.154 23.39 0 0-16.609-18.363-19.717-36.555-.001.001 38.897 9.521 58.314-39.393z" />
      <path
        d="M434.284 309.896s-1.303.078-3.704.078c-10.575 0-42.469-1.539-78.229-18.181 11.803-3.18 25.737-10.805 37.366-28.068 1.565-2.324 3.075-4.862 4.544-7.545a115.445 115.445 0 006.09-12.961s-1.055.062-2.997.062c-.881 0-1.987-.018-3.219-.059-4.755-.147-11.977-.673-20.839-2.264-10.853-1.95-24.105-5.491-38.146-11.91 10.137-4.307 21.3-13.471 29.358-32.271.341-.792.681-1.569 1.011-2.394 0 0-.785.048-2.235.048-5.31 0-19.536-.662-36.631-6.616-6.253-2.176-12.875-5.039-19.606-8.869a34.535 34.535 0 008.718-2.161c8.284-3.227 17.634-10.575 24.052-26.751 0 0-.61.038-1.734.038-5.943 0-26.252-1.051-46.746-14.178-12.155-7.785-24.376-19.814-33.7-38.403-8.539 17.767-19.783 29.689-31.173 37.688-21.874 15.366-44.289 16.25-49.147 16.25-.628 0-.962-.015-.962-.015 5.509 13.227 12.906 20.428 20.002 24.291a34.41 34.41 0 0012.713 4.003c-7.423 4.4-14.736 7.599-21.567 9.972-17.305 6.012-31.394 6.53-35.516 6.53-.799 0-1.225-.019-1.225-.019.343.829.702 1.609 1.058 2.401 8.27 18.418 19.406 27.387 29.515 31.587-15.985 7.681-30.991 11.548-42.602 13.498-10.112 1.701-17.63 1.953-20.887 1.96h-.151c-1.084 0-1.658-.025-1.658-.025.573 1.377 1.173 2.667 1.769 3.967 2.693 5.886 5.601 11.051 8.669 15.542 11.826 17.325 25.847 24.953 37.751 28.081-37.722 18.429-71.428 19.687-79.916 19.687-1.34 0-2.05-.03-2.05-.03 22.289 53.494 58.926 61.394 78.621 61.394 8.251 0 13.527-1.387 13.527-1.387-4.373 28.508-29.84 57.635-29.84 57.635 1.798.073 3.585.107 5.347.107 43.19 0 75.12-21.308 92.88-37.115l-1.028 104.906c0 7.511 7.388 13.601 16.502 13.601 9.113 0 16.501-6.09 16.501-13.601l-1.039-106.386c17.432 15.348 49.499 36.767 92.685 36.767 2.483 0 5.003-.069 7.555-.217 0 0-25.951-28.691-30.81-57.12 0 0 4.774 1.169 12.306 1.169 19.369.01 56.98-7.696 78.817-62.716z" />
    </Svg>
  );
};

export default Icon;