import styled from "styled-components";
import { styled as muiStyled } from "@mui/material/styles";
import { Typography } from "@mui/material";

export const StarRatingStyled = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

interface StarIconProps {
  $filled: boolean;
}

export const StarIcon = muiStyled(Typography)<StarIconProps>(
  ({ $filled, theme }) => ({
    fontSize: "2rem",
    cursor: "pointer",
    color: $filled ? "#FFD700" : "#B0B0B0",
    transition: "color 0.2s ease-in-out",
    "&:hover": {
      color: $filled ? "#FFC107" : "#FFD700",
    },
  })
);
