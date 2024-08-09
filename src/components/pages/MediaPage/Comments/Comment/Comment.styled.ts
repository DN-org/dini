import styled from "styled-components";

export const CommentStyled = styled("div")(() => ({
  backgroundColor: "rgba(255, 255, 255, .15)",
  display: "inline-block",
  flexDirection: "column",
  borderRadius: "10px",
  maxWidth: '100%',
  margin: '15px 0'
}));

export const CommentUserInfoContainer = styled("div")(() => ({
  display: "flex",
  width: "100%",
  height: "75px",
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  alignItems: "center",
  columnGap: "25px",
  padding: "25px",
}));

export const CommentUserInfoChildContainer = styled("div")(() => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
}));

export const CommentUserLogoContainer = styled("img")(() => ({
  width: "50px",
  height: "50px",
  borderRadius: "50%",
}));

export const CommentUserName = styled("p")(() => ({}));

export const CommentStarContainer = styled("div")(() => ({
  height: "25px",
}));

export const CommentText = styled("div")(() => ({
  padding: "25px 50px",
  p: {
    opacity: "1",
  },
}));
