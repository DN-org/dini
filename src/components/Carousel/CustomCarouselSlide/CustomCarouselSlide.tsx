import React from "react";
import { CustomCarouselSlideStyled } from "./CustomCarouselSlide.styled";

const CustomCarouselSlide: React.FC<{ children: React.ReactNode }> = ({ children }) => {  return (
    <CustomCarouselSlideStyled className="swiper-slide">
        {children}
    </CustomCarouselSlideStyled>
  );
};

export default CustomCarouselSlide;
