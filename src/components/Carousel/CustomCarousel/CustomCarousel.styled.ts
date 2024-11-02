//Packages
import styled from "styled-components";
import { SwiperSlide } from "swiper/react";
import ArrowBackIosNewRoundedIcon from "@mui/icons-material/ArrowBackIosNewRounded";
import { Button } from "@mui/material";

export const CustomCarouselContainer = styled("div")(() => ({
  //Позиционирование
  position: "relative",
  padding: "20px 0",
  //Размеры
  width: "100%",
}));

export const CustomCarouselSlide = styled(SwiperSlide)`
  //Позиционирование
  display: flex;
  justify-content: center;
  align-items: center;
  //Фон и декор
  opacity: 0;
  //Анимация и трансформация
  transition: opacity 0.3s ease;

  /* Активный слайд*/
  &.swiper-slide-active {
    //Фон и декор
    opacity: 1;
  }

  /* Соседние слайды*/
  &.swiper-slide-next,
  &.swiper-slide-prev {
    //Фон и декор
    opacity: 0.3;
  }

  .swiper-pagination-bullet {
    //Фон и декор
    background-color: red;
  }

  .swiper-pagination-bullet-active {
    //Фон и декор
    background-color: green;
  }
`;

export const CustomCarouselButton = styled(Button)(() => ({
  "&&": {
    //Позиционирование
    position: "absolute",
    top: "50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 10,
    //Размеры
    width: "100px",
    height: "100px",
    //Границы
    border: "1px",
    borderColor: "rgba(255, 255, 255, 0.2)",
    borderRadius: "50%",
    //Типография
    color: "white",
    //Фон и декор
    background: "rgba(255, 255, 255, 0.05)",
    backdropFilter: "saturate(80%)",
    //Анимация и трансформация
    transform: "translateY(-50%)",
    cursor: "pointer",
    transition: ".2s",

    "&.prev": {
      //Позиционирование
      left: "150px",
    },

    "&.next": {
      //Позиционирование
      right: "150px",
    },

    "&:hover": {
      //Границы
      border: "1px",
      borderColor: "rgba(255, 255, 255, 0.5)",
      //Фон и декор
      background: "rgba(255, 255, 255, 0.05)",
      "*": {
        //Типография
        fontSize: "60px",
        //Анимация и трансформация
        transition: ".2s",
      },
    },
  },
}));

export const CustomCarouselButtonArrow = styled(ArrowBackIosNewRoundedIcon)(
  () => ({
    "&&": {
      //Типография
      fontSize: "50px",
      "&.rarrow": {
        //Анимация и трансформация
        transform: "rotate(180deg)",
      },
    },
  })
);
