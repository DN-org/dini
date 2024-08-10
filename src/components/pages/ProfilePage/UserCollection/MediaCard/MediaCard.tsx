import React from "react";
import {
  MediaCardContainer,
  MediaCardPoster,
  MediaCardStyled,
} from "./MediaCard.styled";
import StarRatingDisplay from "../../../../StarRatingDisplay/StarRatingDisplay";

const MediaCard: React.FC = () => {
  return (
    <MediaCardStyled>
      <MediaCardPoster src="https://avatars.mds.yandex.net/get-kinopoisk-image/4716873/7492469c-da51-4d12-b8b2-1607d1942c8e/300x450"></MediaCardPoster>
      <MediaCardContainer>
        <h2>Название</h2>
        <StarRatingDisplay value={5} fontSize={"3rem"} />
        <p>
          Lorem ipselit. Aliquir vel iste voluptatibus nesciunt, corporis
          deserunt earum quibusdam exercitationem voluptate sed omnis odio
          temporibus rem? Doloremque, ex!
        </p>
      </MediaCardContainer>
    </MediaCardStyled>
  );
};

export default MediaCard;
