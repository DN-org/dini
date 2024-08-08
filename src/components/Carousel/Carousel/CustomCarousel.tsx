import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "swiper/css/pagination";

import React, { useRef } from "react";
import { Swiper as SwiperType } from "swiper";
import {
  Autoplay,
  EffectCoverflow,
  Keyboard,
  Mousewheel,
  Navigation,
  Pagination,
} from "swiper/modules";
import { Swiper } from "swiper/react";

import {
  CustomCarouselButton,
  CustomCarouselButtonArrow,
  CustomCarouselContainer,
} from "./CustomCarousel.styled";

interface CustomCarouselProps {
  children: React.ReactNode;
}

const CustomCarousel: React.FC<CustomCarouselProps> = ({
  children,
  ...rest
}) => {
  const swiperRef = useRef<SwiperType | null>(null); // Используем SwiperType для рефа

  return (
    <CustomCarouselContainer>
      <Swiper
        onSwiper={(swiper: SwiperType) => (swiperRef.current = swiper)} // Типизируем параметр
        modules={[
          Autoplay,
          EffectCoverflow,
          Keyboard,
          Mousewheel,
          Navigation,
          Pagination,
        ]}
        spaceBetween={0}
        slidesPerView={3}
        slidesPerGroup={1}
        loop={true}
        effect="coverflow"
        coverflowEffect={{
          rotate: 30,
          depth: 200,
          stretch: 30,
          modifier: 1,
          scale: 1,
        }}
        centeredSlides={true}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        keyboard={{ enabled: true }}
        pagination={{
          clickable: true,
          bulletClass: "swiper-pagination-bullet",
          bulletActiveClass: "swiper-pagination-bullet-active",
          renderBullet: (index: number, className: string) =>
            `<span class="${className}" style="background-color: ${
              index === swiperRef.current?.realIndex
                ? "rgba(255, 255, 255, 0.15)"
                : "white"
            };"></span>`,
        }}
        navigation={false} // Если не используете встроенные кнопки Swiper
        className="custom-swiper"
      >
        {children}
      </Swiper>

      <CustomCarouselButton
        className="prev"
        onClick={() => swiperRef.current?.slidePrev()} // Проверяем, что swiperRef.current не равен null
      >
        <CustomCarouselButtonArrow />
      </CustomCarouselButton>
      <CustomCarouselButton
        className="next"
        onClick={() => swiperRef.current?.slideNext()} // Проверяем, что swiperRef.current не равен null
      >
        <CustomCarouselButtonArrow className="rarrow" />
      </CustomCarouselButton>
    </CustomCarouselContainer>
  );
};

export default CustomCarousel;
