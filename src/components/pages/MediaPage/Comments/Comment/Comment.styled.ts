//Packages
import styled from "styled-components";

export const CommentStyled = styled("div")(() => ({
  //Позиционирование
  margin: "15px 0",
  display: "inline-block",
  flexDirection: "column",
  //Размеры
  maxWidth: "100%",
  //Границы
  borderRadius: "10px",
  //Фон и декор
  backgroundColor: "rgba(255, 255, 255, .15)",
}));

export const CommentUserInfoContainer = styled("div")(() => ({
  //Позиционирование
  padding: "25px",
  display: "flex",
  columnGap: "25px",
  alignItems: "center",
  //Размеры
  width: "100%",
  height: "75px",
  //Фон и декор
  backgroundColor: "rgba(0, 0, 0, 0.5)",
}));

export const CommentUserInfoChildContainer = styled("div")(() => ({
  //Позиционирование
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
}));

export const CommentUserLogoContainer = styled("img")(() => ({
  //Размеры
  width: "50px",
  height: "50px",
  //Границы
  borderRadius: "50%",
}));

export const CommentUserName = styled("p")(() => ({}));

export const CommentText = styled("div")(() => ({
  //Позиционирование
  padding: "25px 50px",
  p: {
    //Фон и декор
    opacity: "1",
  },
}));
