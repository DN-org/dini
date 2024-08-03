import { Link } from "react-router-dom";
import styled from "styled-components";

export const FooterStyled = styled('footer')(() => ({
    marginTop: '100%',
    borderTop: '1px solid white',
    padding: '50px 200px',
    display: 'grid',
    gridTemplateColumns: '1fr 0.7fr',
    alignItems: 'center',
    background: 'black',
    boxShadow: "15px 0px 20px 11px rgba(255, 255, 255, 0.1)",
}))

export const FooterLogoStyled = styled('img')(() => ({
    width: '200px',
}))

export const FooterLinksStyled = styled('div')(() => ({
    display: 'grid',
    gridTemplateColumns: 'repeat(5, 1fr)',
    columnGap: '100px'
}))

export const FooterLinkStyled = styled(Link)(() => ({
    fontFamily: 'Open Sans',
    fontSize: '22px',
    lineHeight: '20px',
    fontWeight: '400',
    color: '#f1f1f1',
    opacity: '0.7',
    textDecoration: 'none'
}))