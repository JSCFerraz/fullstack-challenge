import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');

  :root {
    
    --color-primary: #FF577F;
    --color-primary-50: #FF577F;
    --color-primary-hover: #FF427F;
    --color-primary-negative: #59323F;

    --color-grey-0: #F8F9FA;
    --color-grey-1: #868E96; 
    --color-grey-1-50: #868E96D1; 
    --color-grey-2: #343B41; 
    --color-grey-3: #212529; 
    --color-grey-4: #121214; 
    --color-grey50: #828282;
    --color-grey20: #E0E0E0;
    --color-white: #FFFFFF;

    --color-negative: #E60000;
    --color-warning: #FFCD07;
    --color-success: #168821;
    --color-information: #155BCB;

    --color-background: var(--color-grey-4);
    --color-border: var(--color-grey-3);
    --nav-button-background: var(--color-grey-3);
    --nav-button-border: var(--color-grey-3);
    --nav-button-color: var(--color-grey-0);
    --nav-button-background-hover: var(--color-grey-2);
    --nav-button-border-hover: var(--color-grey-2);
    --color-overlay-black: rgba(0,0,0,.5);
    
    --input-background: var(--color-grey-3);
    --input-border: var(--color-grey-3);
    --input-color: var(--color-grey-0);
    --input-color-focus: var(--color-grey-0);
    --input-background-hover: var(--color-grey-2);
    --input-border-focus: var(--color-grey-2);

    --font-size-24: 1.5rem;
    --font-size-20: 1.25rem;
    --font-size-18: 1.125rem;
    --font-size-16: 1rem;
    --font-size-14: 0.875rem;
    --font-size-12: 0.75rem;

    --radius-0: 1rem;
    --radius-1: 0.25rem;
    --radius-2: 0.5rem;

    font-size: 60%;
  }

  @media (min-width: 700px) {
    :root {
        font-size: 62.25%;
    }
  }
  
  * {
    margin:0;
    padding: 0;
    outline:0;
    box-sizing: border-box;
  }
  body,html{
    width: 100vw;
    height: 100vh;
  }

  body {
    background: var(--color-background);
    color: var(--color-text);
    -webkit-font-smoothing: antialiased;
    overflow-x: hidden;
  }

  body, input, button, textarea {
    font-family: 'Inter', sans-serif;
    font-size: var(--font-size-16);
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 700;
    font-family: 'Inter', sans-serif;
  }

  p, span {
    font-weight: 400;
    font-family: 'Inter', sans-serif;
  }

  button, a {
    cursor: pointer;
  }

  option {
    font-weight: 400;
    font-family: 'Inter', sans-serif; 
    font-size: var(--font-size-14);
  }
  select {
    font-weight: 400;
    font-family: 'Inter', sans-serif;
    color: var(--color-grey-2);
    font-size: var(--font-size-14);
    border: solid 1 var(--color-grey-1);
  }

  fieldset {
    border: none;
  }

  ::-webkit-scrollbar {
    width: 10px;
  }

  ::-webkit-scrollbar-track {
    background: var(--color-grey-2);
    margin: 0.5rem;
    border-radius: var(--radius-0);
  }

  ::-webkit-scrollbar-thumb {
    background: var(--color-grey-1);
    border-radius: var(--radius-0);
  }

  ::-webkit-scrollbar-thumb:hover {
    background: var(--color-primary);
  }
`;
