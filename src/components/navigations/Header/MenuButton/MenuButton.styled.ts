//Packages
import MenuIcon from "@mui/icons-material/Menu";
import { Menu, MenuItem } from "@mui/material";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const MenuButtonContainer = styled("div")(() => ({}));

export const MenuButtonStyled = styled("button")(() => ({
  //Позиционирование
  display: "flex",
  flexDirection: "row",
  columnGap: "25px",
  //Границы
  border: "none",
  //Фон и декор
  backgroundColor: "transparent",
  //Анимация и трансформация
  cursor: "pointer",
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
      //Позиционирование
      position: "fixed",
      padding: "25px",
      //Размеры
      width: "300px",
      //Фон и декор
      backgroundColor: "#000",
    },
  },
}));

export const MenuItemStyled = styled(MenuItem)(() => ({}));

export const MenuItemLinkStyled = styled(Link)(() => ({
  //Позиционирование
  display: "flex",
  alignContent: "center",
  columnGap: "15px",
  //Размеры
  width: "100%",
  height: "100%",
  //Типография
  fontSize: "20px",
  color: "#fff",

  svg: {
    //Размеры
    width: "30px",
    height: "auto",
    //Типография
    fontSize: "30px",
  },
}));
