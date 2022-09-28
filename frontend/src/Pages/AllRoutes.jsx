import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Projects from "./Projects";
import Home from './Home'

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projects" element={<Projects />} />
    </Routes>
  );
};

export default AllRoutes;
