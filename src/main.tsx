// Modules
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

// Store
import { functionalityStore } from "./store/functionality";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={functionalityStore}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
