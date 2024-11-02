//Packages
import Slider from "react-slick";

//Components
import {
  SvgArrowL,
  SvgArrowR,
} from "../../../images/SvgCarouselArrwos/SvgCarouselArrwos";

//Styles
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ArrowsR, ArrowsL, ContCarousel } from "./CarouselMovies.styled";

interface CarouselMoviesProps {
  children: React.ReactNode;
}

interface ArrowProps {
  onClick?: () => void;
}

const CustomNextArrow: React.FC<ArrowProps> = ({ onClick }) => (
  <ArrowsR type="button" onClick={onClick}>
    {SvgArrowR}
  </ArrowsR>
);

const CustomPrevArrow: React.FC<ArrowProps> = ({ onClick }) => (
  <ArrowsL type="button" onClick={onClick}>
    {SvgArrowL}
  </ArrowsL>
);

const CarouselMovies: React.FC<CarouselMoviesProps> = ({ children }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 4000,
    arrows: true,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
  };

  return (
    <ContCarousel>
      <Slider {...settings}>{children}</Slider>
    </ContCarousel>
  );
};

export default CarouselMovies;
