import React from "react";
import {
  FooterContainerStyled,
  FooterLinksStyled,
  FooterLinkStyled,
  FooterLogoStyled,
  FooterStyled,
  FooterLogoLinkStyled
} from "./Footer.styled";

const Footer: React.FC = () => {
  return (
    <FooterContainerStyled>
      <FooterStyled>
      <FooterLogoLinkStyled to="/">
        <FooterLogoStyled/>
      </FooterLogoLinkStyled>
      <div/>
        <FooterLinksStyled>
          <FooterLinkStyled to="/Movies">Фильмы</FooterLinkStyled>
          <FooterLinkStyled to="/Profile">Сериалы</FooterLinkStyled>
          <FooterLinkStyled to="/">Мультфильмы</FooterLinkStyled>
          <FooterLinkStyled to="/">Мультсериалы</FooterLinkStyled>
          <FooterLinkStyled to="/">Аниме</FooterLinkStyled>
        </FooterLinksStyled>
      </FooterStyled>
    </FooterContainerStyled>
  );
};

export default Footer;
