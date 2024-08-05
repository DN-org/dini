import React from "react";
import { CustomButtonStyled } from "./CustomButton.styled";

// Определение типов для пропсов
interface CustomButtonProps {
  children: React.ReactNode;
}

// Компонент кнопки
const CustomButton: React.FC<CustomButtonProps> = ({ children }) => {
  return <CustomButtonStyled>{children}</CustomButtonStyled>;
};

export default CustomButton;
