//Packages
import React from "react";

//Components
import CustomCarousel from "../../Carousel/CustomCarousel/CustomCarousel";

//Styles
import {
  HomePageCarouselSlideContainer,
  HomePageStyled,
} from "./HomePage.styled";

const HomePage: React.FC = () => {
  return (
    <HomePageStyled>
      <CustomCarousel>
        <HomePageCarouselSlideContainer>
          <img
            src="https://wallpaper.forfun.com/fetch/d1/d1e459695aa9960a794bbadafaae10e3.jpeg"
            alt=""
          />
        </HomePageCarouselSlideContainer>
        <HomePageCarouselSlideContainer>
          <img
            src="https://avatars.mds.yandex.net/i?id=6b865a2893e7d32a661769d9721c9cbc_l-5694883-images-thumbs&n=13"
            alt=""
          />
        </HomePageCarouselSlideContainer>
        <HomePageCarouselSlideContainer>
          <img
            src="https://pic.rutubelist.ru/video/93/43/9343a3cd09d74365e93c69c1063d2c6d.jpg"
            alt=""
          />
        </HomePageCarouselSlideContainer>
        <HomePageCarouselSlideContainer>
          <img
            src="https://pic.rutubelist.ru/video/58/41/5841b272048111a21c6d4165f37d23c5.jpg"
            alt=""
          />
        </HomePageCarouselSlideContainer>
        <HomePageCarouselSlideContainer>
          <img
            src="https://avatars.mds.yandex.net/i?id=b400104e7db9acd4f38a047be77a9842_l-5236341-images-thumbs&n=13"
            alt=""
          />
        </HomePageCarouselSlideContainer>
      </CustomCarousel>
    </HomePageStyled>
  );
};

export default HomePage;
