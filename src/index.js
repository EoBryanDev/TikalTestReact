import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { LoginContextProvider } from "./contexts/loginContext";

import axios from "axios";

import "./styles/global-styles.css";

import Navbar from "./components/Navbar";
import Home from "./templates/Home";
import Index from "./templates/Index";
import Login from "./templates/Login";

axios.defaults.baseURL = "https://testfrontpl.herokuapp.com/";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <LoginContextProvider>
      <Router >
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/index" element={<Index />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </Router>
    </LoginContextProvider>
  </React.StrictMode>
);
