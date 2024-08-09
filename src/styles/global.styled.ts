import { createGlobalStyle } from "styled-components";

const TextStyles = {
  fontFamily: "Play, sans-serif",
  fontWeight: "600",
  color: "#fff",
  margin: "0",
  wordSpacing: "5px",
  letterSpacing: "2px",
};

export const GlobalStyles = createGlobalStyle({
  "*": {
    boxSizing: "border-box",
    margin: 0,
    padding: 0,
  },
  "*::before": {
    boxSizing: "border-box",
  },
  "*::after": {
    boxSizing: "border-box",
  },
  body: {
    fontFamily: "Play, sans-serif",
    marginTop: "100px",
    backgroundColor: "#1F1F1F",
    color: "white",
    lineHeight: 1.6,
  },
  h1: { ...TextStyles, fontSize: "45px", lineHeight: "40px" },
  h2: { ...TextStyles, fontSize: "32px", lineHeight: "40px" },
  h3: { ...TextStyles, fontSize: "24px", lineHeight: "32px" },
  h4: { ...TextStyles, fontSize: "16px", lineHeight: "20px", opacity: "0.9" },
  p: {
    ...TextStyles,
    fontSize: "16px",
    lineHeight: "20px",
    fontWeight: "400",
    opacity: "0.7",
  },
  a: {
    ...TextStyles,
    textDecoration: "none",
  },
  button: {
    ...TextStyles,
  },
  input: {
    ...TextStyles,
  },
  "::placeholder": {
    ...TextStyles,
  },
  "::-webkit-scrollbar": {
    width: "12px", // Ширина скроллбара
  },
  "::-webkit-scrollbar-track": {
    background: "#333", // Цвет фона скроллбара
  },
  "::-webkit-scrollbar-thumb": {
    backgroundColor: "#888", // Цвет ползунка
    borderRadius: "6px", // Скругление углов ползунка
    border: "2px solid #555", // Рамка вокруг ползунка
  },
  "::-webkit-scrollbar-thumb:hover": {
    backgroundColor: "#555", // Цвет ползунка при наведении
  },
});
