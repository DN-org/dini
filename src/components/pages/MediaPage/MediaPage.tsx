//Packages
import React from 'react';

//Components
import Comments from './Comments/Comments';
import Information from './Information/Information';
import Player from './Player/Player';
import RelatedFilms from './RelatedFilms/RelatedFilms';

//Styles
import { MediaContent } from './MediaPage.styled';

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
