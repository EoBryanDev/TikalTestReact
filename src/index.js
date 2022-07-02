import React from "react";
import ReactDOM from "react-dom/client";

import { LoginContextProvider } from "./contexts/loginContext";
import RoutesApp from "./routes/index";

import axios from "axios";

import "./styles/global-styles.css";


axios.defaults.baseURL = "https://testfrontpl.herokuapp.com/";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <LoginContextProvider>
      <RoutesApp />
    </LoginContextProvider>
  </React.StrictMode>
);
