import React from "react";
import useTitle from "../../Hook/DocumentTitle";
import Banner from "./Banner";
import BestPlan from "./BestPlan";
import HomeService from "./HomeService";
import SuccessfulClients from "./SuccessfulClients";

const Home = () => {
  useTitle("Home");
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
