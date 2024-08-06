import React from "react";
import { ButtonProps } from "@mui/material"; // Assuming you're using Material-UI, adjust the import as needed
import { CustomButtonStyled } from "./CustomButton.styled";

interface CustomButtonProps extends ButtonProps {
  children: React.ReactNode;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const CustomButton: React.FC<CustomButtonProps> = ({ children, onClick, ...rest }) => {
  return (
    <CustomButtonStyled onClick={onClick} {...rest}>
      {children}
    </CustomButtonStyled>
  );
};

export default CustomButton;
