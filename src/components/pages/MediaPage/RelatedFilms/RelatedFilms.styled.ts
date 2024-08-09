//Packages
import styled from "styled-components";

export const RelatedFilmsContainer = styled("div")(() => ({
  //Позиционирование
  padding: "50px 50px",
  display: "flex",
  flexDirection: "column",
  rowGap: "25px",
  //Размеры
  width: "1280px",
  //Границы
  borderBottom: "1px",
  borderColor: 'solid rgba(255,255,255, .15)',
  //Фон и декор
  background: "black",
}));

export const ImgContainer = styled("div")(() => ({
  img: {
    margin: "auto",
    width: "180px",
  },
}));
