import Header from "@/shared/widgets/header/header";
import React from "react";
import Banner from "./features/Banner";
import Branding from "./features/Branding";

const Home = () => {
  return (
    <div>
      <Header />
      <Banner />
      <Branding/>
    </div>
  );
};

export default Home;
