import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import GlobalStyle from "./style";
import App from "./App";

const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <GlobalStyle />
    <App />
  </StrictMode>
);
