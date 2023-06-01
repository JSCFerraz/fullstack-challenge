import styled from "styled-components";

export const Modal = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  inset: 0;
  z-index: 40;
  background-color: var(--color-overlay-black);

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ModalBox = styled.div`
  background-color: var(--color-background);
  width: 100%;
  max-width: 320px;
  position: relative;

  @media (min-width: 375px) {
    max-width: 370px;
  }
`;

export const StyledCartDiv = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: var(--color-grey0);
  border-radius: var(--radius-1);

  @media (min-width: 390px) {
    min-width: 20rem;
  }
`;
export const StyledCartTitle = styled.div`
  width: 100%;
  height: 3.5rem;
  background-color: var(--color-primary);
  border-radius: var(--radius-1) var(--radius-1) 0 0;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
