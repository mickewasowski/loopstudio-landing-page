import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NavigationContainer = styled.div`
    display: flex;
`

export const NavUL = styled.ul`
    display: flex;
    list-style: none;
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
`

export const MobileContainer = styled.div`
    display: none;
`