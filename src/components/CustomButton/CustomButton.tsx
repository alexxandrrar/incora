import React from "react";
import { Button } from "antd";

interface IButtonProps {
  children?: React.ReactNode;
  onClick?: () => void;
  props?: any;
}

export const CustomButton: React.FC<IButtonProps> = ({
  onClick,
  children,
  ...props
}) => {
  return (
    <Button {...props} onClick={onClick}>
      {children}
    </Button>
  );
};
