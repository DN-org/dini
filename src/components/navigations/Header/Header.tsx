import React from 'react';
import HamburgerButton from '../../HamburgerMenuButton/HamburgerMenuButton';
import {
  HeaderLogoStyled,
  HeaderStyled,
} from './Header.styled';

const Logo: string = require('../../../images/logo_white.svg').default;

const Header: React.FC = () => {
  return (
    <HeaderStyled>
        <HamburgerButton />
        <HeaderLogoStyled src={Logo} />
        <div />
    </HeaderStyled>
  );
};

export default Header;
