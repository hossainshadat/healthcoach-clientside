import React from "react";
import Banner from "./Banner";
import BestPlan from "./BestPlan";
import HomeService from "./HomeService";
import SuccessfulClients from "./SuccessfulClients";

const Home = () => {
  return (
    <div>
      <Banner />
      <HomeService />
      <SuccessfulClients />
      <BestPlan />
    </div>
  );
};

export default Home;
