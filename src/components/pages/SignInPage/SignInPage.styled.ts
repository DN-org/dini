//Packages
import { IconButton, TextField } from "@mui/material";
import styled from "styled-components";

//Components
import CustomButton from "../../CustomButton/CustomButton";

export const SignInPageStyled = styled("div")(() => ({
  //Позиционирование
  marginLeft: "50%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  //Размеры
  width: "100%",
  height: "80vh",
  minWidth: "1280px",
  minHeight: "720px",
  //Границы
  //Типография
  //Фон и декор
  backgroundColor: "black",
  //Анимация и трансформация
  transform: "translate(-50%)",
}));

export const SignInForm = styled("form")(() => ({
  //Позиционирование
  display: "grid",
  rowGap: "25px",
  //Размеры
  width: "500px",
  //Типография
  textAlign: "center",
  //Фон и декор
  h1: {
    padding: "25px",
  },
}));

export const SignInInput = styled(TextField)(() => ({
  "& .MuiOutlinedInput-root": {
    color: "#fff",
    fontFamily: "Play",
    height: "60px",
    "& .MuiOutlinedInput-notchedOutline": {
      fontFamily: "Play",
      borderColor: "rgba(255, 255, 255, 0.5)",
      borderWidth: "1px",
      borderRadius: "15px",
    },

    "&.Mui-focused": {
      "& .MuiOutlinedInput-notchedOutline": {
        fontFamily: "Play",
        borderColor: "rgba(255, 255, 255, 1)",
        borderWidth: "2px",
      },
    },

    "&:hover:not(.Mui-focused)": {
      "& .MuiOutlinedInput-notchedOutline": {
        fontFamily: "Play",
        borderColor: "rgba(255, 255, 255, 0.8)",
      },
    },
  },

  "& .MuiInputLabel-outlined": {
    fontFamily: "Play",
    color: "#F1F1F1",
    "&.Mui-focused": {
      color: "#fff",
    },
  },
}));

export const SignInFormButton = styled(CustomButton)(() => ({
  height: "60px",
  "&&": {
    borderRadius: "15px",
    marginTop: "25px",
    fontSize: "22px",
  },
}));

export const PasswordToggleContainer = styled("div")(() => ({
  display: "flex",
  alignItems: "center",
  position: "relative",
}));

export const PasswordEyeIcon = styled(IconButton)(() => ({
  "&&": {
    color: "rgba(255, 255, 255, 0.7)",
  },
}));
