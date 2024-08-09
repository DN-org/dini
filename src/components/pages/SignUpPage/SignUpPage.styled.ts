//Packages
import { IconButton, TextField } from "@mui/material";
import styled from "styled-components";

//Components
import CustomButton from "../../CustomButton/CustomButton";

export const SignUpPageStyled = styled("div")(() => ({
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
  //Фон и декор
  backgroundColor: "black",
  //Анимация и трансформация
  transform: "translate(-50%)",
}));

export const SignUpForm = styled("form")(() => ({
  //Позиционирование
  display: "grid",
  rowGap: "25px",
  textAlign: "center",
  //Размеры
  width: "500px",
  //Границы
  //Типография
  //Фон и декор
  //Анимация и трансформация
  h1: {
    padding: "25px",
  },
}));

export const SignUpInput = styled(TextField)(() => ({
  "& .MuiOutlinedInput-root": {
    height: "60px",
    fontFamily: "Play",
    color: "#fff",

    "& .MuiOutlinedInput-notchedOutline": {
      borderColor: "rgba(255, 255, 255, 0.5)",
      borderWidth: "1px",
      borderRadius: "15px",
      fontFamily: "Play",
    },

    "&.Mui-focused": {
      "& .MuiOutlinedInput-notchedOutline": {
        borderColor: "rgba(255, 255, 255, 1)",
        borderWidth: "2px",
        fontFamily: "Play",
      },
    },

    "&:hover:not(.Mui-focused)": {
      "& .MuiOutlinedInput-notchedOutline": {
        borderColor: "rgba(255, 255, 255, 0.8)",
        fontFamily: "Play",
      },
    },
  },

  "& .MuiInputLabel-outlined": {
    fontFamily: "Play",
    color: "#F1F1F1",
    "&.Mui-focused": {
      color: "#fff",
    },
    "&.Mui-error": {
      fontFamily: "Play",
      color: "#B00020",
    },
  },
  "& .MuiFormHelperText-root.Mui-error": {
    fontFamily: "Play",
    fontSize: "16px",
    color: "#B00020",
  },
}));

export const SignUpFormButton = styled(CustomButton)(() => ({
  height: "60px",
  "&&": {
    marginTop: "25px",
    borderRadius: "15px",
    fontSize: "22px",
  },
}));

export const PasswordToggleContainer = styled("div")(() => ({
  position: "relative",
  display: "flex",
  alignItems: "center",
}));

export const PasswordEyeIcon = styled(IconButton)(() => ({
  "&&": {
    color: "rgba(255, 255, 255, 0.7)",
  },
}));
