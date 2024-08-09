import styled from "styled-components";
import ArrowUpwardRounded from "@mui/icons-material/ArrowUpwardRounded";

export const ScrollToTopButtonStyled = styled("div")(() => ({
  zIndex: "10",
  alignItems: "center",
  justifyContent: "center",
  position: "fixed",
  right: "50px",
  bottom: "150px",

  cursor: "pointer",
  backgroundColor: "rgba(0,0,0,0.5)",
  borderRadius: "50%",
  border: "1px solid rgba(255,255,255,0.05)",

  width: "100px",
  height: "100px",

  transition: "opacity 0.3s ease-in-out, visibility 0.5s ease-in-out",
}));

export const ScrollToTopButtonArrow = styled(ArrowUpwardRounded)(() => ({
  "&&": {
    textAlign: "center",
    fontSize: "70px",
    lineHeight: "70px",
  },
}));
