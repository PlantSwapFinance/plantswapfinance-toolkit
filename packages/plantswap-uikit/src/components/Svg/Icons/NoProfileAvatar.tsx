import React from "react";
import { useTheme } from "styled-components";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  const theme = useTheme();
  const primaryColor = theme.isDark ? "#3C3742" : "#e9eaeb";
  const secondaryColor = theme.isDark ? "#666171" : "#bdc2c4";

  return (
    <svg viewBox="0 0 32 32" {...props}>
<path fill="#c4c4c4"
  d="M24.316 7.722c2.18.66 4.615 1.428 4.086 4.598a2.962 2.962 0 01-.268.94c.083.082.224.202.378.337l.586.525c.5.495 1.038 1.033 1.283 1.7 1.47-2.995 2.016-10.35 1.316-11.035-2.101-2.067-5.688-2.007-8.968-.15 1.077.792 1.582 1.772 1.587 3.085zm5.608.161a.984.984 0 110 1.968.984.984 0 010-1.968zm-2.066-3.592c.708 0 1.279.573 1.279 1.279 0 .707-.57 1.279-1.28 1.279a1.278 1.278 0 110-2.558zM3.16 13.038c.155-.134.295-.254.38-.334a3.171 3.171 0 01-.27-.957c-.526-3.156 1.908-3.925 4.088-4.584.005-1.187.418-2.1 1.29-2.849C5.546 2.79 2.272 2.854.303 4.79c-.653.64-.222 7.08 1.033 10.376.26-.622.765-1.132 1.24-1.601l.584-.526zm.566-8.968a1.279 1.279 0 11.002 2.558 1.279 1.279 0 01-.002-2.558zM1.659 9.63a.984.984 0 11-.001-1.967.984.984 0 01.001 1.967zM9.693 24.987c-.262-.347-.272-.725-.279-1.03-.009-.36-.015-.558-.344-.777-.12-.07-.62-.003-.89.034-.413.055-.842.114-1.186.027-1.35-.48-1.583-.734-1.755-1.43-.072-.287-.16-.644-.572-1.263a3.645 3.645 0 00-1.118-.856c-.443.85-.504 2.057.078 3.828 1.79 5.452 3.048 5.376 6.39 5.173.717-.043 1.392-.303 2.008-.708-.34-.69-.96-1.393-1.49-1.989-.325-.365-.626-.705-.842-1.009z"
></path>
<path fill="#c4c4c4"
  d="M22.488 25.2c.092-.124.101-.274.107-.53.01-.405.026-1.017.739-1.49.384-.258.925-.185 1.499-.108.317.043.674.089.811.059 1.046-.373 1.066-.456 1.153-.798.077-.316.198-.794.726-1.583.297-.347.65-.623 1.026-.866-.32-.761-.925-1.258-1.69-1.58.905-.123 1.806-.523 2.727-1.39.191-.792-.29-1.347-1.11-2.16l-.538-.484c-.653-.56-.897-.77-.623-1.346.067-.139.157-.329.212-.733.387-2.33-1.09-2.9-3.534-3.639l-.59-.179.02-.349c.077-1.304-.372-2.152-1.516-2.872-.737.496-1.45 1.079-2.118 1.756-.355.364-.68.74-.982 1.126a.966.966 0 00-.06-.39.77.77 0 00-.472-.475c-.287-.1-.54-.093-.743.023-.268.154-.464.497-.596 1.04-.124.494-.762 2.412-.938 3.708-.177-1.296-.813-3.214-.935-3.708-.137-.543-.33-.886-.599-1.04-.204-.116-.454-.123-.743-.023a.774.774 0 00-.472.475.982.982 0 00-.06.379c-.302-.382-.62-.758-.973-1.115a13.38 13.38 0 00-2.722-2.135c-.943.683-1.31 1.494-1.238 2.69l.02.349-.592.179c-2.444.738-3.923 1.308-3.535 3.625.055.418.146.608.213.746.273.576.03.787-.622 1.348l-.542.481c-.824.818-1.31 1.374-1.11 2.174l-.134.034c.084.12.17.243.259.333.992 1.009 1.959 1.437 2.93 1.569-.41.173-.774.395-1.076.678.493.275.936.604 1.305 1.033.528.79.648 1.268.726 1.584.085.342.106.423 1.152.797.137.03.496-.017.812-.059.573-.076 1.114-.148 1.499.108.712.473.728 1.086.739 1.49.006.256.014.407.107.53.207.289.488.604.79.944.53.596 1.14 1.286 1.539 2.025 1.379-1.25 2.37-3.236 2.729-5.054.089.673.259 1.117.526 1.117.278 0 .452-.475.539-1.184.417 2.217 1.782 4.699 3.657 5.803.4-.72.994-1.39 1.51-1.972.302-.337.583-.652.79-.94zm-7.074-5.568a2.543 2.543 0 00-.873-1.255c.249-.311.45-.654.618-1.013.067.713.205 1.284.314 1.833-.026.12-.043.271-.059.435zm.536-7.193c-.141 0-.273.175-.39.484-.282-1.382-.897-2.808-1.817-4.153.107.03.222.046.33.016.277-.063.481-.382.431-.687 0-.009-.027-.192-.156-.225-.116-.033-.27.073-.455.312l.047.044c.203-.26.32-.304.383-.29l.01.001c.087.025.11.168.11.172.04.27-.137.554-.383.608a.585.585 0 01-.378-.036c-.133-.19-.27-.379-.415-.567a.857.857 0 01.038-.45.715.715 0 01.431-.436c.271-.095.506-.087.694.023.252.143.437.47.567.999.126.517.852 2.675.969 3.933-.007.087-.015.173-.016.252zm.601 7.313a3.538 3.538 0 00-.092-.518c.1-.572.236-1.284.292-2.067.184.434.419.84.71 1.21-.424.328-.738.777-.91 1.375zm2.174-11.619c-.142.18-.272.363-.402.548a.586.586 0 01-.391.04c-.247-.055-.425-.338-.38-.61 0-.003.02-.146.11-.17l.006-.001c.065-.014.18.029.383.29l.046-.045c-.182-.238-.337-.344-.453-.312-.13.034-.157.218-.157.225-.05.306.153.624.431.687.114.03.23.015.346-.019-.968 1.41-1.597 2.914-1.856 4.36-.11-.354-.231-.589-.366-.664a3.641 3.641 0 00-.02-.28c.123-1.259.845-3.417.97-3.933.13-.528.316-.856.568-1 .19-.109.42-.117.694-.021.197.07.35.223.431.434a.93.93 0 01.04.471z"
></path>
<path fill="#c4c4c4"
  d="M27.656 22.547c-.172.696-.406.95-1.755 1.43-.344.086-.773.028-1.188-.027-.267-.037-.769-.103-.888-.035-.33.22-.335.418-.344.778-.008.303-.018.683-.278 1.03-.217.303-.518.643-.844 1.01-.472.53-1.015 1.145-1.368 1.761.32.11.654.179.995.2 3.342.203 4.6.279 6.39-5.174.37-1.122.477-2.02.4-2.746a3.56 3.56 0 00-.547.508c-.414.62-.5.977-.573 1.265z"
></path>
</svg>
  );
};

export default Icon;
