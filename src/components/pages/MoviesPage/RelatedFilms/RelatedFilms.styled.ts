import styled from 'styled-components';

export const RelatedFilmsContainer = styled('div')(() => ({
    width: '1280px',
    padding:'50px 50px',
    background:'black',
    borderBottom: '1px solid rgba(255,255,255, .15)',
    display: 'flex',
    flexDirection: 'column',
    rowGap: '25px'
}));

export const ImgContainer = styled('div')(() => ({
    img:{
        margin:'auto',
        width:"180px",
    }
}));