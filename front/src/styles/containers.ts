import styled, { css } from "styled-components";

interface icontainer {
  page?: string;
}

export const Container = styled.div<icontainer>`
  width: 100%;
  max-width: 295px;
  margin: 0 auto;
  padding: 10px;

  @media (min-width: 330px) {
    max-width: 370px;
  }

  ${({ page }) => {
    if (page === "dashboard") {
      return css`
        @media (min-width: 700px) {
          max-width: 700px;
        }
        @media (min-width: 900px) {
          max-width: 950px;
        }
        @media (min-width: 1100px) {
          max-width: 1200px;
        }
      `;
    }
  }}
`;
