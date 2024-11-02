import React from "react";
import {
  MediaCardStyled,
  MediaCardContent,
  MediaCardPoster,
  MediaCardNameContainer,
  MediaCardName,
  MediaCardDate,
} from "./MediaCard.styled";

const MediaCard: React.FC = () => {
  return (
    <MediaCardStyled>
      <MediaCardContent>
        <MediaCardPoster src="https://avatars.mds.yandex.net/get-kinopoisk-image/4716873/7492469c-da51-4d12-b8b2-1607d1942c8e/300x450"></MediaCardPoster>
        <MediaCardNameContainer>
          <MediaCardName>Название</MediaCardName>
          <MediaCardDate>(2000)</MediaCardDate>
        </MediaCardNameContainer>
      </MediaCardContent>
    </MediaCardStyled>
  );
};

export default MediaCard;
