import styled from "styled-components";

export const HeaderStyled = styled('header')(() => ({
    background: 'black',
    borderBottom: '1px solid white',
    boxShadow: '0px 15px 20px 11px rgba(255, 255, 255, 0.1)',

    height: '10vh',
    width: '100%',

    position: 'fixed',
    zIndex: '100',
    overflow: 'hidden',
    top: '0',

    display: 'grid',
    gridTemplateColumns: '1fr 1fr 10fr 1fr 1fr',
    alignContent: 'center',
    padding: '0 50px',
}))

export const HeaderLogoStyled = styled('img')(() => ({
    width: '150px'
}))