import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import GlobalStyle from "./style.global";
import App from "./App";

const root = createRoot(document.getElementById("root") as HTMLDivElement);

root.render(
  <StrictMode>
    <GlobalStyle />
    <App />
  </StrictMode>
);
