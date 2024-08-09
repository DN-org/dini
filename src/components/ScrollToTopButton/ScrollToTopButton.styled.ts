import styled from "styled-components";
import ArrowUpwardRounded from "@mui/icons-material/ArrowUpwardRounded";

export const ScrollToTopButtonStyled = styled("div")(() => ({
  //Позиционирование 
  position: "fixed",
  right: "50px",
  bottom: "150px",
  zIndex: "10",
  alignItems: "center",
  justifyContent: "center",
  
  //Размеры и границы
  width: "100px",
  height: "100px",
  border: "1px solid rgba(255,255,255,0.05)",
  borderRadius: "50%",

  //Декор
  backgroundColor: "rgba(0,0,0,0.5)",
  cursor: "pointer",  

  //Анимация
  transition: "opacity 0.3s ease-in-out, visibility 0.5s ease-in-out",
}));

export const ScrollToTopButtonArrow = styled(ArrowUpwardRounded)(() => ({
  "&&": {
    textAlign: "center",
    fontSize: "70px",
    lineHeight: "70px",
  },
}));
