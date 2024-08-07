//npms
import React from "react";

//styled
import {
  HeaderAuthLinkStyled,
  HeaderLogoStyled,
  HeaderStyled,
  HeaderLogoLinkStyled,
} from "./Header.styled";

//components
import HamburgerButton from "./HamburgerMenuButton/HamburgerMenuButton";
import SearchField from "./SearchField/SearchField";
import MiniProfile from "./MiniProfile/MiniProfile";

const Header: React.FC = () => {
  return (
    <HeaderStyled>
      <HamburgerButton />
      <HeaderLogoLinkStyled to="/">
        <HeaderLogoStyled />
      </HeaderLogoLinkStyled>
      <div />
      <SearchField />
      <HeaderAuthLinkStyled to="/Profile">Войти</HeaderAuthLinkStyled>
      {/* <MiniProfile/> */}
    </HeaderStyled>
  );
};

export default Header;
