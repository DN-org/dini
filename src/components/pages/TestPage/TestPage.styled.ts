import styled from "styled-components";

//Позиционирование
//Размеры
//Границы
//Типография
//Фон и декор
//Анимация и трансформация

export const TestPageStyled = styled("div")(() => ({
  //Позиционирование
  padding: "150px 150px",
  marginLeft: "50%",
  display: "grid",
  justifyContent: "center",
  alignItems: "center",
  //Размеры
  width: "1280px",
  height: "720px",
  //Анимация и трансформация
  transform: "translate(-50%)",
}));
