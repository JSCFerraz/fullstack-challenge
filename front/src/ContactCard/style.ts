import styled from "styled-components";

export const StyledTechCard = styled.li`
    width: 100%;
    min-width: 200px;
    min-height: 3rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: var(--radius-1);
    padding-right: 1rem;
    background-color: var(--color-grey-4);
    border-radius: var(--radius-1);

    & > h3 {
        margin: 0 1rem;
    }
    & > p {
        margin: 0 1rem;
    }

    &:hover {
        background-color: var(--color-grey-2);
        cursor: pointer;
    }
`
