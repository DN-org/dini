//npms
import React from 'react';

//styled
import {
  HeaderAuthLinkStyled,
  HeaderLogoStyled,
  HeaderStyled,
} from './Header.styled';

//components
import HamburgerButton from './HamburgerMenuButton/HamburgerMenuButton';
import SearchField from './SearchField/SearchField';
import { Link } from 'react-router-dom';

//images
const Logo: string = require('../../../images/logo_white.svg').default;

const Header: React.FC = () => {
  return (
    <HeaderStyled>
        <HamburgerButton />
        <Link to="/"><HeaderLogoStyled src={Logo} alt='Logo'/></Link>
        <div />
        <SearchField/>
        <HeaderAuthLinkStyled to="/">Войти</HeaderAuthLinkStyled>
    </HeaderStyled>
  );
};

export default Header;
