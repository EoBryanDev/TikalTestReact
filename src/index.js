import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./templates/Home";
import Index from "./templates/Index";
import Login from "./templates/Login";
import Navbar from "./components/Navbar";

import "./styles/global-styles.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/index" element={<Index />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
