import { createGlobalStyle } from 'styled-components';

export const GlobalStyle: any = createGlobalStyle`

  html{
    /* background-color: #F0F2F5; */
    /* font-size: 87.5% !important; */
    scroll-behavior: smooth;
  }
  
  body {
    /* font-size: 1rem !important; */
    overflow: hidden;
  }

  * {
    font-family: 'Source Sans Pro', sans-serif;
    /* font-family: -apple-system, BlinkMacSystemFont, sans-serif; */
    margin: 0;
    padding: 0%;
    box-sizing: border-box;
    scrollbar-width: thin; // firefox required
    scrollbar-color: #b4b7bb #F1f1f1; // firefox required

  }

  .sticky-top{
    position: sticky;
    top: 0;
  }

  .sticky-bottom{
    position: sticky;
    bottom: 0;
  }

    /* width */
  ::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: #F1F1F1; 
  }
  
  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: #b4b7bb; 
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: #A8A8A8; 
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
    width: .5rem !important;
    top: 0% !important;
    height: 100%;
    background-color: transparent;
    position: absolute;
    right: 0;
    z-index: 1;
    &:focus, &:active{
      background-color: #595959 !important;
    }
  }
  .resizer:hover{
    background-color: #d9d9d9 !important;
    filter: drop-shadow(4px 1px 3px black);
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
      -webkit-background-clip: border-box;
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

  .dropzone {
    box-sizing: border-box;
  }
  .dragging{
    opacity: 0.5;
    box-shadow: inset 0px -2px 0px #d9d9d9 !important;
    
  }
  .drag-enter{
    box-sizing: border-box;
    box-shadow: inset 0px -2px 0px #1665D8;
  }
  .avatar-text{
    img{
      object-fit: contain !important;
    }
  }

  .animated-show{
    transition: transform .2s ease;
    opacity: 1;
    transform: translateX(0);
  }

  .animated-hide{
    transition: .3s ease;
    opacity: 0;
    width: 0;
    height: 0;
    transform: translateX(100%);
  }

`;
