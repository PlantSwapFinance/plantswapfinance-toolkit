import { InputHTMLAttributes, ReactNode } from "react";
import { BoxProps } from "../Box";

export interface BalanceInputProps extends BoxProps {
  value: string | number;
  onUserInput: (input: string) => void;
  innerRef?: React.RefObject<HTMLInputElement>;
  currencyValue?: ReactNode;
  placeholder?: string;
  inputProps?: Omit<InputHTMLAttributes<HTMLInputElement>, "value" | "placeholder" | "onChange">;
  isWarning?: boolean;
  decimals?: number;
}
