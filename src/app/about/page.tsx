import React from "react";
import Hero from "./components/Hero";
import OurStory from "./components/OurStory";
import BattleTested from "./components/BattleTested";
import CoreValue from "./components/CoreValue";
import ProductStrategy from "./components/ProductStrategy";
import Founder from "./components/Founder";
import Team from "../(home)/components/Team";

const About = () => {
  return (
    <main>
      <Hero />
      <OurStory />
      <BattleTested />
      <CoreValue />
      <ProductStrategy />
      <Founder />
      <Team />
    </main>
  );
};

export default About;
