import React from "react";
import { Routes, Route, } from "react-router-dom";
import Projects from "../Pages/Projects";
import Home from "../Pages/homepage/Home";
import Pricing from "../Pages/Pricing/Pricing";
import Signup from "../Pages/Signup/Signup";
import Sidenav from "../Components/sidenavbar/Sidenav";
import Login from "../Pages/Login/Login";
import Timesheet from "../Pages/Timesheet";

import Tags from "../Pages/Tags/Tags"
import Forgotpassword from "../Pages/ForgetPassword/ForgotPassword";
import ResetPassword from "../Pages/ForgetPassword/ResetPassword";


const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/pricing" element={<Pricing />} />

      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/forgotten_password" element={<Forgotpassword/>} />
      <Route path="/reset-password/:id/:token" element={<ResetPassword />} />

      <Route path='/app' element={<Sidenav />}>

          <Route path='' element={<Timesheet />} />
          <Route path='projects' element={<Projects />} /> 
          <Route path='tags' element={<Tags/>} />

      </Route>

    </Routes>
  );
};

export default AllRoutes;
