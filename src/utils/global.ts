import { createGlobalStyle } from 'styled-components';

export const GlobalStyle: any = createGlobalStyle`

  html{
    /* background-color: #F0F2F5; */
    font-size: 87.5% !important;
  }
  
  body {
    font-size: 1rem !important;
  }

  * {
    font-family: 'Source Sans Pro', sans-serif;
    /* font-family: -apple-system, BlinkMacSystemFont, sans-serif; */
    margin: 0;
    padding: 0%;
    box-sizing: border-box;
  }

  input > label {
    font-weight: bold;
  }

  .link {
    color: #1665D8 !important;
  }

  .link-router{
    appearance: none;
    text-decoration: none;
    color: inherit;
  }

  hr {
    border-color: #d9d9d9;
    height: 1px;
    opacity: 0.3;
  }

  .wrapper{
    width: 100%;
    height: 100vh;
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
    position: absolute;
    right: 0;
    &:focus, &:active{
      background-color: #595959 !important;
    }
  }

  .flex{
    display: flex !important;
    align-items: center !important;
  }
  .flex-column {
    display: flex;
    flex-direction: column;
  }
  .notification > div{
    border-radius: 1rem !important;
    color: white !important;
    padding: 0.63rem .5rem !important;
    box-sizing: border-box;
  }

  .rv-discrete-color-legend{
    display: flex;
    align-items: center;
    & .horizontal {
      display: flex;
      align-items: center;
      gap: 0.2rem;
    }
    gap: 1rem;
  }

  .overflow {
    overflow-x: auto;
    overflow-y: auto;
  }

  tfoot{
    border-top: 0.063rem solid #d9d9d9;
    border-bottom: 0.063rem solid #d9d9d9;
    & > tr {
      border: none !important;
    }
  }
  
  .blurred-border {
    position: relative;
    &:after {
      border-color: transparent;
      background: linear-gradient(270deg,rgba(217, 217, 217, 1) 0%,rgba(255, 255, 255, 0) 100%);
      background-clip: border-box;
      border: inherit;
      content: '';
      position: absolute;
      height: 100%;
      right: 0;
      top: 0;
      width: 10px;
    }
  }

  .td{
    align-items: center !important;
    display: flex !important;
  }

  .td-data{
    width: 100%;
    display: flex;
    align-items: center;
  }

  .flotant{
    height: 100%;
    & > div {
      position: sticky;
      top: 1rem;
    }
  }

  .border-bottom {
    border-bottom: 0.063rem solid #d9d9d9;
  }

  .form-control {
    padding-top: 1.5rem;
    padding-bottom: 0.5rem;
  }
`;
