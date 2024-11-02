//Packages
import { Link } from "react-router-dom";
import styled from "styled-components";

//Images
import SVGLogoWhite from "../../../images/SVGLogoWhite";

export const HeaderStyled = styled("header")(() => ({
  //Позиционирование
  position: "fixed",
  top: "0",
  zIndex: "100",
  display: "grid",
  gridTemplateColumns: "auto 150px auto auto",
  columnGap: "50px",
  alignContent: "center",
  justifyContent: "center",
  alignItems: "center",
  //Размеры
  height: "100px",
  width: "100%",
  minWidth: "1280px",
  //Границы
  border:"1px solid rgba(255, 255, 255, 0.15)",
  overflow: "hidden",
  //Фон и декор
  backgroundColor: "#000",
}));

export const HeaderLogoLinkStyled = styled(Link)(() => ({
  //Позиционирование
  display: "flex",
  justifyContent: "center",
  alignContent: "center",
}));

export const HeaderLogoStyled = styled(SVGLogoWhite)(() => ({
  //Позиционирование
  display: "flex",
  //Размеры
  width: "150px",
}));

export const HeaderAuthLinkStyled = styled(Link)(() => ({
  //Позиционирование
  display: "flex",
  justifyContent: "center",
  alignSelf: "center",
  //Типография
  color: "rgba(255,255,255,0.6)",
  textDecoration: "none",
}));
