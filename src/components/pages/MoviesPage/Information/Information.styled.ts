import styled from "styled-components";

export const InformationCont = styled("div")(() => ({
  display: "grid",
  gridTemplateColumns: "0.6fr 1fr",
  gridTemplateRows: "1fr 0.4fr",
}));

export const FilmPostersCont = styled("div")(() => ({
  gridArea: "1/1/2/2",
}));

export const FilmImgCont = styled("div")(() => ({
  width: "80%",
  margin: "auto",
  img: {
    width: "100%",
    borderRadius: "15px",
  },
}));

export const ButtonAddCategoryCont = styled("div")(() => ({
  display: "block",
  width: "390px",
  margin: "10px auto",
}));

export const ButtonAddCategoryText = styled("div")(() => ({
  display: "grid",
  gridTemplateColumns: "0.4fr 1fr",
  justifyItems: "center",
  alignItems: "center",
  gridColumnGap: "10px",
  div: {
    justifySelf: "end",
  },
  p: {
    justifySelf: "start",
  },
}));

export const FilmInformationCont = styled("div")(() => ({
  gridArea: "1/2/2/3",
}));

export const NameFilm = styled("div")(() => ({
  padding: "0 0 10px 0",
}));

export const RatingCont = styled("div")(() => ({
  display: "grid",
  gridTemplateColumns: "150px 1fr 0.2fr",
  alignItems: "center",

  width: "550px",
}));

export const Rating = styled("H2")(() => ({
  fontSize: "40px",
}));

export const RatingAll = styled("p")(() => ({}));

export const StarCont = styled("div")(() => ({
  display: "grid",
  gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr",
  width: "80%",
}));

export const AnotherRatingCont = styled("div")(() => ({}));

export const AnotherRating = styled("div")(() => ({
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  alignItems: "center",
}));

export const AboutFilm = styled("div")(() => ({
  padding: "0px 0 10px 0",

  h3: {
    padding: "5px 0",
  },
}));

export const AboutFilmConts = styled("div")(() => ({
  display: "grid",
  gridTemplateColumns: "0.3fr 1fr",
  padding: "2px 0",
}));

export const RolesCont = styled("div")(() => ({
  padding: "10px 0 0px",
}));

export const CarouselCont = styled("div")(() => ({
  padding: "10px 0 20px",
}));

export const SecondFilmInformationCont = styled("div")(() => ({
  gridArea: "2/1/3/3",
  padding: "0px 50px",
}));

export const DescriptionCont = styled("div")(() => ({
  h3: {
    padding: "15px 0",
  },
}));
