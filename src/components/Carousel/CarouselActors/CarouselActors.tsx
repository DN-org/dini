import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { ArrowsR, ArrowsL, ContCarousel, ImgCont } from "./CarouselActors.styled";

const SvgArrowL = (
  <svg
    stroke="currentColor"
    fill="currentColor"
    strokeWidth="0"
    viewBox="0 0 512 512"
    height="40px"
    width="25px"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M217.9 256L345 129c9.4-9.4 9.4-24.6 0-33.9-9.4-9.4-24.6-9.3-34 0L167 239c-9.1 9.1-9.3 23.7-.7 33.1L310.9 417c4.7 4.7 10.9 7 17 7s12.3-2.3 17-7c9.4-9.4 9.4-24.6 0-33.9L217.9 256z"></path>
  </svg>
);

const SvgArrowR = (
  <svg
    stroke="currentColor"
    fill="currentColor"
    strokeWidth="0"
    viewBox="0 0 512 512"
    height="40px"
    width="25px"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M294.1 256L167 129c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.3 34 0L345 239c9.1 9.1 9.3 23.7.7 33.1L201.1 417c-4.7 4.7-10.9 7-17 7s-12.3-2.3-17-7c-9.4-9.4-9.4-24.6 0-33.9l127-127.1z"></path>
  </svg>
);

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

const Carousel: React.FC = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 4000,
    arrows: true,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
  };

  return (
    <ContCarousel>
    <Slider {...settings}>
    <ImgCont>
      <img src='https://avatars.mds.yandex.net/get-kinopoisk-image/6201401/5175aeb9-4233-422d-a11c-564d648fcf69/1920x'/>
      <p>Эри Китамура</p>
    </ImgCont>

    <ImgCont>
      <img src='https://avatars.mds.yandex.net/get-kinopoisk-image/1599028/d7fe1f56-bc80-4ba5-afce-feb6801cb50b/280x420'/>
      <p>Эри Китамура</p>
    </ImgCont>

    <ImgCont>
      <img src='https://avatars.mds.yandex.net/get-kinopoisk-image/1599028/01087549-93e7-4241-9aa6-c6c641ed50ad/280x420'/>
      <p>Эри Китамура</p>
    </ImgCont>

    <ImgCont>
      <img src='https://avatars.mds.yandex.net/get-kinopoisk-image/4486362/2803f0eb-722c-449b-b144-47231928e63c/280x420'/>
      <p>Эри Китамура</p>
    </ImgCont>

    <ImgCont>
      <img src='https://avatars.mds.yandex.net/get-kinopoisk-image/4303601/02d6aeb1-bf18-4774-aa63-cb8ecab02983/280x420'/>
      <p>Эри Китамура</p>
    </ImgCont>

    </Slider>
    </ContCarousel>
  );
};

export default Carousel;
