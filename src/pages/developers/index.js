import React from "react";
import { overviewData, benefitsData, partnersdata } from "./data";
import Layout from "../../components/Layout/layout";
import OtherPageOverview from "../../components/Overview/OtherPageOverview/otherPageOverview";
import Partners from "../../components/Partners/partners";
import Works from "../../components/Works/works";
import Benefits from "../../components/Benefits/benefits";
import DeveloperHero from "../../components/Hero/developerHero";

const Developers = () => {
  return (
    <Layout>
      <DeveloperHero active="developers" />
      <OtherPageOverview {...overviewData} />
      <Works />
      <Benefits {...benefitsData} />
      <Partners {...partnersdata} />
    </Layout>
  );
};

export default Developers;
