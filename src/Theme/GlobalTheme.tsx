import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  *, *::after, *::before {
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
  }
  
  html {
    font-family: 'Roboto', sans-serif;
  }

  h1 {
    font-size: 2.25rem;
  }

  p {
    line-height: 1.5;
    font-size: 1.3rem;
  }

  h1, p, a {
    color: #333;
  }
`