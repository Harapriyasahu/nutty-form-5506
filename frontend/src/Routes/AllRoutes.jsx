import React from "react";
import { Routes, Route, } from "react-router-dom";
import Projects from "../Pages/Projects";
import Home from "../Pages/homepage/Home";
import Pricing from "../Pages/Pricing/Pricing";
import Signup from "../Pages/Signup/Signup";
import Sidenav from "../Components/sidenavbar/Sidenav";
import Login from "../Pages/Login/Login";


import Tags from "../Pages/Tags/Tags"
import Forgotpassword from "../Pages/ForgetPassword/ForgotPassword";
import ResetPassword from "../Pages/ForgetPassword/ResetPassword";
import Timesheet from "../Pages/TimeSheet/Timesheet";
import Error from "../Pages/Error";



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

          <Route path='timesheet' element={<Timesheet />} />
          <Route path='projects' element={<Projects />} /> 
          <Route path='tags' element={<Tags />} />

      </Route>
      <Route path="*" element={<Error />} />
    </Routes>
  );
};

export default AllRoutes;
