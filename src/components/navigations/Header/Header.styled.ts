import { Link } from "react-router-dom";
import styled from "styled-components";

export const HeaderStyled = styled("header")(() => ({
  background: "black",
  borderBottom: "1px solid white",
  boxShadow: "0px 15px 20px 11px rgba(255, 255, 255, 0.1)",

  height: "100px",
  width: "100%",
  minWidth: "1280px",

  position: "fixed",
  zIndex: "100",
  overflow: "hidden",
  top: "0",

  display: "grid",
  gridTemplateColumns: "50px 150px 430px 350px 100px",
  columnGap: "50px",

  alignContent: "center",
  justifyContent: "center",
  alignItems: "center",
}));

export const HeaderLogoStyled = styled("img")(() => ({
  width: "150px",
  display: "flex",
  alignContent: "center",
  justifyContent: "center",
  alignItems: "center",
}));

export const HeaderAuthLinkStyled = styled(Link)(() => ({
  color: "rgba(255,255,255,0.6)",
  textDecoration: "none",
}));
