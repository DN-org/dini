import React from 'react';

import { Content } from './MoviesPage.styled';

import Information from './Information/Information';
import Player from './Player/Player';

const MoviesPage: React.FC = () => {
  return (
    <Content>
      <Information/>
      <Player/>
    </Content>
  );
};

export default MoviesPage;
