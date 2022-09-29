import React from "react";
import { Routes, Route,} from "react-router-dom";
import Projects from "../Pages/Projects";
import Home from '../Pages/Home'

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projects" element={<Projects />} />
    </Routes>
  );
};

export default AllRoutes;
