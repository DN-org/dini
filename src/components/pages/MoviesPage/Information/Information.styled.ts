import styled from "styled-components";
import CustomButton from "../../../CustomButton/CustomButton";

export const InformationStyled = styled("div")(() => ({
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  padding: '0 50px',
  columnGap: '50px',
}));

export const PosterPlusButtonContainer = styled("div")(() => ({
  display: 'flex',
  flexDirection: 'column',  
  rowGap: '50px',
}));

export const PosterContainer = styled("div")(() => ({
  img:{
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
    border: '1px solid rgba(255, 255, 255, .15)',
    borderRadius: '25px',
  }
}));

export const ButtonAddCategoryCont = styled("div")(() => ({
  display: "flex",
  justifyContent: 'center',
}));

export const ButtonAddCategoryStyled = styled(CustomButton)(() => ({
  display: 'flex',
  width: '100%',
  height: 'auto'
}));

export const ButtonAddCategoryText = styled("p")(() => ({
  display: "grid",
  gridTemplateColumns: "0.1fr 1fr",
  columnGap: '5px',
  justifyItems: "center",
  alignItems: "center",
  div: {
    justifySelf: "end",
  },
  p: {
    justifySelf: "start",
  },
}));

export const InformationContainer = styled("div")(() => ({
  display: 'grid',
  rowGap: '25px',
}));

export const RatingContainer = styled("div")(() => ({
  display: "grid",
  gridTemplateColumns: "150px 1fr 0.2fr",
  alignItems: "center",

  width: "550px",
}));

export const Rating = styled("H2")(() => ({
  fontSize: "40px",
}));

export const RatingCount = styled("p")(() => ({}));

export const StarCont = styled("div")(() => ({
  display: "grid",
  gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr",
  width: "80%",
}));

export const SvgContainer = styled("div")(() => ({
  display: 'flex',  
  justifyContent: 'center',
  alignContent: 'center',
  alignItems: 'center',

  height: '25px',
  width: '25px',
}));

export const RatingChildContainer = styled("div")(() => ({
  display: 'grid',
  alignContent: 'center',
  rowGap: '5px',
}));

export const AnotherRating = styled("div")(() => ({
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  justifyContent: 'center',
  alignItems: 'center',
}));

export const AboutStyled = styled("div")(() => ({
  display: 'grid',
  gridTemplateRows: 'repeat(auto, 1fr)',
  rowGap: '15px',
}));

export const AboutChildContainer = styled("div")(() => ({
  display: "grid",
  gridTemplateColumns: "0.3fr 1fr",
}));

export const MainRolesContainer = styled("div")(() => ({
  display: 'grid',
  rowGap: '25px'
}));

export const CarouselCont = styled("div")(() => ({
  
}));

export const DescriptionStyled = styled("div")(() => ({
  display: 'grid',
  gridTemplateRows: 'auto auto',
  padding: '50px',
  minWidth: '1280px',
  rowGap: '25px'
}));

