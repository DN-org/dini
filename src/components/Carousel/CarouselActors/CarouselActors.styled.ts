import styled from 'styled-components';


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
        height:'70px',
        width: '175px',
        padding: '10px 0 0',
        textAlign:'center',
      }
}));