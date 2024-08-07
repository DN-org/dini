import { Link } from "react-router-dom";
import styled from "styled-components";
import SVGLogoWhite from "../../../images/SVGLogoWhite";

export const FooterStyled = styled("footer")(() => ({
  background: "black",
  borderTop: "1px solid white",
  boxShadow: "15px 0px 20px 11px rgba(255, 255, 255, 0.1)",

  height: "100px",
  width: "100%",
  minWidth: "1280px",

  display: "grid",
  gridTemplateColumns: "150px 450px 700px",
  padding: "0 100px",
  columnGap: "auto",

  alignContent: "center",
  justifyContent: "center",
  alignItems: "center",
}));

export const FooterContainerStyled = styled("div")(() => ({
  display: "flex",
  bottom: "0",
}));

export const FooterLogoLinkStyled = styled(Link)(() => ({
  display: "flex",
  justifyContent: "center",
  alignContent: "center",
}));

export const FooterLogoStyled = styled(SVGLogoWhite)(() => ({
  width: "150px",
  display: "flex",
  alignSelf: "center",
  justifySelf: "center",
}));

export const FooterLinksStyled = styled("div")(() => ({
  display: "grid",
  gridTemplateColumns: "repeat(5, 1fr)",
  columnGap: "50px",
}));

export const FooterLinkStyled = styled(Link)(() => ({
  fontWeight: "400",
  opacity: "0.7",
}));
