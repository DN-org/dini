//Packages
import styled from "styled-components";
import MenuIcon from "@mui/icons-material/Menu";

export const HamburgerMenuButtonStyled = styled(MenuIcon)(() => ({
  "&&": {
    //Позиционирование
    display: "flex",
    alignContent: "center",
    justifyContent: "center",
    alignItems: "center",
    //Размеры
    width: "50px",
    height: "auto",
    //Типография
    color: "#fff",
  },
}));
