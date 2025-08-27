import React from "react";
import Hero from "../components/Hero";
import Service from "../components/Service";
import AboutSection from "../components/About";
import ScorlAnimtionCards from "../components/ScorlAnimtionCards";
import Review from "../components/Review";
import FaqSection from "../components/FaqSection";

const Home = () => {
  return (
    <div>
      <Hero />
      <ScorlAnimtionCards />
      <Service />
      <AboutSection />
      <FaqSection />
    </div>
  );
};

export default Home;
