import { Button } from "@mui/material";
import styled from "styled-components";

// Определение стилизованной кнопки
export const CustomButtonStyled = styled(Button)(() => ({
  "&&": {
    background: "rgba(255, 255, 255, 0.05)",
    border: "0px",
    borderRadius: '50px',
    color: "#fff",
    textTransform: 'none',
    lineHeight: '20px',
    fontSize: '16px',
    padding: '15px 50px',
    fontWeight: 'bold',
    
    "&:hover": {
      border: "0px solid rgba(255, 255, 255, 0.5)",
      background: "rgba(255, 255, 255, 0.05)",
      color: "#fff",
    },
  },
}));
