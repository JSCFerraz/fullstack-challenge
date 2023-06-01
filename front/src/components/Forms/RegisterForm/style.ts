import styled from "styled-components";

export const StyledRegForm = styled.div`
  width: 100%;
  min-width: 290px;
  max-width: 370px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: stretch;
  gap: 0.5rem;
  padding: 1rem;
  background-color: var(--color-white);
  border: 1px solid var(--color-grey20);
  border-radius: var(--radius-1);

  @media (min-width: 400px) {
    max-width: 370px;
  }
`;
export const HelperTextDiv = styled.div`
  width: 100%;
  max-width: 320px;
  gap: 0.5rem;
  min-height: 1.5rem;
  text-align: start;
  padding: 0 0.5rem;

  @media (min-width: 370px) {
    max-width: 370px;
  }
`;

export const StyledRegisterTitle = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
  padding: 0.5rem 0;
  margin: 1rem 0;

  & > a {
    text-decoration: underline;

    :hover {
      color: var(--color-grey100);
    }
  }
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;
