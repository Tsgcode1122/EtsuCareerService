import React from "react";
import Hero from "../Component/Hero";
import Mission from "../Component/Mission";
import PlatformHighlight from "../Component/PlatformHighlight";
import UpcomingEvent from "../Component/UpcomingEvent";
import OneStop from "../Component/OneStop";
import Faqs from "../Component/Faqs";

const Home = () => {
  return (
    <>
      <Hero />
      <Mission />
      <PlatformHighlight />
      <UpcomingEvent />
      <Faqs />
      <OneStop />
    </>
  );
};

export default Home;
