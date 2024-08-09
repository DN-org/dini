//Packages
import React, { useState } from "react";

//Styles
import {
  AboutChildContainer,
  AboutStyled,
  AnotherRating,
  ButtonAddCategoryCont,
  ButtonAddCategoryStyled,
  ButtonAddCategoryText,
  CarouselCont,
  DescriptionStyled,
  InformationContainer,
  InformationStyled,
  MainRolesContainer,
  PosterContainer,
  PosterPlusButtonContainer,
  Rating,
  RatingChildContainer,
  RatingContainer,
  RatingCount,
  StarCont,
  SvgContainer,
} from "./Information.styled";

//Components
import SVGIMDb from "../../../../images/SVGIMDb";
import SVGKinopoisk from "../../../../images/SVGKinopoisk";
import CarouselActors from "../../../Carousel/CarouselActors/CarouselActors";
import RatingDisplay from "../../../StarRatingDisplay/StarRatingDisplay";

//SVG
import CreateNewFolderOutlinedIcon from "@mui/icons-material/CreateNewFolderOutlined";


const Information: React.FC = () => {
  const [modalActive, setModalActive] = useState(false);
  return (
    <div>
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
                Добавить в категорию
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
              <RatingDisplay value={4.3} fontSize={"70px"}></RatingDisplay>
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
              <CarouselActors />
            </CarouselCont>
          </MainRolesContainer>
        </InformationContainer>
      </InformationStyled>
      <DescriptionStyled>
        <h3>Описание</h3>
        <p>
          Доктор Райан Стоун, блестящий специалист в области медицинского
          инжиниринга, отправляется в свою первую космическую миссию под
          командованием ветерана астронавтики Мэтта Ковальски, для которого этот
          полет - последний перед отставкой. Но во время, казалось бы, рутинной
          работы за бортом случается катастрофа. Шаттл уничтожен, а Стоун и
          Ковальски остаются совершенно одни; они находятся в связке друг с
          другом, и все, что они могут, - это двигаться по орбите в абсолютно
          черном пространстве без всякой связи с Землей и какой-либо надежды на
          спасение.
        </p>
      </DescriptionStyled>
    </div>
  );
};

export default Information;
