import React from "react";

//styles
import {
  InformationCont,
  FilmPostersCont,
  FilmImgCont,
  ButtonAddCategoryCont,
  ButtonAddCategoryText,
  FilmInformationCont,
  NameFilm,
  RatingCont,
  Rating,
  RatingAll,
  StarCont,
  AnotherRatingCont,
  AnotherRating,
  AboutFilm,
  AboutFilmConts,
  RolesCont,
  SecondFilmInformationCont,
  DescriptionCont,
  CarouselCont,
  SvgCont,
} from "./Information.styled";

//SVG


//components
import Carousel from "../../../Carousel/CarouselActors/CarouselActors";
import StarRating from "../../../StarRating/StarRating";
import CustomButton from "../../../CustomButton/CustomButton";
import SVG_IMDb from "../../../../images/SVGIMDb";
import SVGIMDb from "../../../../images/SVGIMDb";
import SVGKinopoisk from "../../../../images/SVGKinopoisk";


const Information: React.FC = () => {
  return (
    <InformationCont>
      <FilmPostersCont>
        <FilmImgCont>
          <img
            src="https://avatars.mds.yandex.net/get-kinopoisk-image/10900341/39e6ff92-f2c0-4fd7-b2e3-9785890bd683/300x450"
            alt=""
          />
        </FilmImgCont>

        <ButtonAddCategoryCont>
          <CustomButton>
            <ButtonAddCategoryText>
              {/* {SvgFolder} */}
              <p>Добавить котегорию</p>
            </ButtonAddCategoryText>
          </CustomButton>
        </ButtonAddCategoryCont>
      </FilmPostersCont>

      <FilmInformationCont>
        <NameFilm>
          <h2>ТораДора! (сериал 2008)</h2>
        </NameFilm>

        <RatingCont>
          <div>
            <Rating>6.4</Rating>
            <RatingAll>1488 оценок</RatingAll>
          </div>

          <StarCont>
            <StarRating />
          </StarCont>

          <AnotherRatingCont>
            <AnotherRating>
              <SvgCont><SVGIMDb/></SvgCont>

              <p>7.1</p>
            </AnotherRating>
            <AnotherRating>
              <SvgCont>
                <SVGKinopoisk/>
              </SvgCont>
              <p>6.8</p>
            </AnotherRating>
          </AnotherRatingCont>
        </RatingCont>

        <AboutFilm>
          <h3>О сериале</h3>

          <AboutFilmConts>
            <p>Год производства</p>
            <p>2008 (1 сезон)</p>
          </AboutFilmConts>

          <AboutFilmConts>
            <p>Страна</p>
            <p>Япония</p>
          </AboutFilmConts>

          <AboutFilmConts>
            <p>Жанр</p>
            <p>аниме, мультфильм, мелодрама, комедия</p>
          </AboutFilmConts>

          <AboutFilmConts>
            <p>Режиссер</p>
            <p>Тацуюки Нагаи, Кацуси Сакураби, Тору Исида, ...</p>
          </AboutFilmConts>

          <AboutFilmConts>
            <p>Сценарий</p>
            <p>Тацуто Хигути, Мари Окада, Дзюнко Окадзаки, ...</p>
          </AboutFilmConts>

          <AboutFilmConts>
            <p>Продюсер</p>
            <p>Синъити Икэда, Мунэюки Канбэ, Юдзи Мацукура, ...</p>
          </AboutFilmConts>

          <AboutFilmConts>
            <p>Возраст</p>
            <p>18+</p>
          </AboutFilmConts>

          <AboutFilmConts>
            <p>Рейтинг MPAA</p>
            <p>R</p>
          </AboutFilmConts>

          <AboutFilmConts>
            <p>Время серии</p>
            <p>25 мин</p>
          </AboutFilmConts>
        </AboutFilm>

        <RolesCont>
          <h3>В главных ролях</h3>
          <CarouselCont>
            <Carousel />
          </CarouselCont>
        </RolesCont>
      </FilmInformationCont>

      <SecondFilmInformationCont>
        <DescriptionCont>
          <h3>Описание</h3>
          <p>
            Доктор Райан Стоун, блестящий специалист в области медицинского
            инжиниринга, отправляется в свою первую космическую миссию под
            командованием ветерана астронавтики Мэтта Ковальски, для которого
            этот полет - последний перед отставкой. Но во время, казалось бы,
            рутинной работы за бортом случается катастрофа. Шаттл уничтожен, а
            Стоун и Ковальски остаются совершенно одни; они находятся в связке
            друг с другом, и все, что они могут, - это двигаться по орбите в
            абсолютно черном пространстве без всякой связи с Землей и какой-либо
            надежды на спасение.
          </p>
        </DescriptionCont>
      </SecondFilmInformationCont>
    </InformationCont>
  );
};

export default Information;
