import styled, { css } from "styled-components";
import BaseText from "./components/BaseText/index";

interface iStyledTextProps {
  textColor?: string;
  textStyle?: string;
}

function text(textStyle: string) {
  switch (textStyle) {
    case "title1":
      return css`
        font-size: var(--font-size-20);
        font-weight: 700;
      `;
    case "title1-white":
      return css`
        font-size: var(--font-size-24);
        font-weight: 700;
        color: var(--color-white);
      `;
    case "title2":
      return css`
        font-size: var(--font-size-16);
        font-weight: 700;
      `;
    case "title2-white":
      return css`
        font-size: var(--font-size-16);
        font-weight: 700;
        color: var(--color-white);
      `;
    case "title3":
      return css`
        font-size: var(--font-size-12);
        font-weight: 500;
      `;
    case "headline":
      return css`
        font-size: var(--font-size-12);
        font-weight: 400;
      `;
    case "headlineBold":
      return css`
        font-size: var(--font-size-12);
        font-weight: 700;
      `;
    case "headlineItalic":
      return css`
        font-size: var(--font-size-12);
        font-style: italic;
        font-weight: 400;
      `;
    case "price":
      return css`
        font-size: var(--font-size-14);
        color: var(--color-primary);
        font-weight: 600;
      `;
    case "productTitle":
      return css`
        font-size: var(--font-size-18);
        color: var(--color-grey100);
      `;
    case "remove":
      return css`
        font-size: var(--font-size-12);
        color: var(--color-grey50);
      `;
    case "total":
      return css`
        font-size: var(--font-size-14);
        color: var(--color-grey100);
      `;
    case "category":
      return css`
        font-size: var(--font-size-12);
        color: var(--color-grey50);
      `;
    case "cartTitle":
      return css`
        font-size: var(--font-size-18);
        color: var(--color-grey0);
        font-weight: 500;
      `;
    case "quantity":
      return css`
        font-size: var(--font-size-14);
        color: var(--color-grey50);
        font-weight: 500;
      `;
    case "productTitleCart":
      return css`
        font-size: var(--font-size-14);
        color: var(--color-grey100);
      `;
    case "categoryCart":
      return css`
        font-size: var(--font-size-12);
        color: var(--color-grey50);
      `;
    case "emptyCart1":
      return css`
        font-size: var(--font-size-18);
        color: var(--color-grey100);
        margin-bottom: 0.5rem;
      `;
    case "emptyCart2":
      return css`
        font-size: var(--font-size-14);
        color: var(--color-grey50);
      `;
    default:
      return css`
        font-size: var(--font-size-12);
        font-weight: 400;
      `;
  }
}
export const StyledText = styled(BaseText)<iStyledTextProps>`
  ${({ textColor }) => {
    switch (textColor) {
      case "error":
        return css`
          color: var(--color-negative);
        `;
      case "grey":
        return css`
          color: var(--color-grey50);
        `;
      case "primary":
        return css`
          color: var(--color-primary);
        `;
      default:
        return css`
          color: var(--color-grey100);
        `;
    }
  }}
  ${({ textStyle }) => textStyle && text(textStyle)}
`;
