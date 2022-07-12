import styled from "styled-components";

export const CreationsContainer = styled.div`
      display: flex;
    flex-direction: column;
    padding: 10rem;
`

export const HeadingsContainer = styled.div`
     display: flex;
    justify-content: space-between;
`

export const H2 = styled.h2`
    margin-top: 0;
    font-family: 'Josefin Sans', sans-serif;
    font-weight: 300;
    text-transform: uppercase;
    font-size: 2.5rem;
`

export const SeeAllBtn = styled.button`
    display: inline-block;
    width: 9rem;
    height: 2.5rem;
    border: 1px solid hsl(0, 0%, 0%);
    background-color: hsl(0, 0%, 100%);


    font-family: 'Alata', sans-serif;
    text-transform: uppercase;
    font-size: .9rem;
    font-weight: 400;
    letter-spacing: .2rem;

    &:hover{
        background-color: hsl(0, 0%, 0%);
        color: hsl(0, 0%, 100%);
        cursor: pointer;
    }
`

export const CreationsElements = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 2rem;
` 

export const CreationItem = styled.div`
    width: 19rem;
    height: 28.1rem;
    background-repeat: no-repeat;
    background-size: cover;
    background-color: rgba(0, 0, 0, 0.4);
    background-blend-mode: hard-light;

    display: flex;
    flex-direction: column;
    justify-content: end;
    align-items: center;

    color: hsl(0, 0%, 100%);

    &:hover{
        color: hsl(0, 0%, 0%);
        cursor: pointer;
    }
`

export const Backdrop = styled.div`
    display: none;
    width: 100%;
    height: 100%;
    background-color: hsla(0, 0%, 100%, .5);
    position: relative;
    z-index: 1;
`

export const CreationItemHeading = styled.h3`
    z-index: 2;
    width: 9.3rem;
    font-family: 'Josefin Sans', sans-serif;
    font-weight: 300;
    text-transform: uppercase;
    font-size: 2rem;
    color: inherit;
    position: absolute;
    background-color: transparent;
`


export const MobileBtn = styled.button`
    display: none;
`