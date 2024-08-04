import styled from 'styled-components';


export const ArrowsR = styled('button')(() => ({
  all: 'unset',
  position: 'absolute',
  cursor: 'pointer',
  top: '40px',
  left: '100.5%',
}));

export const ArrowsL = styled('button')(() => ({
  all: 'unset',
  height:'40px',
  position: 'absolute',
  cursor: 'pointer',
  padding: '0px 10px 0 6px',
  border: 'solid 1px white',
  borderRadius: '50%',
  top: '40px',
  left: '4.5%',
  zIndex: 10,
}));


export const ContCarousel = styled('div')(() => ({
  width:'700px',
  margin:'0 20px',
}));

export const ImgCont = styled('div')(() => ({
  width: '150px',
    img:{
        display:'block',
        margin:'auto',
        width: '150px',
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