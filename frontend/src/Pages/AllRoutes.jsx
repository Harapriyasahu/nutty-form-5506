import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Projects from "./Projects";
import Home from './Home'
import Timesheet from "./Timesheet";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {/* <Route path="/projects" element={<Projects />} /> */}
      <Route path="/timesheet" element={<Timesheet />} />
    </Routes>
  );
};

export default AllRoutes;
