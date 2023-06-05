import styled, { css, StyledComponent } from "styled-components";
import { iChildren } from "../../interfaces/global";
import { iIsActive } from "./types";

export const StyledInput = styled.input`
  width: 100%;
  height: 2.5rem;
  color: var(--color-grey50);
  background-color: var(--color-white);
  border-radius: var(--radius-1);
  border: 1px solid var(--color-grey50);
  padding: 0 1rem;
  display: block;
  font-size: var(--font-size-14);
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  box-sizing: border-box;

  @media (min-width: 370px) {
    max-width: 370px;
  }
`;

export const StyledLabel = styled.label`
  background-color: var(--color-white);
  color: var(--color-grey100);
  position: absolute;
  pointer-events: none;
  left: 10px;
  top: 10px;
  padding: 0 0.25rem;
  transition: 0.2s ease all;
`;

export const StyledInputDiv = styled.fieldset<iIsActive>`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.2rem;
  position: relative;

  label {
    font-size: var(--font-size-12);
    ${({ isActive, error }) => {
      if (isActive && error) {
        return css`
          top: -10px;
          font-size: var(--font-size-12);
          color: var(--color-negative);
        `;
      } else if (isActive && !error) {
        return css`
          top: -10px;
          font-size: var(--font-size-12);
          color: var(--color-success);
        `;
      } else {
        return css`
          font-size: var(--font-size-12);
        `;
      }
    }}
  }

  input:focus {
    border: 1px solid var(--color-grey-4);
    background-color: var(--color-white);
    color: var(--color-grey-3);
  }

  :focus-within label {
    font-size: var(--font-size-12);
    background-color: var(--color-white);
    line-height: 1.3rem;
    padding: 0rem 0.5rem;
    transform: translate(0, 12px) scale(0.75);
    top: -20px;
  }

  input {
    ${({ isActive, error }) => {
      if (isActive && error) {
        return css`
          border: 1px solid var(--color-negative);
          :focus {
            border: 1px solid var(--color-negative);
            background-color: var(--color-white);
            color: var(--color-grey-4);
          }
        `;
      } else if (isActive && !error) {
        return css`
          border: 1px solid var(--color-success);
          :focus {
            border: 1px solid var(--color-success);
            background-color: var(--color-white);
            color: var(--color-grey-4);
          }
        `;
      }
    }}
  }
`;

export const HelperTextDiv = styled.div`
  width: 100%;
  max-width: 320px;
  gap: 0.5rem;
  min-height: 1.5rem;
  text-align: start;
  padding: 0 0.5rem;
`;
