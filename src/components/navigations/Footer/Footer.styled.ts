import { Link } from "react-router-dom";
import styled from "styled-components";

export const FooterStyled = styled("footer")(() => ({
  borderTop: "1px solid white",
  display: "grid",  
  gridTemplateColumns: "1fr 0.7fr",
  alignItems: "center",
  background: "black",
  boxShadow: "15px 0px 20px 11px rgba(255, 255, 255, 0.1)",
  width: '100%',
  height: '100px',
  padding: '0 320px'
}));

export const FooterContainerStyled = styled("div")(() => ({
  display: "flex",
  bottom: "0",
  
}));

export const FooterLogoStyled = styled("img")(() => ({
  width: "200px",
}));

export const FooterLinksStyled = styled("div")(() => ({
  display: "grid",
  gridTemplateColumns: "repeat(5, 1fr)",
  columnGap: "50px",
}));

export const FooterLinkStyled = styled(Link)(() => ({
  fontFamily: "Play",
  fontSize: "16px",
  lineHeight: "20px",
  fontWeight: "400",
  color: "#f1f1f1",
  opacity: "0.7",
  textDecoration: "none",
}));
