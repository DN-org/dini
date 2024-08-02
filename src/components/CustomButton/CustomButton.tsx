import React from "react";
import { CustomButtonStyled } from "./CustomButton.styled";

// Определение типов для пропсов
interface CustomButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
}

// Компонент кнопки
const CustomButton: React.FC<CustomButtonProps> = ({ children, onClick }) => {
  return <CustomButtonStyled onClick={onClick}>{children}</CustomButtonStyled>;
};

export default CustomButton;
