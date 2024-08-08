import styled from 'styled-components';

export const ArrowsR = styled('button')(() => ({
  all: 'unset',
  height: '40px',
  position: 'absolute',
  cursor: 'pointer',
  top: '110px',
  left: '1080px',
  padding: '0px 6px 0 10px',
  borderRadius: '50%',
  backgroundColor:'rgb(0,0,0,.2)',
  backdropFilter: 'invert(40%)',
  zIndex: 10,
}));

export const ArrowsL = styled('button')(() => ({
  all: 'unset',
  height:'40px',
  position: 'absolute',
  cursor: 'pointer',
  padding: '0px 10px 0 6px',
  borderRadius: '50%',
  top: '110px',
  left: '65px',
  backgroundColor:'rgb(0,0,0,.2)',
  backdropFilter: 'invert(40%)',
  zIndex: 10,
}));


export const ContCarousel = styled('div')(() => ({
  width: '100%',
  position: 'relative',
  '& button': {
    transition:'opacity 0.3s',
    opacity:'0',
  },
  '&:hover button': {

    transition:'opacity 0.3s',
    opacity: '1',
  },
  
}));