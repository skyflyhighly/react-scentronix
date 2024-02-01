"use client";

import React from "react";
import { Button, Typography } from "@mui/material";
import { ButtonProps } from "@mui/material";

type CustomButtonProps = ButtonProps<
  "button",
  {
    variant: string;
    startIcon?: React.ReactNode;
    endIcon?: React.ReactNode;
    color?: string;
    label: string;
    className?: string;
  }
>;

const CustomButton: React.FC<CustomButtonProps> = ({
  variant,
  startIcon,
  endIcon,
  color,
  label,
  className,
}) => {
  return (
    <Button
      variant={variant}
      startIcon={startIcon}
      endIcon={endIcon}
      className={`${className}`}
      color={color}
    >
      <Typography className="tw-text-black">{label}</Typography>
    </Button>
  );
};

export default CustomButton;
