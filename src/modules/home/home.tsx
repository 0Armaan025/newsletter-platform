import Header from "@/shared/widgets/header/header";
import React from "react";
import Banner from "./elements/Banner";
import Branding from "./elements/Branding";
import Benefits from "./elements/Benefits";
import FeatureHighlight from "./elements/Feature.highlight";
import Pricing from "./elements/Pricing";
import Footer from "@/shared/widgets/footer/Footer";

const Home = () => {
  return (
    <div>
      <Header />
      <Banner />
      <Branding />
      <Benefits />
      <FeatureHighlight />
      <Pricing />
      <Footer />
    </div>
  );
};

export default Home;
