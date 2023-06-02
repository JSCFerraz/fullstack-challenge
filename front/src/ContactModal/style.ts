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
  background-color: var(--color-grey-0);
  width: 100%;
  max-width: 320px;
  position: relative;

  @media (min-width: 375px) {
    max-width: 370px;
  }
`;

export const StyledContactTitle = styled.div`
  width: 100%;
  height: 5rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 2rem;
  padding: 1.9rem;
  background-color: var(--color-grey-2);
  color: white;
`;
