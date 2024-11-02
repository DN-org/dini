import React from 'react';
import Rating from '@mui/material/Rating';
import { styled } from '@mui/material/styles';

// Типы пропсов для нашего компонента
interface StarRatingDisplayProps {
  value: number; 
  fontSize: string;
}

// Стилизованный компонент Rating с использованием MUI styled
const StarRatingStyled = styled(Rating)<{ fontSize: string }>(({ fontSize }) => ({
  fontSize,
  '& .MuiRating-iconFilled': {
    color: 'gold',
  },
  '& .MuiRating-iconEmpty': {
    color: 'white',
  },
}));

// Компонент RatingDisplay
const StarRatingDisplay: React.FC<StarRatingDisplayProps> = ({ value, fontSize }) => {
  return (
    <StarRatingStyled
      value={value}
      readOnly
      precision={0.1} 
      fontSize={fontSize} 
      max={5}
    />
  );
};

export default StarRatingDisplay;
