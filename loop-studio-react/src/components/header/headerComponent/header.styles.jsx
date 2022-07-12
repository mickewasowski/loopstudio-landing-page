import styled from "styled-components";

export const HeaderComponent = styled.header`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;

    background-color: hsla(0, 0%, 0%, 40%);
    background-image: url('./images/desktop/image-hero.jpg');
    background-blend-mode: multiply;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
`

export const UpperDiv = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 5rem 9rem;
`

export const ToggleContainer = styled.div`
    display: none;
`

export const LowerDiv = styled.div`
    margin: 0rem 9rem;
    margin-top: 3rem;
    margin-bottom: 8rem;
    width: 55%;
    border: 4px solid hsl(0, 0%, 100%);
`

export const H1 = styled.h1`
     color: hsl(0, 0%, 100%);
    font-family: 'Josefin Sans', sans-serif;
    text-transform: uppercase;
    text-align: left;
    margin: 2rem 3rem;
    font-size: 8rem;
    font-weight: 300;
`