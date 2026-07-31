import React from "react";
import { ChevronDownIcon, ChevronUpIcon } from "../Svg";
import Button from "./Button";
import IconButton from "./IconButton";

interface Props {
  onClick?: () => void;
  expanded?: boolean;
  children?: React.ReactNode;
}

export const ExpandableButton: React.FC<Props> = ({ onClick, expanded = false, children }) => (
  <IconButton aria-label="Hide or show expandable content" onClick={onClick}>
    {children}
    {expanded ? <ChevronUpIcon color="invertedContrast" /> : <ChevronDownIcon color="invertedContrast" />}
  </IconButton>
);

export const ExpandableLabel: React.FC<Props> = ({ onClick, expanded = false, children }) => (
  <Button
    variant="text"
    aria-label="Hide or show expandable content"
    onClick={onClick}
    endIcon={expanded ? <ChevronUpIcon color="primary" /> : <ChevronDownIcon color="primary" />}
  >
    {children}
  </Button>
);
