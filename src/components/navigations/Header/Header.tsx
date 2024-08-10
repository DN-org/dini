//Packages
import React from "react";

//Components
import SearchField from "./SearchField/SearchField";

//Styled
import {
  HeaderAuthLinkStyled,
  HeaderLogoStyled,
  HeaderStyled,
  HeaderLogoLinkStyled,
} from "./Header.styled";

//Images
import MenuButton from "./MenuButton/MenuButton";

const Header: React.FC = () => {
  return (
    <HeaderStyled>
      <MenuButton />
      <HeaderLogoLinkStyled to="/">
        <HeaderLogoStyled />
      </HeaderLogoLinkStyled>
      <SearchField />
      <HeaderAuthLinkStyled to="/Profile">Войти</HeaderAuthLinkStyled>
      {/* <MiniProfile/> */}
    </HeaderStyled>
  );
};

export default Header;
