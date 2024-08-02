import React from 'react';
import {
  FooterLinksStyled,
  FooterLinkStyled,
  FooterLogoStyled,
  FooterStyled,
} from './Footer.styled';

const Logo: string = require('../../../images/logo_white.svg').default;

const Footer: React.FC = () => {
  return (
    <FooterStyled>
      <FooterLogoStyled src={Logo} />
      <FooterLinksStyled>
        <FooterLinkStyled to="/">Фильмы</FooterLinkStyled>
        <FooterLinkStyled to="/">Сериалы</FooterLinkStyled>
        <FooterLinkStyled to="/">Мультфильмы</FooterLinkStyled>
        <FooterLinkStyled to="/">Мультсериалы</FooterLinkStyled>
        <FooterLinkStyled to="/">Аниме</FooterLinkStyled>
      </FooterLinksStyled>
    </FooterStyled>
  );
};

export default Footer;
