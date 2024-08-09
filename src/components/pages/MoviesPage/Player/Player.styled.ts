import styled from "styled-components";

export const PlayerCont = styled('div')(() => ({
    padding: '50px 50px',
    display: 'grid',
    rowGap: '25px',
    borderBottom: '1px solid rgba(255,255,255, .15)',
}));

export const OtherPlayerCont = styled('div')(() => ({
    display:'grid',
    gridTemplateColumns: '1fr 1fr'
}));

export const AnotherPlayerCont = styled('div')(() =>({
    display:'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gridColumnGap: '20px'
}));

export const PlayerPlay = styled('div')(() => ({
}));
