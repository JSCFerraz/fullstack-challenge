import styled from "styled-components";

export const StyledTechList = styled.ul`
width: 100%;
min-height: 80%;
max-height: 500px;
display: flex;
flex-direction: column;
justify-content: stretch;
overflow: auto;
gap: 1rem;
margin: 1rem 0;
padding: 1rem;
overflow-x: hidden;
background-color: var(--color-grey-3);
border-radius: var(--radius-1);
`

export const EmptyTechList = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
margin: 3rem 0;
`;