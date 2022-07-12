import styled from "styled-components";

export const RightDiv = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.5rem;

    @media (min-width: 320px) and (max-width: 820px) {
        align-items: center;
        gap: 0;
        margin-top: 2rem;
    }
`

export const CopyrightContainer = styled.div`
    color: hsl(0, 0%, 55%);
`