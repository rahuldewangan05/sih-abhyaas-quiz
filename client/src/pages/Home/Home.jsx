import React from "react";
import "./Home.css";
import Navbar from "../../components/Navbar/Navbar";
import Hero from "../../components/Hero/Hero";
import Features from "../../components/Features/Features";
import Work from "../../components/Work/Work";

function Home() {
  return (
    <div>
      {/* <Navbar /> */}
      <Hero />
      <Features />
      <Work />

    </div>
  );
}

export default Home;
