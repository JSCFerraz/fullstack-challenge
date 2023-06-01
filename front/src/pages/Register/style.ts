import styled from "styled-components";

export const StyledLoginForm = styled.div`
  width: 50%;
  min-width: 320px;
  max-width: 370px;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 1rem;
  background-color: var(--color-grey0);
  border: 1px solid var(--color-grey20);
  border-radius: var(--radius-1);

  @media (min-width: 400px) {
    max-width: 370px;
  }
`;

export const StyledLoginDiv = styled.div`
  min-width: 85vw;
  padding: 0 7rem;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--color-grey-3);
  border-radius: var(--radius-1);
  margin: 0 auto;
  position: relative;

  @media (min-width: 500px) {
    width: 50%;
  }
`;

export const StyledPageSideInfo = styled.div`
  min-width: 300px;
  max-width: 370px;
  width: 40%;
  text-decoration: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: flex-start;
  align-items: start;
  border-radius: var(--radius-1);
  padding: 0.5rem 1rem;
  height: 2.5rem;
  color: var(--color-grey-0);
  /* background-color: var(--color-grey-1); */
  gap: 1rem;
  position: absolute;
  top: 80px;
  margin: 0 auto;

  /* &:hover {
    background-color: var(--color-grey-2);
  } */

  img {
    max-width: 20rem;
  }

  @media (min-width: 500px) {
    max-width: 370xp;
    position: relative;
    top: 0;
  }
`;

export const StyledMessageDiv = styled.div`
  width: 100%;
  max-width: 285px;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 1rem;
  padding: 0.5rem 0;
  margin: 1rem 0;

  p {
    font-size: var(--font-size-14);
  }
`;

export const StyledBoxIcon = styled.div`
  height: 3rem;
  width: 3rem;
  padding: 1rem;
  border-radius: var(--radius-2);
  background-color: var(--color-primary-50);
`;

export const StyledEllipsesGroupImg = styled.div`
  display: none;

  @media (min-width: 500px) {
    display: flex;
    height: 5rem;
    width: 8rem;
    background-color: var(--color-grey-20);
  }
`;

export const StyledLoginFormDiv = styled.div`
  display: flex;
  justify-content: flex-start;
  position: absolute;
  top: 180px;
  margin: 0 auto;

  @media (min-width: 500px) {
    align-content: flex-end;
    position: relative;
    top: 0;
  }
`;
