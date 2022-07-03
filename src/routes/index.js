import React, { Fragment } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Navbar from "../components/Navbar/index";
import Home from "../templates/Home";
import Index from "../templates/Index";
import Login from "../templates/Login";

import useLogin from "../hooks/useLogin";

const Private = ({ Item }) => {
  const { authenticated } = useLogin();
  return authenticated ? <Item /> : <Login />;
};

const RoutesApp = () => {
  return (
    <BrowserRouter>
      <Fragment>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/index" element={<Private Item={Index} />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </Fragment>
    </BrowserRouter>
  );
};

export default RoutesApp;
