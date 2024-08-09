//Packages
import styled from "styled-components";

export const ArrowsR = styled("button")(() => ({
  //Позиционирование
  position: "absolute",
  top: "45px",
  left: "590px",
  padding: "0px 6px 0 10px",
  zIndex: 10,
  //Размеры
  height: "40px",
  //Границы
  borderRadius: "50%",
  backgroundColor: "rgb(0, 0, 0, 0.2)",
  //Фон и декор
  backdropFilter: "invert(40%)",
  //Анимация и трансформация
  all: "unset",
  cursor: "pointer",
}));

export const ArrowsL = styled("button")(() => ({
  //Позиционирование
  position: "absolute",
  top: "45px",
  left: "65px",
  padding: "0px 10px 0 6px",
  zIndex: 10,
  //Размеры
  height: "40px",
  //Границы
  borderRadius: "50%",
  //Фон и декор
  backgroundColor: "rgb(0, 0, 0, 0.2)",
  backdropFilter: "invert(40%)",
  //Анимация и трансформация
  all: "unset",
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
    transition: "opacity 0.3s",
    //Анимация и трансформация
    opacity: "1",
  },
}));

export const ImgCont = styled("div")(() => ({
  //Размеры
  width: "150px",

  img: {
    //Позиционирование
    margin: "auto",
    display: "block",
    //Размеры
    width: "140px",
    height: "130px",
    //Границы
    borderRadius: "50%",
    objectFit: "cover",
  },

  p: {
    //Позиционирование
    padding: "10px 0 0",
    //Размеры
    height: "55px",
    width: "175px",
    //Типография
    textAlign: "center",
  },
}));
