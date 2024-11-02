import styled from "styled-components";

export const MediaCardStyled = styled("div")(() => ({
    border: "1px solid rgba(255, 255, 255, 0.15)",
    borderRadius: "15px",
    padding: "20px",
    display: "grid",
    gridTemplateColumns: "0.3fr 1fr", 
    width: "100%",
    height: "300px", 
    gap: "25px",
  }));
  

export const MediaCardPoster = styled("img")(() => ({
    border: "1px solid rgba(255, 255, 255, 0.15)",
    borderRadius: "15px",
    display: "flex",
    width: "180px",
    height: "100%",
    objectFit: "cover",
  }));
  

  export const MediaCardContainer = styled("div")(() => ({
    display: "flex",
    flexDirection: "column",
    justifyContent: "start",
    gap: "15px",
    height: "100%",
  }));
