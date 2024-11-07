import React from "react";
import Hero from "../Component/Hero";
import Mission from "../Component/Mission";
import PlatformHighlight from "../Component/PlatformHighlight";
import UpcomingEvent from "../Component/UpcomingEvent";
import OneStop from "../Component/OneStop";
import Faqs from "../Component/Faqs";
import CareerExploration from "../Component/CareerExploration";
import FeaturedResources from "../Component/FeaturedResources";

const Home = () => {
  return (
    <>
      <Hero />
      <Mission />
      <PlatformHighlight />
      <UpcomingEvent />
      <CareerExploration />
      <FeaturedResources />
      <Faqs />
      <OneStop />
    </>
  );
};

export default Home;
