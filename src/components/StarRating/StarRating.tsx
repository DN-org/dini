import React, { useState } from 'react';
import Rating from '@mui/material/Rating';
import { styled } from '@mui/material/styles';

// Типы пропсов для нашего компонента
interface StarRatingProps {
  initialValue?: number; // Начальная оценка, необязательное свойство
  fontSize: string;
  onChange: (newValue: number | null) => void; // Функция обратного вызова для изменения оценки
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

// Компонент Rating
const StarRating: React.FC<StarRatingProps> = ({ initialValue = 0, fontSize, onChange }) => {
  const [value, setValue] = useState<number | null>(initialValue);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number | null) => {
    setValue(newValue);
    onChange(newValue);
  };

  return (
    <StarRatingStyled
      value={value}
      onChange={handleChange}
      precision={1} 
      fontSize={fontSize} 
      max={5}
    />
  );
};

export default StarRating;
