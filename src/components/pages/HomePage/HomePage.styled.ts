import styled from "styled-components";
import { CustomCarouselSlide } from "../../Carousel/CustomCarousel/CustomCarousel.styled";

export const HomePageStyled = styled("div")(() => ({}));

export const HomePageCarouselSlideContainer = styled(CustomCarouselSlide)(
  () => ({
    borderBottom: '1px solid rgba(255,255,255,.15)',
    img: {
      width: "1000px",
      height: "500px",
    },
  })
);

export const HomePageCarouselSlideContainer2 = styled(CustomCarouselSlide)(
  () => ({
    img: {
      width: "250px",
      height: "350px",
    },
  })
);
