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

  .bare-button{
    border: none;
    margin: 0;
    padding: 0;
    background-color: inherit;
    color:inherit;
    cursor: pointer;
  }
  .is-today{
    font-weight: bold;
    color: #7cb305;
  }

  .resizer{
    width: .6rem !important;
    top: 25% !important;
    background-color: #d9d9d9 !important;
    height: 50% !important;
  }

  .flex{
    display: flex !important;
    align-items: center !important;
  }

  table > thead > tr {
    background-color: #fafafa !important;
  }
`;
