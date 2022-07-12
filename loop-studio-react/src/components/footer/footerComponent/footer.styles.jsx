import styled from 'styled-components'

export const FooterContainer = styled.footer`
    background-color: hsl(0, 0%, 0%);
    display: flex;
    justify-content: space-between;
    padding: 3rem 10rem;

    @media (min-width: 320px) and (max-width: 820px) {
        margin-top: 5rem;
        padding: 0;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
`