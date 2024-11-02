import styled from "styled-components";
import { SwiperSlide } from "swiper/react";

export const CustomCarouselSlideStyled = styled(SwiperSlide)(() => ({
  //Позиционирование
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  //Фон и декор
  opacity: 0,
  //Анимация и трансформация
  transition: "opacity 0.3s ease",

  "&:swiper-slide-active": {
    //Фон и декор
    opacity: 1,
  },

  "&:swiper-slide-next, &:swiper-slide-prev": {
    //Фон и декор
    opacity: 0.3,
  },
}));
