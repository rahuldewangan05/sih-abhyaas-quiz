import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Login from "./auth/LogIn/Login";
import Signup from "./auth/SignUp/Signup";
import ForgotPassword from "./pages/ForgotPassword/ForgotPassword"; // Import ForgotPassword component
import VerifyOtp from "./pages/ForgotOtpVerify/ForgotOtpVerify"; // Import VerifyOtp component
import ResetPassword from "./pages/ResetPassword/ResetPassword"; // Import ResetPassword component
import Layout from "./Layout";

function App() {
  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />{" "}
        {/* Forgot Password Route */}
        <Route path="/verify-otp" element={<VerifyOtp />} />{" "}
        {/* Verify OTP Route */}
        <Route path="/reset-password" element={<ResetPassword />} />{" "}
        {/* Reset Password Route */}
        {/* Protected Routes with Layout */}
        <Route element={<Layout />}>
          <Route path="/home" element={<Home />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
