import React from "react";
import {
  FooterContainerStyled,
  FooterLinksStyled,
  FooterLinkStyled,
  FooterLogoStyled,
  FooterStyled,
} from "./Footer.styled";

const Logo: string = require("../../../images/logo_white.svg").default;

const Footer: React.FC = () => {
  return (
    <FooterContainerStyled>
      <FooterStyled>
        <FooterLogoStyled src={Logo} />
        <FooterLinksStyled>
          <FooterLinkStyled to="/Movies">Фильмы</FooterLinkStyled>
          <FooterLinkStyled to="/">Сериалы</FooterLinkStyled>
          <FooterLinkStyled to="/">Мультфильмы</FooterLinkStyled>
          <FooterLinkStyled to="/">Мультсериалы</FooterLinkStyled>
          <FooterLinkStyled to="/">Аниме</FooterLinkStyled>
        </FooterLinksStyled>
      </FooterStyled>
    </FooterContainerStyled>
  );
};

export default Footer;
