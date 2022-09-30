import React from "react";
import { Routes, Route,} from "react-router-dom";
import Projects from "../Pages/Projects";
import Home from '../Pages/homepage/Home'

import Pricing from "../Pages/Pricing/Pricing";

import Signup from "../Pages/Signup/Signup";
import Login from "../Pages/Login/Login";


const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projects" element={<Projects />} />

      <Route path="/pricing" element={<Pricing/>} />

      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />

    </Routes>
  );
};

export default AllRoutes;
