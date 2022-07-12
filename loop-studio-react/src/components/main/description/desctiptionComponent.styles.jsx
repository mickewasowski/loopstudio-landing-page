import styled from 'styled-components'

export const DescriptionContainer = styled.div`
     display: flex;
    align-items: end;
    padding-top: 10rem;
    padding-left: 10rem;
`

export const VRGoggles = styled.div`
    width: 50rem;
    height: 35rem;
    background-image: url('./images/desktop/image-interactive.jpg');
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
`

export const DescriptionDiv = styled.div`
    width: 30rem;
    height: 20rem;
    background-color: hsl(0, 0%, 100%);
    position: relative;
    left: -9%;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    gap: 2rem;
    padding-left: 5rem;
`

export const H2 = styled.h2`
    font-family: 'Josefin Sans', sans-serif;
    text-transform: uppercase;
    font-size: 3rem;
    font-weight: 300;
    margin: 0;
`

export const StyledParag = styled.p`
    margin: 0;
    font-family: 'Alata', sans-serif;
    font-weight: 400;
    color: hsl(0, 0%, 55%);
`