import styled from "styled-components";
import { styled as muiStyled } from "@mui/material/styles";
import { Typography } from "@mui/material";

export const StarRatingStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(5,1fr);

`;

export const StarCont = styled.div`
  display: grid;
  p{
    text-align: center;
  }
`;
interface StarIconProps {
  $filled: boolean;
}

export const StarIcon = muiStyled(Typography)<StarIconProps>(
  ({ $filled, theme }) => ({
    userSelect: 'none',
    fontSize: "70px",
    cursor: "pointer",
    color: $filled ? "#FFD700" : "#B0B0B0",
    transition: "color 0.2s ease-in-out",
    "&:hover": {
      color: $filled ? "#FFC107" : "#FFD700",
    },
  })
);
