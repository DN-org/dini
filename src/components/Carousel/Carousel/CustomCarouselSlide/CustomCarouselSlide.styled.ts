import styled from "styled-components";
import { SwiperSlide } from "swiper/react";

export const CustomCarouselSlideStyled = styled(SwiperSlide)(() => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  transition: "opacity 0.3s ease",
  opacity: 0,

  "&:swiper-slide-active": {
    opacity: 1,
  },

  "&:swiper-slide-next, &:swiper-slide-prev": {
    opacity: 0.3,
  },
}));
