import { createGlobalStyle } from "styled-components";

const TextStyles = {
  fontFamily: "Play, sans-serif",
  color: "#fff",
  margin: "0",
  wordSpacing: "5px",
  letterSpacing: "2px",
  lineHeight: "30px",
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
    marginTop: "100px",
    fontFamily: "'Arial', sans-serif",
    backgroundColor: "#1F1F1F",
    color: "white",
    lineHeight: 1.6,
  },
  h1: { ...TextStyles, fontSize: "48px" },
  h2: { ...TextStyles, fontSize: "36px" },
  h3: { ...TextStyles, fontSize: "32px" },
  p: {
    ...TextStyles,
    fontSize: "24px",
    opacity: "0.7",
  },
  a: {
    ...TextStyles,
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
});
