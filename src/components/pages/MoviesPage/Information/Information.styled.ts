import { Button } from '@mui/material';
import styled from 'styled-components';


export const InformationCont = styled('div')(() => ({
  display: 'grid',
  gridTemplateColumns: '0.6fr 1fr',
  gridTemplateRows: '1fr 0.4fr',
  backgroundColor: 'black'
}));

export const ButtonAddCategory = styled('button')(() => ({
  // backgroundColor: 'black',
}));

export const FilmPostersCont = styled('div')(() => ({
  gridArea: '1/1/2/2',
  img: {
    display: 'block',
    width: '80%',
    height: 'auto',
    margin: 'auto',
  },
}));


export const FilmInformationCont = styled('div')(() => ({
  gridArea: '1/2/2/3',
}));

export const NameFilm = styled('div')(() => ({
    
}));

export const RatingCont = styled('div')(() => ({
  display: 'grid',
  gridTemplateColumns: '0.4fr 1fr 0.2fr'
}));

export const Rating = styled('p')(() => ({

}));

export const StarCont = styled('div')(() =>({

}));

export const StarNumber = styled('p')(() =>({

}));

export const AnotherRatingCont = styled('div')(() => ({

}));

export const AnotherRating = styled('div')(() => ({

}));

export const AboutFilm = styled('div')(() => ({

}));

export const AboutFilmConts = styled('div')(() => ({
    display: 'grid',
    gridTemplateColumns: '0.3fr 1fr',
}));

export const RolesCont = styled('div')(() => ({

}));


export const SecondFilmInformationCont = styled('div')(() => ({
  gridArea: '2/1/3/3',
  display: 'grid',
  gridTemplateRows: '0.7fr 1fr',
}));

export const DescriptionCont = styled('div')(() => ({
  
}));


