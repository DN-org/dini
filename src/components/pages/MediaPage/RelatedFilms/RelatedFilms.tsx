//Packages
import React from "react";

//Components
import CarouselMovies from "../../../Carousel/CarouselMovies/CarouselMovies";

//Styles
import { ImgContainer, RelatedFilmsContainer } from "./RelatedFilms.styled";

const RelatedFilms: React.FC = () => {
  return (
    <RelatedFilmsContainer>
      <h3>Связанное</h3>
      <CarouselMovies>
        <ImgContainer>
          <img
            src="https://avatars.mds.yandex.net/get-kinopoisk-image/10900341/39e6ff92-f2c0-4fd7-b2e3-9785890bd683/300x450"
            alt=""
          />
        </ImgContainer>

        <ImgContainer>
          <img
            src="https://avatars.mds.yandex.net/get-kinopoisk-image/10900341/39e6ff92-f2c0-4fd7-b2e3-9785890bd683/300x450"
            alt=""
          />
        </ImgContainer>
        <ImgContainer>
          <img
            src="https://avatars.mds.yandex.net/get-kinopoisk-image/10900341/39e6ff92-f2c0-4fd7-b2e3-9785890bd683/300x450"
            alt=""
          />
        </ImgContainer>
        <ImgContainer>
          <img
            src="https://avatars.mds.yandex.net/get-kinopoisk-image/10900341/39e6ff92-f2c0-4fd7-b2e3-9785890bd683/300x450"
            alt=""
          />
        </ImgContainer>
        <ImgContainer>
          <img
            src="https://avatars.mds.yandex.net/get-kinopoisk-image/10900341/39e6ff92-f2c0-4fd7-b2e3-9785890bd683/300x450"
            alt=""
          />
        </ImgContainer>
        <ImgContainer>
          <img
            src="https://avatars.mds.yandex.net/get-kinopoisk-image/10900341/39e6ff92-f2c0-4fd7-b2e3-9785890bd683/300x450"
            alt=""
          />
        </ImgContainer>
        <ImgContainer>
          <img
            src="https://avatars.mds.yandex.net/get-kinopoisk-image/10900341/39e6ff92-f2c0-4fd7-b2e3-9785890bd683/300x450"
            alt=""
          />
        </ImgContainer>
      </CarouselMovies>
    </RelatedFilmsContainer>
  );
};

export default RelatedFilms;
