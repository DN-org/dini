import { AnotherRating } from './../Information/Information.styled';
import styled from "styled-components";

export const PlayerCont = styled('div')(() => ({
    padding: '0 50px',

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
