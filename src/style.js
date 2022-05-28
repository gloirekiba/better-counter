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
  padding-top: 1em;
  color: #333;
  font-family: "Poppins", sans-serif;
  background-color: #ecf0f3;
  }

  button {
  display: inline-block;
  border: none;
  background-color: transparent;
  cursor: pointer;
  }

  button:disabled {
  pointer-events: none;
  }
`;

export default GlobalStyle;
