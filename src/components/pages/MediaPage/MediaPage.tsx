import React from 'react';

import { MediaContent } from './MediaPage.styled';

import Information from './Information/Information';
import Player from './Player/Player';
import RelatedFilms from './RelatedFilms/RelatedFilms';
import Comments from './Comments/Comments';

const MediaPage: React.FC = () => {
  return (
    <MediaContent>
      <Information/>
      <Player/>
      <RelatedFilms/>
      <Comments/>
    </MediaContent>
  );
};

export default MediaPage;
