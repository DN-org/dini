import styled from 'styled-components';


export const InformationCont = styled('div')(() => ({
  display: 'grid',
  gridTemplateColumns: '0.6fr 1fr',
  gridTemplateRows: '1fr 0.4fr',
  backgroundColor: 'black',
  padding: '40px 0 0 0'
}));

export const FilmPostersCont = styled('div')(() => ({
  gridArea: '1/1/2/2',
}));

export const FilmImgCont = styled('div')(() => ({
  width: '80%',
  margin: 'auto',
  img: {
    width: '100%',
    borderRadius: '15px',
  },
}))

export const ButtonAddCategory = styled('button')(() => ({
  all: 'unset',
  backgroundColor: 'rgb(10, 10, 10)',
  // backgroundColor: 'blue',
  display: 'block',
  width: '85%', 
  height: '50px',
  borderRadius: '40px',
  margin: '20px auto',
}));

export const ButtonAddCategoryText =styled('div')(() => ({
  display: 'grid',
  gridTemplateColumns: '0.4fr 1fr',
  justifyItems: 'center',
  alignItems: 'center',
  gridColumnGap: '10px',
  div:{
    justifySelf:'end',
  },
  p:{

    justifySelf:'start',
  }
}));


export const FilmInformationCont = styled('div')(() => ({
  gridArea: '1/2/2/3',
}));

export const NameFilm = styled('div')(() => ({
  padding: '0 0 10px 0',
}));

export const RatingCont = styled('div')(() => ({
  display: 'grid',
  gridTemplateColumns: '150px 1fr 0.2fr',
  alignItems: 'center',

  width: '550px'
}));

export const Rating = styled('H2')(() => ({
  fontSize: '40px'
}));

export const RatingAll = styled('p')(() => ({

}));

export const StarCont = styled('div')(() =>({
  display:'grid',
  gridTemplateColumns:'1fr 1fr 1fr 1fr 1fr',
  width: '80%',

}));

export const StarsConts = styled('div')(() => ({
  display:'grid',
  justifyItems:'center',
}));

export const StarNumber = styled('p')(() =>({
  textAlign:'center',
}));

export const AnotherRatingCont = styled('div')(() => ({

}));

export const AnotherRating = styled('div')(() => ({
  display:'grid',
  gridTemplateColumns:'1fr 1fr',
  alignItems: 'center',
}));

export const AboutFilm = styled('div')(() => ({
  padding: '10px 0 10px 0',

  h3:{
    padding:'5px 0'
  }
}));

export const AboutFilmConts = styled('div')(() => ({
    display: 'grid',
    gridTemplateColumns: '0.3fr 1fr',
    padding: '5px 0',
}));

export const RolesCont = styled('div')(() => ({

}));

export const CarouselCont = styled('div')(() =>({
  padding: '30px 0 20px'
}));


export const SecondFilmInformationCont = styled('div')(() => ({
  gridArea: '2/1/3/3',
  display: 'grid',
  gridTemplateRows: '0.7fr 1fr',
}));

export const DescriptionCont = styled('div')(() => ({
  
}));


