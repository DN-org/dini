import styled from "styled-components";export const ProfileActorContainer = styled('div')(() => ({
    display:'grid',
    gridTemplateColumns:'0.7fr 1fr',
    justifyItems:'center',
    minHeight: "720px",
    padding: "30px 0",
}));

export const AvatarContainer = styled('div')(() => ({
    display:'grid',
    justifyItems:'center',
    width:'100%',
    rowGap:'20px',
    img:{
        width:'340px',
        objectFit:'cover',
        borderRadius:'15px'
    }
}));

export const InformationActorContainer = styled('div')(() => ({
    width:"100%",

}));

export const NameActorContainer = styled('div')(() => ({
    display:'grid',
    gridTemplateColumns:'0.8fr 1fr',
    gridTemplateRows:'repeat(2, 1fr)',
    rowGap:'10px',
    padding:'0 0 40px'
    
}));

export const PrimaryName = styled('h2')(() => ({

}));

export const CustomButtonContainer = styled('div')(() => ({
    width:'350px'
}));

export const SecondaryName = styled('h4')(() =>({
    gridArea:' 2 / 1 / 3 / 3;',
    color:'rgba(255,255,255,.6)',
}));

export const AboutActorContainer = styled('div')(() => ({
    display:'grid',
    rowGap: '20px',
}));

export const AboutActorContent = styled('div')(() => ({
    display: "grid",
    gridTemplateColumns: "0.6fr 1fr",
}));


