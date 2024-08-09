import styled from 'styled-components';
import { SwiperSlide } from 'swiper/react';

import ArrowBackIosNewRoundedIcon from '@mui/icons-material/ArrowBackIosNewRounded';
import { Button } from '@mui/material';

export const CustomCarouselContainer = styled("div")(() => ({
  width: "100%",
  position: "relative",
  padding: "20px 0",
}));

export const CustomCarouselSlide = styled(SwiperSlide)`
  display: flex;
  justify-content: center;
  align-items: center;
  transition: opacity 0.3s ease;

  /* Устанавливаем прозрачность для всех слайдов */
  opacity: 0;

  /* Активный слайд выделяется */
  &.swiper-slide-active {
    opacity: 1;
  }

  /* Соседние слайды немного тусклее */
  &.swiper-slide-next,
  &.swiper-slide-prev {
    opacity: 0.3;
  }
  
  .swiper-pagination-bullet {
    background-color: red; /* Измените на нужный цвет */
  }

  .swiper-pagination-bullet-active {
    background-color: green; /* Цвет активной пагинации */
  }
`;

export const CustomCarouselButton = styled(Button)(() => ({
  "&&": {
    position: "absolute",
    top: "50%",
    transform: "translateY(-50%)",
    zIndex: 10,
    color: "white",
    border: "1px solid rgba(255, 255, 255, 0.2)",
    borderRadius: "50%",
    width: "100px",
    height: "100px",
    cursor: "pointer",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backdropFilter: "saturate(80%)",
    transition: ".2s",
    background: "rgba(255, 255, 255, 0.05)",
    "&.prev": {
      left: "150px", // Исправлена позиция кнопки
    },

    "&.next": {
      right: "150px", // Исправлена позиция кнопки
    },

    "&:hover": {
      background: "rgba(255, 255, 255, 0.05)",
      border: "1px solid rgba(255, 255, 255, 0.5)",
      "*": {
        fontSize: "60px",
        transition: ".2s"
      },
    },
  },
}));

export const CustomCarouselButtonArrow = styled(ArrowBackIosNewRoundedIcon)(
  () => ({
    "&&": {
      fontSize: "50px",
      "&.rarrow": {
        transform: "rotate(180deg)",
      },
    },
  })
);
