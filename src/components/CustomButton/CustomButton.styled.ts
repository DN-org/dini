//Packages
import { Button } from "@mui/material";
import styled from "styled-components";

// Определение стилизованной кнопки
export const CustomButtonStyled = styled(Button)(() => ({
  "&&": {
    //Позиционирование
    padding: "10px 50px",
    //Границы
    border: "0px",
    borderRadius: "50px",
    //Типография
    fontFamily: "Play",
    fontWeight: "bold",
    fontSize: "16px",
    color: "#fff",
    textTransform: "none",
    lineHeight: "20px",
    //Фон и декор
    //Анимация и трансформация
    background: "rgba(255, 255, 255, 0.05)",

    "&:hover": {
      //Границы
      border: "0px solid rgba(255, 255, 255, 0.5)",
      //Типография
      color: "#fff",
      //Фон и декор
      background: "rgba(255, 255, 255, 0.05)",
    },
  },
}));
