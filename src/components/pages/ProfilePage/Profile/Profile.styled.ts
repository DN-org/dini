import styled from "styled-components";

export const ProfileContainer = styled('div')(() => ({
    display:'grid',
    gridTemplateColumns:'1fr 1fr',
    justifyItems:'center',
    padding:'0 0 40px',
}));

export const AvatarContainer = styled('div')(() => ({
    display:'grid',
    justifyItems:'center',
    width:'100%',
    rowGap:'20px',
    img:{
        width:'350px',
        height:'450px',
        objectFit:'cover',
        borderRadius:'50px'
    }
}));

export const ViewedContainer = styled('div')(() => ({
    display:'grid',
    justifyItems:'center',
    alignItems:'center',
    width:'100%'

}));

export const ViewedContent = styled('div')(() => ({
    display:'grid',
    rowGap:'20px',
    width:'350px',
    h2:{
        padding:'0px 0 50px',
        textAlign:'center',
    },
    h3:{
        textAlign:'end',
    }
}))

export const Viewed = styled('div')(() => ({
    display: 'grid',
    gridTemplateColumns:'1fr 1fr',
    alignItems:'center',

}))

export const RegistrationDate = styled('div')(() => ({
    display:'grid',
    alignItems:'end',
    justifyItems:'center',
    width:'500px',
    height:'100%',
    
    
}));


