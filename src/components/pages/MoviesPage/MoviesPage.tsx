import React from 'react';

import { Content } from './MoviesPage.styled';

import Information from './Information/Information';
import Player from './Player/Player';
import RelatedFilms from './RelatedFilms/RelatedFilms';
import Comments from './Comments/Comments';

const MoviesPage: React.FC = () => {
  return (
    <Content>
      <Information/>
      <Player/>
      <RelatedFilms/>
      <Comments/>
    </Content>
  );
};

export default MoviesPage;
