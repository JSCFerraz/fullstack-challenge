import { Link } from "react-router-dom";
import styled from "styled-components";

export const StyledLink = styled(Link)`
  width: 100%;
  text-decoration: none;
  display: inline-flex;
  justify-content: center;
  align-content: stretch;
  align-items: center;
  border-radius: var(--radius-1);
  padding: 0.5rem 1rem;
  height: 2.5rem;
  color: var(--color-grey-0);
  background-color: var(--color-grey-2);
  &:hover {
    background-color: var(--color-grey50);
  }

  @media (min-width: 370px) {
    max-width: 370xp;
  }
`;
