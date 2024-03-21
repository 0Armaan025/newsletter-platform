import Header from "@/shared/widgets/header/header";
import React from "react";
import Banner from "./features/Banner";
import Branding from "./features/Branding";
import Benefits from "./features/Benefits";
import FeatureHighlight from "./features/Feature.highlight";

const Home = () => {
  return (
    <div>
      <Header />
      <Banner />
      <Branding />
      <Benefits />
      <FeatureHighlight />
    </div>
  );
};

export default Home;
