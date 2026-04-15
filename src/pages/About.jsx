import React from "react";
import AboutHero from "../components/About/AboutHero";
import AboutInfo from "../components/About/AboutInfo";
import VisionMission from "../components/About/VisionMission";
import AboutWithStats from "../components/About/AboutWithStats";

import PremiumIntro from "../components/About/PremiumIntro";
import OwnerSection from "../components/About/OwnerSection";
import ProcessCircleSection from "../components/About/ProcessCircleSection";
import Graph from "../components/About/Graph";

const About = () => {
  return (
    <div>
      <AboutHero />
      <ProcessCircleSection/>
      <OwnerSection />
      <AboutInfo />
      <VisionMission />
      <AboutWithStats />
      <PremiumIntro />
      <Graph/>
    </div>
  );
};

export default About;
