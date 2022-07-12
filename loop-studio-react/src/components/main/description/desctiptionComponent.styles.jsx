import styled from 'styled-components'

export const DescriptionContainer = styled.div`
     display: flex;
    align-items: end;
    padding-top: 10rem;
    padding-left: 10rem;

    @media (min-width: 320px) and (max-width: 820px) {
        flex-direction: column;
        padding: 0;
        align-items: center;
        gap: 3rem;
    }
`

export const VRGoggles = styled.div`
    width: 50rem;
    height: 35rem;
    background-image: url('./images/desktop/image-interactive.jpg');
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;

    @media (min-width: 320px) and (max-width: 820px) {
        background-image: url('./images/mobile/image-interactive.jpg');
        background-position: center;
        background-size: contain;
        width: 90%;
        height: 14.5rem;
    }
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

    @media (min-width: 320px) and (max-width: 820px) {
        position: static;
        padding: 0;
        margin: 0;
        width: 70%;
        height: auto;
    }
`

export const H2 = styled.h2`
    font-family: 'Josefin Sans', sans-serif;
    text-transform: uppercase;
    font-size: 3rem;
    font-weight: 300;
    margin: 0;

    @media (min-width: 320px) and (max-width: 820px) {
        font-size: 2rem;
        text-align: center;
    }
`

export const StyledParag = styled.p`
    margin: 0;
    font-family: 'Alata', sans-serif;
    font-weight: 400;
    color: hsl(0, 0%, 55%);

    @media (min-width: 320px) and (max-width: 820px) {
        text-align: center;
    }
`