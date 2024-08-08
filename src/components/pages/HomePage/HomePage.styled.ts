import styled from "styled-components";
import { CustomCarouselSlide } from "../../Carousel/Carousel/CustomCarousel.styled";

export const HomePageStyled = styled("div")(() => ({}));

export const HomePageCarouselSlideContainer = styled(CustomCarouselSlide)(
  () => ({
    img: {
      width: "1000px",
      height: "500px",
    },
  })
);
