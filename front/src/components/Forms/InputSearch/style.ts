import styled from "styled-components";

export const StyledSearchForm = styled.form`
  position: relative;
`;
export const StyledInputSearch = styled.input`
  width: 18rem;
  height: 3.6rem;
  background-color: var(--color-white);
  border-radius: var(--radius-1);
  border: 1px solid var(--color-grey20);
  padding: 0 1rem;

  &:focus {
    outline: 1px solid var(--color-grey50);
  }
`;
