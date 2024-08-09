//Packages
import { Link } from "react-router-dom";
import styled from "styled-components";
import SVGLogoWhite from "../../../images/SVGLogoWhite";

export const FooterStyled = styled("footer")(() => ({
  //Позиционирование
  display: "grid",
  gridTemplateColumns: "150px 450px 700px",
  padding: "0 100px",
  columnGap: "auto",
  alignContent: "center",
  justifyContent: "center",
  alignItems: "center",
  //Размеры
  width: "100%",
  height: "100px",
  minWidth: "1280px",
  //Границы
  borderTop: "1px",
  borderColor: "#FFF",
  //Фон и декор
  background: "black",
  boxShadow: "15px 0px 20px 11px rgba(255, 255, 255, 0.1)",
}));

export const FooterContainerStyled = styled("div")(() => ({
  //Позиционирование
  bottom: "0",
  display: "flex",
}));

export const FooterLogoLinkStyled = styled(Link)(() => ({
  //Позиционирование
  display: "flex",
  justifyContent: "center",
  alignContent: "center",
}));

export const FooterLogoStyled = styled(SVGLogoWhite)(() => ({
  //Позиционирование
  display: "flex",
  alignSelf: "center",
  justifySelf: "center",
  //Размеры
  width: "150px",
}));

export const FooterLinksStyled = styled("div")(() => ({
  //Позиционирование
  display: "grid",
  gridTemplateColumns: "repeat(5, 1fr)",
  columnGap: "50px",
}));

export const FooterLinkStyled = styled(Link)(() => ({
  //Типография
  fontWeight: "400",
  //Фон и декор
  opacity: "0.7",
}));


