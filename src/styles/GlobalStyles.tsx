import {createGlobalStyle} from "styled-components";

export const GlobalStyles = createGlobalStyle `
  *,
  *::before,
  *::after {    
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    margin: 0;    
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: #c4c3c3;
    font-family: 'Inter', sans-serif;
  }
`