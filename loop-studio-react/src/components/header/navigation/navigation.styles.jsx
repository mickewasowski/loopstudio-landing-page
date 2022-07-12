import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import {ReactComponent as Logo} from '../../../assets/logo.svg';

export const NavigationContainer = styled.div`
    display: flex;

    @media (min-width: 320px) and (max-width: 820px){
        display: none;
        width: 100vw;
        height: 100vh;
        z-index: 3;
        background-color: black;
        position: absolute;
        top: 0;
        left: 0;

        flex-direction: column;
        gap: 10rem;
    }
`

export const MobileContainer = styled.div`
    display: none;

    @media (min-width: 320px) and (max-width: 820px){
        align-items: center;
        justify-content: space-between;
    }
`

export const MobileLogo = styled(Logo)`
    justify-content: space-between;
        align-items: center;
        margin-top: 2rem;
        margin-left: 1rem;
        margin-right: 1rem;
`

export const CloseMenuContainer = styled.span`
    @media (min-width: 320px) and (max-width: 820px){
        margin-top: 2rem;
        margin-right: 1rem;
    }
` 

export const NavTag = styled.nav`
   @media (min-width: 320px) and (max-width: 820px){
        display: none;
    }
`

export const NavUL = styled.ul`
    display: flex;
    list-style: none;

    @media (min-width: 320px) and (max-width: 820px){
        flex-direction: column;
        padding: 0;
        gap: 2rem;
    }
`

export const ListItem = styled.li`
     margin: 0 1.5rem;
`

export const NavLinkStyled = styled(NavLink)`
    text-decoration: none;
    color: hsl(0, 0%, 100%);
    padding: 1rem 0;

    &:hover{
        border-bottom: 2px solid hsl(0, 0%, 100%);
        padding-bottom: .5rem;
    }

    @media (min-width: 320px) and (max-width: 820px){
        font-size: 2rem;
        text-transform: uppercase;
        font-family: 'Josefin Sans', sans-serif;
        font-weight: 300;
    }
`

