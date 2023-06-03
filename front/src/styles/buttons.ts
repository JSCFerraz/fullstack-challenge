import styled, { css } from "styled-components";
import { iChildren } from "../interfaces/global";

interface iStyledButton extends iChildren {
  type?: string;
  backgroundImage?: string;
  btnPosition?: string;
  buttonSize?: string;
  disabled?: boolean;
}

export const StyledButton = styled.button<iStyledButton>`
  display: inline-flex;
  align-items: center;
  border-radius: var(--radius-1);
  padding: 0.5rem 1rem;
  height: 2.5rem;

  ${({ backgroundImage }) => {
    if (backgroundImage) {
      return css`
        background-image: ${(backgroundImage) => `url(${backgroundImage})`};
        background-repeat: no-repeat;
        object-fit: cover;
        color: var(--color-grey-0);
      `;
    }
  }}

  ${({ btnPosition }) => {
    if (btnPosition === "modal") {
      return css`
        position: absolute;
        right: 1rem;
        top: 0.5rem;
      `;
    } else if (btnPosition === "search") {
      return css`
        position: relative;
        right: -140px;
        top: -4rem;
      `;
    } else {
      return null;
    }
  }}

    ${({ buttonSize }) => {
    switch (buttonSize) {
      case "submit":
        return css`
          min-width: 100%;
          padding: 0 1.2rem;
          display: flex;
          justify-content: center;
          line-height: 3.5rem;
          height: 3rem;
          font-size: var(--font-size-16);
          color: var(--color-grey-0);
          background-color: var(--color-primary);
          border: 1px solid var(--color-primary);

          /* &:hover {
            background-color: var(--color-primary-hover);
          } */
        `;
      case "delete":
        return css`
          min-width: 30%;
          padding: 0 1.5rem;
          height: 3rem;
          display: flex;
          justify-content: center;
          line-height: 4rem;
          font-size: var(--font-size-16);
          color: var(--color-grey-4);
          background-color: var(--color-primary);
          border: 1px solid var(--color-primary);

          /* &:hover {
            background-color: var(--color-primary-hover);
          } */
        `;
      case "modifyProfile":
        return css`
          min-width: 30%;
          padding: 0 1.5rem;
          height: 3rem;
          display: flex;
          justify-content: center;
          line-height: 4rem;
          font-size: var(--font-size-16);
          color: var(--color-grey-4);
          background-color: var(--color-primary);
          border: 1px solid var(--color-primary);

          /* &:hover {
            background-color: var(--color-primary-hover);
          } */
        `;
      case "closeModal":
        return css`
          width: fit-content;
          padding: 0 0.5rem;
          display: flex;
          justify-content: center;
          line-height: 3.5rem;
          font-size: var(--font-size-16);
          color: var(--color-grey0);

          &:hover {
            background-color: var(--color-primary-hover);
          }
        `;
      case "search":
        return css`
          width: fit-content;
          max-width: 100%;
          padding: 0 1rem;
          display: flex;
          justify-content: center;
          margin-top: 1rem;
          line-height: 3.5rem;
          font-size: var(--font-size-16);
          background-color: var(--color-primary);
          border: 1px solid var(--color-primary);

          &:hover {
            background-color: var(--color-primary-50);
            border: 1px solid var(--color-primary-50);
          }
        `;
      case "icon":
        return css`
          width: fit-content;
          height: 3.6rem;
          padding: 0 1rem;
          display: flex;
          justify-content: center;
          line-height: 4.5rem;
          font-size: var(--font-size-16);
          background-color: var(--color-primary);
          border: 1px solid var(--color-primary);
          z-index: 45;
          /* position: absolute; */
          /* top: 1.5rem; */

          &:hover {
            background-color: var(--color-primary-hover);
          }
        `;
      default:
        return css`
          display: flex;
          justify-content: center;
          height: 2.75rem;
          padding: 0 2rem;
          font-size: var(--font-size-14);
          color: var(--color-grey0);
          background-color: var(--color-primary);
          &:hover {
            background-color: var(--color-primary-50);
          }
          &:focus {
            background-color: var(--color-primary-50);
          }
        `;
    }
  }}

  ${({ disabled, buttonSize }) => {
    console.log(disabled, buttonSize);
    if (
      disabled &&
      (buttonSize === "submit" || buttonSize === "submitUpdate")
    ) {
      return css`
        background-color: var(--color-primary-negative);
        border: 1px solid var(--color-primary-negative);
        cursor: not-allowed;
      `;
    } else if (
      !disabled &&
      (buttonSize === "submit" || buttonSize === "submitUpdate")
    ) {
      return css`
        background-color: var(--color-primary);
        border: 1px solid var(--color-primary);

        &:hover {
          background-color: var(--color-primary-hover);
          border: 1px solid var(--color-primary-hover);
          cursor: pointer;
        }
      `;
    }
  }}
`;
