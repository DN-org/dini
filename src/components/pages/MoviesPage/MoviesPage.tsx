import React from 'react';

import { Content } from './MoviesPage.styled';

import Information from './Information/Information';

const MoviesPage: React.FC = () => {
  return (
    <Content>
      <Information/>
    </Content>
  );
};

export default MoviesPage;
