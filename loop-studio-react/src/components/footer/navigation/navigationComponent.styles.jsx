import styled from 'styled-components'
import {NavLink} from 'react-router-dom'

export const LeftDiv = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
`

export const LogoContainer = styled.div`
    @media (min-width: 320px) and (max-width: 820px) {
        margin-top: 2rem;
    }
`

export const FooterUL = styled.ul`
    padding-left: 0;
    display: flex;
    list-style: none;

    @media (min-width: 320px) and (max-width: 820px) {
        flex-direction: column;
        font-family: 'Josefin Sans', sans-serif;
        font-weight: 300;
        text-align: center;
        gap: 1rem;
    }
`

export const ListItem = styled.li`
    margin: 0;
    margin-right: 2rem;
`

export const NavLinkStyled = styled(NavLink)`
    text-decoration: none;
    color: hsl(0, 0%, 100%);
    padding: 1rem 0;

    &:hover{
        border-bottom: 2px solid hsl(0, 0%, 100%);
        padding-bottom: .5rem;
    }
`