import React from "react";

//styles
import {
  InformationStyled,
  PosterPlusButtonContainer,
  PosterContainer,
  ButtonAddCategoryCont,
  ButtonAddCategoryText,
  InformationContainer,
  RatingContainer,
  Rating,
  RatingCount,
  StarCont,
  RatingChildContainer,
  AnotherRating,
  AboutStyled,
  AboutChildContainer,
  MainRolesContainer,
  CarouselCont,
  SvgContainer,
  ButtonAddCategoryStyled,
} from "./Information.styled";

//SVG
import CreateNewFolderOutlinedIcon from "@mui/icons-material/CreateNewFolderOutlined";

//components
import Carousel from "../../../Carousel/CarouselActors/CarouselActors";
import StarRating from "../../../StarRating/StarRating";
import SVGIMDb from "../../../../images/SVGIMDb";
import SVGKinopoisk from "../../../../images/SVGKinopoisk";

const Information: React.FC = () => {
  return (
    <InformationStyled>
      <PosterPlusButtonContainer>
        <PosterContainer>
          <img
            src="https://avatars.mds.yandex.net/get-kinopoisk-image/10900341/39e6ff92-f2c0-4fd7-b2e3-9785890bd683/300x450"
            alt=""
          />
        </PosterContainer>

        <ButtonAddCategoryCont>
          <ButtonAddCategoryStyled>
            <ButtonAddCategoryText>
              <CreateNewFolderOutlinedIcon />
              Добавить котегорию
            </ButtonAddCategoryText>
          </ButtonAddCategoryStyled>
        </ButtonAddCategoryCont>
      </PosterPlusButtonContainer>

      <InformationContainer>
        <h1>ТораДора! (сериал 2008)</h1>

        <RatingContainer>
          <div>
            <Rating>6.4</Rating>
            <RatingCount>1488 оценок</RatingCount>
          </div>

          <StarCont>
            <StarRating />
          </StarCont>

          <RatingChildContainer>
            <AnotherRating>
              <SvgContainer>
                <SVGIMDb />
              </SvgContainer>

              <p>7.1</p>
            </AnotherRating>
            <AnotherRating>
              <SvgContainer>
                <SVGKinopoisk />
              </SvgContainer>
              <p>6.8</p>
            </AnotherRating>
          </RatingChildContainer>
        </RatingContainer>

        <AboutStyled>
          <h3>О сериале</h3>

          <AboutChildContainer>
            <p>Год производства</p>
            <p>2008 (1 сезон)</p>
          </AboutChildContainer>

          <AboutChildContainer>
            <p>Страна</p>
            <p>Япония</p>
          </AboutChildContainer>

          <AboutChildContainer>
            <p>Жанр</p>
            <p>аниме, мультфильм, мелодрама, комедия</p>
          </AboutChildContainer>

          <AboutChildContainer>
            <p>Режиссер</p>
            <p>Тацуюки Нагаи, Кацуси Сакураби, Тору Исида, ...</p>
          </AboutChildContainer>

          <AboutChildContainer>
            <p>Сценарий</p>
            <p>Тацуто Хигути, Мари Окада, Дзюнко Окадзаки, ...</p>
          </AboutChildContainer>

          <AboutChildContainer>
            <p>Продюсер</p>
            <p>Синъити Икэда, Мунэюки Канбэ, Юдзи Мацукура, ...</p>
          </AboutChildContainer>

          <AboutChildContainer>
            <p>Возраст</p>
            <p>18+</p>
          </AboutChildContainer>

          <AboutChildContainer>
            <p>Рейтинг MPAA</p>
            <p>R</p>
          </AboutChildContainer>

          <AboutChildContainer>
            <p>Время серии</p>
            <p>25 мин</p>
          </AboutChildContainer>
        </AboutStyled>

        <MainRolesContainer>
          <h3>В главных ролях</h3>
          <CarouselCont>
            <Carousel />
          </CarouselCont>
        </MainRolesContainer>
      </InformationContainer>
    </InformationStyled>
  );
};

export default Information;
