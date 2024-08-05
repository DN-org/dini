import styled from 'styled-components';

export const ArrowsR = styled('button')(() => ({
  all: 'unset',
  height: '40px',
  position: 'absolute',
  cursor: 'pointer',
  top: '45px',
  left: '590px',
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
  top: '45px',
  left: '65px',
  backgroundColor:'rgb(0,0,0,.2)',
  backdropFilter: 'invert(40%)',
  zIndex: 10,
}));


export const ContCarousel = styled('div')(() => ({
  width: '700px',
  // margin: '0 20px',
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

export const ImgCont = styled('div')(() => ({
  width: '150px',
    img:{
        display:'block',
        margin:'auto',
        width: '140px',
        height: '130px',
        borderRadius:'50%',
      },
      p:{
        height:'55px',
        width: '175px',
        padding: '10px 0 0',
        textAlign:'center',
      }
}));