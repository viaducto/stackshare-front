import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

  html{
    background-color: #F0F2F5;
    font-size: 87.5% !important;
  }
  
  body {
    font-size: 1rem !important;
  }

  * {
    margin: 0;
    padding: 0%;
    font-family: -apple-system, BlinkMacSystemFont, sans-serif;
    box-sizing: border-box;
  }
  .wrapper{
    width: 100%;
    height: 100vh;
  }

  .link-router{
    appearance: none;
    text-decoration: none;
    color: inherit;
  }
`;
