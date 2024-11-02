//Packages
import Person2RoundedIcon from "@mui/icons-material/Person2Rounded";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const MiniProfileStyled = styled("div")(() => ({
  //Позиционирование
  padding: "0 5px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  columnGap: "10px",
  //Размеры
  width: "200px",
  height: "45px",
  //Границы
  borderRadius: "10px",
  //Фон и декор
  backgroundColor: "rgba(255, 255, 255, 0.05)",
}));

export const MiniProfileLogoContainerStyled = styled(Link)(() => ({
  //Позиционирование
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  //Размеры
  width: "30px",
  height: "30px",
  //Границы
  borderRadius: "50%",
  //Фон и декор
  backgroundColor: "#fff",
  //Анимация и трансформация
  cursor: "pointer",
}));

export const MiniProfileLogoIconStyled = styled(Person2RoundedIcon)(() => ({
  //Типография
  color: "#000",
}));

export const MiniProfileContainer = styled("div")(() => ({
  //Позиционирование
  display: "grid",
  gridTemplateColumns: "1fr",
  justifyContent: "center",
  alignItems: "center",
}));

export const MiniProfileNameLinkStyled = styled(Link)(() => ({
  //Размеры
  maxWidth: "150px",
  //Типография
  fontSize: "14px",
}));

export const MiniProfileExitLinkStyled = styled(Link)(() => ({
  //Размеры
  maxWidth: "150px",
  //Типография
  fontSize: "11px",
  fontWeight: "400",
  color: "rgba(255, 255, 255, 0.6)",
}));
