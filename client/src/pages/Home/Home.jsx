import React from "react";
import "./Home.css";
import Navbar from "../../components/Navbar/Navbar";
import Hero from "../../components/Hero/Hero";
import Features from "../../components/Features/Features";
import Work from "../../components/Work/Work";
import Footer from "../../Footer/Footer";

function Home() {
  return (
    <div>
      {/* <Navbar /> */}
      <Hero />
      <Features />
      <Work />
      <Footer />
    </div>
  );
}

export default Home;
