//Packages
import styled from "styled-components";

export const FilterСontent = styled('div')(() => ({
    position: 'fixed',
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    padding: '35px 5px 35px 0',
    borderRadius: '0 30px 30px 0',
    top: '40vh',
    left: '0'
}));

export const FilterContainer = styled('div')(() => ({
    display: 'grid',
    placeItems: 'center', 
    height: '100px', 
}));

export const FilterName = styled('p')(() => ({
    writingMode: 'sideways-lr', 
    textOrientation: 'inherit',
}));

