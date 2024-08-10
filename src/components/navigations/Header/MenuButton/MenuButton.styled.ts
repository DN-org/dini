//Packages
import MenuIcon from "@mui/icons-material/Menu";
import { Button, Menu, MenuItem } from "@mui/material";
import { Link } from "react-router-dom";
import styled from "styled-components";
import SVGLogoWhite from "../../../../images/SVGLogoWhite";

//Позиционирование
//Размеры
//Границы
//Типография
//Фон и декор
//Анимация и трансформация

export const MenuButtonContainer = styled("div")(() => ({}));

export const MenuButtonStyled = styled("button")(() => ({
  display: "flex",
  flexDirection: "row",
  columnGap: "25px",
  backgroundColor: 'transparent',
  border: 'none',
  cursor: 'pointer',
}));

export const MenuIconStyled = styled(MenuIcon)(() => ({
  "&&": {
    //Типография
    fontSize: "50px",
    color: "#FFF",
  },
}));

export const MenuStyled = styled(Menu)(() => ({
  "&&": {
    "& .MuiMenu-paper": {
      position: "fixed",
      width: "300px",
      backgroundColor: "#000",
    },
  },
}));

export const MenuItemStyled = styled(MenuItem)(() => ({}));

export const MenuItemLinkStyled = styled(Link)(() => ({
  display: "flex",
  alignContent: "center",
  columnGap: "15px",
  width: "100%",
  height: "100%",
  color: "#fff",
  fontSize: "20px",

  svg: {
    fontSize: "30px",
    width: "30px",
    height: "auto",
  },
}));
