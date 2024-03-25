import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import ToDosContextWrapper from "./context/ToDosContextWrapper.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <ToDosContextWrapper>
        <App />
      </ToDosContextWrapper>
    </BrowserRouter>
  </React.StrictMode>
);
