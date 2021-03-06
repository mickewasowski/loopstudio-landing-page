import styled from 'styled-components';
import {NavLink} from 'react-router-dom'

export const IconsContainer = styled.div`
    display: flex;
    justify-content: flex-end;

    @media (min-width: 320px) and (max-width: 820px) {
        gap: 0.8rem;
    }
`

export const NavLinkStyled = styled(NavLink)`
     margin-left: 1rem;
    padding-bottom: 0.2rem;

    &:hover{
        border-bottom: 2px solid white;
        margin-bottom: -2px;
    }
`