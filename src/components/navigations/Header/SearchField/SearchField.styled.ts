//Packages
import styled from "styled-components";
import { TextField } from "@mui/material";

export const SearchFieldStyled = styled(TextField)(() => ({
  //Позиционирование
  display: "block",
  alignSelf: "center",
  //Размеры
  width: "750px",

  "& .MuiInputBase-input": {
    //Размеры
    height: "10px",
    //Типография
    color: "white",
    "&::placeholder": {
      //Типография
      color: "white",
    },
  },

  "& .MuiOutlinedInput-root": {
    //Размеры
    display: 'flex',
    width: "100%",
    //Границы
    borderRadius: "8px",
    //Фон и декор
    background: "rgba(255,255,255,0.05)",

    "& fieldset": {
      //Границы
      borderColor: "transparent",
    },
    "&:hover fieldset": {
      //Границы
      borderColor: "rgba(255,255,255,0.5)",
      //Фон и декор
      background: "rgba(255,255,255,0.1)",
    },
    "&.Mui-focused fieldset": {
      //Границы
      borderColor: "rgba(255,255,255,0.5)",
      //Фон и декор
      background: "rgba(255,255,255,0.1)",
    },
  },

  "& .MuiInputAdornment-root": {
    //Позиционирование
    marginRight: "0",
    //Типография
    color: "white",
  },
}));
