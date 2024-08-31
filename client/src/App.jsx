import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Login from "./auth/LogIn/Login";
import Signup from "./auth/SignUp/Signup";

function App() {
  return (
    <div className="font-Poppins">
      <Home />
      {/* <Login /> */}
      {/* <Signup /> */}
    </div>
  );
}

export default App;
