import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
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
`;
