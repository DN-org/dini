//Packages
import styled from "styled-components";

//Components
import CustomButton from "../../../CustomButton/CustomButton";

export const InformationStyled = styled("div")(() => ({
  //Позиционирование
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  columnGap: "50px",
  padding: "0 50px",
}));

export const PosterPlusButtonContainer = styled("div")(() => ({
  //Позиционирование
  display: "flex",
  flexDirection: "column",
  rowGap: "50px",
}));

export const PosterContainer = styled("div")(() => ({
  img: {
    //Позиционирование
    display: "flex",
    justifyContent: "center",
    //Размеры
    width: "100%",
    //Границы
    border: "1px",
    borderColor: "solid rgba(255, 255, 255, .15)",
    borderRadius: "25px",
  },
}));

export const ButtonAddCategoryCont = styled("div")(() => ({
  //Позиционирование
  display: "flex",
  justifyContent: "center",
}));

export const ButtonAddCategoryStyled = styled(CustomButton)(() => ({
  //Позиционирование
  display: "flex",
  //Размеры
  width: "100%",
  height: "auto",
}));

export const ButtonAddCategoryText = styled("p")(() => ({
  //Позиционирование
  display: "grid",
  gridTemplateColumns: "0.1fr 1fr",
  columnGap: "5px",
  justifyItems: "center",
  alignItems: "center",
  div: {
    //Позиционирование
    justifySelf: "end",
  },
  p: {
    //Позиционирование
    justifySelf: "start",
  },
}));

export const InformationContainer = styled("div")(() => ({
  //Позиционирование
  display: "grid",
  rowGap: "25px",
}));

export const RatingContainer = styled("div")(() => ({
  //Позиционирование
  display: "grid",
  gridTemplateColumns: "150px 1fr 0.2fr",
  alignItems: "center",
  //Размеры
  width: "550px",
}));

export const Rating = styled("H2")(() => ({
  //Типография
  fontSize: "40px",
}));

export const RatingCount = styled("p")(() => ({}));

export const StarCont = styled("div")(() => ({
  //Позиционирование
  display: "grid",
  gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr",
  //Размеры
  width: "80%",
}));

export const SvgContainer = styled("div")(() => ({
  //Позиционирование
  display: "flex",
  justifyContent: "center",
  alignContent: "center",
  alignItems: "center",
  //Размеры
  height: "25px",
  width: "25px",
}));

export const RatingChildContainer = styled("div")(() => ({
  //Позиционирование
  display: "grid",
  alignContent: "center",
  rowGap: "5px",
}));

export const AnotherRating = styled("div")(() => ({
  //Позиционирование
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  justifyContent: "center",
  alignItems: "center",
}));

export const AboutStyled = styled("div")(() => ({
  //Позиционирование
  display: "grid",
  gridTemplateRows: "repeat(auto, 1fr)",
  rowGap: "15px",
}));

export const AboutChildContainer = styled("div")(() => ({
  //Позиционирование
  display: "grid",
  gridTemplateColumns: "0.3fr 1fr",
}));

export const MainRolesContainer = styled("div")(() => ({
  //Позиционирование
  display: "grid",
  rowGap: "25px",
}));

export const CarouselCont = styled("div")(() => ({
  //Размеры
  width: "700px",
}));

export const DescriptionStyled = styled("div")(() => ({
  //Позиционирование
  padding: "50px",
  display: "grid",
  gridTemplateRows: "auto auto",
  rowGap: "25px",
  //Размеры
  minWidth: "1280px",
  //Границы
  borderBottom: "1px solid rgba(255,255,255, .15)",
}));
