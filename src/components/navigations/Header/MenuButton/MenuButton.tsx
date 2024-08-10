//Packages
import React from "react";

//Styles
import {
  MenuButtonContainer,
  MenuButtonStyled,
  MenuIconStyled,
  MenuItemLinkStyled,
  MenuItemStyled,
  MenuStyled,
} from "./MenuButton.styled";

import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import MovieCreationRoundedIcon from "@mui/icons-material/MovieCreationRounded";
import LiveTvRoundedIcon from "@mui/icons-material/LiveTvRounded";
import SVGAnime from "../../../../images/SVGAnime";
import SVGMultSerial from "../../../../images/SVGMultSerial";
import SVGMult from "../../../../images/SVGMult";

const MenuButton: React.FC = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <MenuButtonContainer>
      <MenuButtonStyled
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <MenuIconStyled />
      </MenuButtonStyled>

      <MenuStyled
        disableScrollLock={true}
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItemStyled onClick={handleClose}>
          <MenuItemLinkStyled to={"/"}>
            <HomeRoundedIcon />
            Главная
          </MenuItemLinkStyled>
        </MenuItemStyled>
        <MenuItemStyled onClick={handleClose}>
          <MenuItemLinkStyled to={"/"}>
            <MovieCreationRoundedIcon />
            Фильмы
          </MenuItemLinkStyled>
        </MenuItemStyled>
        <MenuItemStyled onClick={handleClose}>
          <MenuItemLinkStyled to={"/"}>
            <LiveTvRoundedIcon />
            Сериалы
          </MenuItemLinkStyled>
        </MenuItemStyled>
        <MenuItemStyled onClick={handleClose}>
          <MenuItemLinkStyled to={"/"}>
            <SVGMult />
            Мультфильмы
          </MenuItemLinkStyled>
        </MenuItemStyled>
        <MenuItemStyled onClick={handleClose}>
          <MenuItemLinkStyled to={"/"}>
            <SVGMultSerial />
            Мультсериалы
          </MenuItemLinkStyled>
        </MenuItemStyled>
        <MenuItemStyled onClick={handleClose}>
          <MenuItemLinkStyled to={"/"}>
            <SVGAnime />
            Аниме
          </MenuItemLinkStyled>
        </MenuItemStyled>
      </MenuStyled>
    </MenuButtonContainer>
  );
};

export default MenuButton;
