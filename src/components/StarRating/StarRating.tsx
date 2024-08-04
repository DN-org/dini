import React, { useState } from "react";
import { StarRatingStyled, StarCont, StarIcon } from "./StarRating.styled";

interface StarRatingProps {
  initialRating?: number;
  onRatingChange?: (rating: number) => void;
}

const StarRating: React.FC<StarRatingProps> = ({
  initialRating = 0,
  onRatingChange,
}) => {
  const [rating, setRating] = useState(initialRating);
  const [hover, setHover] = useState(0);

  const handleClick = (value: number) => {
    setRating(value);
    if (onRatingChange) {
      onRatingChange(value);
    }
  };

  const handleMouseEnter = (value: number) => {
    setHover(value);
  };

  const handleMouseLeave = () => {
    setHover(0);
  };

  return (
    <StarRatingStyled>
      {[1, 2, 3, 4, 5].map((star) => (
        <StarCont>
          <StarIcon
          key={star}
          $filled={star <= (hover || rating)}
          onClick={() => handleClick(star)}
          onMouseEnter={() => handleMouseEnter(star)}
          onMouseLeave={handleMouseLeave}
        >
          ★
        </StarIcon>
        </StarCont>
      ))}
    </StarRatingStyled>
  );
};

export default StarRating;
