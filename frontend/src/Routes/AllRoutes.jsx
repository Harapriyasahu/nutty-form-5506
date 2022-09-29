import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Projects from "../Pages/Projects";
import Home from '../Pages/Home'
import Pricing from "../Pages/Pricing/Pricing";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/pricing" element={<Pricing/>} />
    </Routes>
  );
};

export default AllRoutes;
