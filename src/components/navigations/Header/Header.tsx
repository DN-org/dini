//Packages
import React from "react";

//Components
import HamburgerButton from "./HamburgerMenuButton/HamburgerMenuButton";
import SearchField from "./SearchField/SearchField";
import MiniProfile from "./MiniProfile/MiniProfile";

//Styled
import {
  HeaderAuthLinkStyled,
  HeaderLogoStyled,
  HeaderStyled,
  HeaderLogoLinkStyled,
} from "./Header.styled";

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
