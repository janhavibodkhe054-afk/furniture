import React from "react";
import AboutHero from "../components/About/AboutHero";
import AboutInfo from "../components/About/AboutInfo";
import VisionMission from "../components/About/VisionMission";
import AboutWithStats from "../components/About/AboutWithStats";

import PremiumIntro from "../components/About/PremiumIntro";
import OwnerSection from "../components/About/OwnerSection";

const About = () => {
  return (
    <div>
      <AboutHero />
      <OwnerSection />
      <AboutInfo />
      <VisionMission />
      <AboutWithStats />
      <PremiumIntro />
    </div>
  );
};

export default About;
