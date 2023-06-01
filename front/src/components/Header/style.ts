import styled from "styled-components";

export const StyledHeader = styled.header`
  width: 100%;
  height: fit-content;
  background-color: var(--color-grey0);
`;
export const StyledHeaderContents = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  padding: 0.5rem 0;

  & > img {
    height: 1rem;
  }

  @media (min-width: 700px) {
    flex-direction: row;
    justify-content: space-between;

    & > img {
      height: 1.5rem;
    }
  }
  @media (min-width: 1100px) {
    & > img {
      height: 2rem;
    }
  }
`;
export const StyledIconDiv = styled.div`
  min-width: 3rem;
  min-height: 3rem;
  object-fit: cover;
  display: flex;
  align-items: center;
  padding: 0.5rem;
  margin-bottom: 0.5rem;
  color: var(--color-grey50);
  font-size: var(--font-size-32);
  background-color: transparent;
  position: relative;

  & > span {
    width: 1.5rem;
    height: 1.5rem;
    text-align: center;
    position: absolute;
    padding: 0.3rem;
    right: 0.1rem;
    top: 2rem;
    color: var(--color-grey0);
    font-size: var(--font-size-14);
    background-color: var(--color-primary);
    border-radius: var(--radius-50);
  }

  @media (min-width: 700px) {
    width: 1.5rem;
    height: 1.5rem;
  }
`;

export const StyledRightColumn = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;

  @media (min-width: 700px) {
    gap: 1rem;
  }
`;
