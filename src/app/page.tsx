"use client";
import About from "@/components/homeComponents/about/About";
import Hero from "@/components/homeComponents/headerComponent/Header";
import Services from "@/components/homeComponents/services/Services";
import SolutionCard from "@/components/homeComponents/solutionCard/SolutionCard";
import Footer from "@/components/shared/Footer";
import React from "react";

const Home = () => {
  return (
    <div className="">
      <Hero />
      <About />
      <Services />
      <SolutionCard />
      <Footer/>
    </div>
  );
};

export default Home;
