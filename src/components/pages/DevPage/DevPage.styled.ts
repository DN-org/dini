import styled from "styled-components";

export const DevPageStyled = styled("div")(() => ({
  //Позиционирование
  padding: "150px 150px",
  marginLeft: "50%",
  display: "grid",
  justifyContent: "center",
  alignItems: "center",
  //Размеры
  width: "1280px",
  height: "720px",
  //Типография
  textDecoration: "underline",
  //Анимация и трансформация
  transform: "translate(-50%)",
}));
