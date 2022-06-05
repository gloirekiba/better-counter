import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *,
  ::before,
  ::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    font-size: 62.5%;
  }

  body {
    padding: 1em 0 12em;
    color: #333;
    font-family: "Poppins", sans-serif;
    background-color: #171717;
  }

  button {
    display: inline-block;
    border: none;
    background-color: transparent;
    cursor: pointer;
  }

  button:disabled {
    cursor: not-allowed ;
    color: gray;
  }
`;

export default GlobalStyle;
