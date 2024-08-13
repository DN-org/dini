//Packages
import styled from "styled-components";

export const ArrowsR = styled("button")(() => ({
  all: "unset",
  //Позиционирование
  position: "absolute",
  top: "110px",
  left: "1080px",
  padding: "0px 6px 0 10px",
  zIndex: 10,
  //Размеры
  height: "40px",
  //Границы
  backgroundColor: "rgb(0,0,0,.2)",
  borderRadius: "50%",
  //Фон и декор
  backdropFilter: "invert(40%)",
  //Анимация и трансформация
  cursor: "pointer",
}));

export const ArrowsL = styled("button")(() => ({
  all: "unset",
  //Позиционирование
  position: "absolute",
  top: "110px",
  left: "65px",
  padding: "0px 10px 0 6px",
  zIndex: 10,
  //Размеры
  height: "40px",
  //Границы
  borderRadius: "50%",
  //Типография
  //Фон и декор
  backgroundColor: "rgb(0,0,0,.2)",
  backdropFilter: "invert(40%)",
  //Анимация и трансформация
  cursor: "pointer",
}));

export const ContCarousel = styled("div")(() => ({
  //Позиционирование
  position: "relative",
  //Размеры
  width: "100%",

  "& button": {
    //Фон и декор
    opacity: "0",
    //Анимация и трансформация
    transition: "opacity 0.3s",
  },
  "&:hover button": {
    //Фон и декор
    opacity: "1",
    //Анимация и трансформация
    transition: "opacity 0.3s",
  },
}));

