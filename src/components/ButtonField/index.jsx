import React from "react";

import { Button } from "./buttonField.styles";

const ButtonField = ({
  type,
  variant = "solid",
  onClick,
  hoverBackgroundColor = "background.primary",
  leftIcon,
  rightIcon,
  buttonText,
  loading,
  ...rest
}) => (
  <Button
    type={type}
    variant={variant}
    _hover={{
      background: variant === "solid" ? hoverBackgroundColor : "transparent",
    }}
    _focus={{
      boxShadow: "none",
    }}
    leftIcon={leftIcon}
    rightIcon={rightIcon}
    onClick={onClick}
    isLoading={loading}
    {...rest}>
    {buttonText}
  </Button>
);

export default ButtonField;
