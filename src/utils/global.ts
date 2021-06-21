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

  .pt-col {
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    width: 186px;
    position: relative;
  }
  .pt-title {
    box-sizing: border-box;
    height: 27.45px;
    width: 186px;
    box-sizing: border-box;
    border-bottom: 1px solid #EBEBEB; 
  }
  .pt-block{
    box-sizing: border-box;
    height: 28px;
    border-bottom: 1px solid #EBEBEB; 
  }
  .pt-time-block{
    box-sizing: border-box;
    height: 56px;
    border-right: 1px solid #EBEBEB;
    position: relative;
  }
  .pt-time-block::before{
    content: '';
    position: absolute;
    right: 0;
    bottom: 0px;
    height: 1px;
    width: 1.125rem;
    background-color: #EBEBEB;

  }
  .pt-time-tag{
    position: absolute;
    bottom: -8px;
    right: 1.130rem;
    z-index: 1;
  }
  .pt-bidtime {
    background-color: rgba(124, 179, 5, 0.4);
    position: absolute;
    width: 100%;
    box-sizing: border-box;
    padding-left: 5px;
  }
  .pt-bidtime::before{
    content: '';
    position: absolute;
    left: 0;
    height: 100%;
    top: left;
    width: 0.229rem;
    background-color: #7CB305;
  }
  .bidding-title{
    font-size: 1rem;
  }
  .bidding-time{
    font-size: 0.8rem;
  }
`;
