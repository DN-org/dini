import React from 'react';

import { Content } from './MoviesPage.styled';

import Information from './Information/Information';
import Player from './Player/Player';
import RelatedFilms from './RelatedFilms/RelatedFilms';

const MoviesPage: React.FC = () => {
  return (
    <Content>
      <Information/>
      <Player/>
      <RelatedFilms/>
    </Content>
  );
};

export default MoviesPage;
