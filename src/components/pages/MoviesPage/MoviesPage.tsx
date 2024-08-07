import React from 'react';

import { Content } from './MoviesPage.styled';

import Information from './Information/Information';
import Description from './Description/Description';
import Player from './Player/Player';

const MoviesPage: React.FC = () => {
  return (
    <Content>
      <Information/>
      <Description/>
      <Player/>
    </Content>
  );
};

export default MoviesPage;
