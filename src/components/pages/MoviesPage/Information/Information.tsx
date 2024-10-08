import React from 'react';
import {
  InformationCont,
  FilmPostersCont,
  ButtonAddCategory,
  FilmInformationCont,
  NameFilm,
  RatingCont,
  Rating,
  StarCont,
  StarNumber,
  AnotherRatingCont,
  AnotherRating,
  AboutFilm,
  AboutFilmConts,
  RolesCont,
  SecondFilmInformationCont,
  DescriptionCont,
} from './Information.styled';
//SVG
import {
  SvgStar,
  SvgKinoPoisk,
  SvgIMDb,
  SvgFolder,
} from '../../../../images/SvgMoviesPage';

const Information: React.FC = () => {
  return (
    <InformationCont>
      <FilmPostersCont>
        <img src="https://avatars.mds.yandex.net/get-kinopoisk-image/10900341/39e6ff92-f2c0-4fd7-b2e3-9785890bd683/300x450" />
        <ButtonAddCategory>{SvgFolder} Добавить котегорию</ButtonAddCategory>
      </FilmPostersCont>

      <FilmInformationCont>
        <NameFilm>
          <h2>ТораДора!</h2>
          <h2>(сериал 2008 – 2009)</h2>
        </NameFilm>

        <RatingCont>
          <Rating>6.4</Rating>

          <StarCont>
            {SvgStar}
            <StarNumber>1</StarNumber>
          </StarCont>

          <AnotherRatingCont>
            <AnotherRating>
              {SvgKinoPoisk}
              <p>7.1</p>
            </AnotherRating>
            <AnotherRating>
              {SvgIMDb}
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
          <h2>В Главных ролях</h2>
        </RolesCont>
      </FilmInformationCont>

      <SecondFilmInformationCont>
        <DescriptionCont>
          <h3>Описание</h3>
          <p>
            Семнадцатилетний парень Рюдзи, которого все боятся из-за страшного
            взгляда, влюбляется в одноклассницу Минори, а его соседка Тайга
            влюбляется в Китамару. Они решают объединить свои усилия, но может
            быть они просто не в тех влюбились?
          </p>
        </DescriptionCont>
      </SecondFilmInformationCont>
    </InformationCont>
  );
};

export default Information;
