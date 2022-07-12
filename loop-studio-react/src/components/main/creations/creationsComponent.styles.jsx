import styled from "styled-components";

export const CreationsContainer = styled.div`
      display: flex;
    flex-direction: column;
    padding: 10rem;

    @media (min-width: 320px) and (max-width: 820px) {
        margin-top: 7rem;
        padding: 0;
        align-items: center;
    }
`

export const HeadingsContainer = styled.div`
     display: flex;
    justify-content: space-between;

    @media (min-width: 320px) and (max-width: 820px) {
        flex-direction: column;
    }
`

export const H2 = styled.h2`
    margin-top: 0;
    font-family: 'Josefin Sans', sans-serif;
    font-weight: 300;
    text-transform: uppercase;
    font-size: 2.5rem;

    @media (min-width: 320px) and (max-width: 820px) {
        text-align: center;
    }
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

    @media (min-width: 320px) and (max-width: 820px) {
        display: none;
    }
`

export const CreationsElements = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 2rem;

    @media (min-width: 320px) and (max-width: 820px) {
        align-items: center;
        justify-content: center;
        margin-bottom: 2rem;
        width: 100%;
    }
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

    @media (min-width: 320px) and (max-width: 820px) {
        width: 90%;
        height: 10rem;
        background-position: center;
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

    @media (min-width: 320px) and (max-width: 820px) {
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
    }
`