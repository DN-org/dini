import { styled } from "@mui/system";
import { TextField } from "@mui/material";

export const SearchFieldStyled = styled(TextField)(() => ({
  display: "flex",
  alignSelf: "center",
  width: "100%",
  maxWidth: "400px",

  "& .MuiInputBase-input": {
    height: "10px",
    color: 'white',
    "&::placeholder": {
      color: "white", // Цвет placeholder
    },
  },

  "& .MuiOutlinedInput-root": {
    width: "350px",
    borderRadius: "8px",
    background: "rgba(255,255,255,0.15)",

    "& fieldset": {
      borderColor: "transparent", // Цвет рамки по умолчанию
    },
    "&:hover fieldset": {
      borderColor: "rgba(255,255,255,0.5)", // Цвет рамки при наведении
    },
    "&.Mui-focused fieldset": {
      borderColor: "rgba(255,255,255,0.5)", // Цвет рамки при фокусе
    },
  },

  "& .MuiInputAdornment-root": {
    marginRight: "0",
    color: "white",
  },
}));
