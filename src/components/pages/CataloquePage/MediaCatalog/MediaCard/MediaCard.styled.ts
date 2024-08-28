import styled from "styled-components";

export const MediaCardStyled = styled('div')(() => ({
  width:'100%'
}));

export const MediaCardContent = styled('div')(() => ({
  display:'grid',
  justifyItems:'center',
}));

export const MediaCardPoster = styled('img')(() => ({
  width:'200px',
  height:'290px',
}));

export const MediaCardNameContainer = styled('div')(() => ({
  padding:'10px 0 0'
}));

export const MediaCardName = styled('h3')(() => ({
  textAlign:'center',
}));

export const MediaCardDate = styled('h4')(() => ({
  textAlign:'center',
}));