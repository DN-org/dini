import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import {
  SvgArrowL,
  SvgArrowR,
} from "../../../images/SvgCarouselArrwos/SvgCarouselArrwos";

import {
  ArrowsR,
  ArrowsL,
  ContCarousel,
  ImgCont,
} from "./CarouselActors.styled";

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


const CarouselActors: React.FC = () => {
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
          <img
            src="https://avatars.mds.yandex.net/get-kinopoisk-image/6201401/5175aeb9-4233-422d-a11c-564d648fcf69/1920x"
            alt=""
          />
          <p>Эри Китамура</p>
        </ImgCont>

        <ImgCont>
          <img
            src="https://avatars.mds.yandex.net/get-kinopoisk-image/1599028/d7fe1f56-bc80-4ba5-afce-feb6801cb50b/280x420"
            alt=""
          />
          <p>Эри Китамура</p>
        </ImgCont>

        <ImgCont>
          <img
            src="https://avatars.mds.yandex.net/get-kinopoisk-image/1599028/01087549-93e7-4241-9aa6-c6c641ed50ad/280x420"
            alt=""
          />
          <p>Эри Китамура</p>
        </ImgCont>

        <ImgCont>
          <img
            src="https://avatars.mds.yandex.net/get-kinopoisk-image/4486362/2803f0eb-722c-449b-b144-47231928e63c/280x420"
            alt=""
          />
          <p>Эри Китамура</p>
        </ImgCont>

        <ImgCont>
          <img
            src="https://avatars.mds.yandex.net/get-kinopoisk-image/4303601/02d6aeb1-bf18-4774-aa63-cb8ecab02983/280x420"
            alt=""
          />
          <p>Эри Китамура</p>
        </ImgCont>
      </Slider>
    </ContCarousel>
  );
};

export default CarouselActors;
