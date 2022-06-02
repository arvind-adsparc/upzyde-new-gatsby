import React from "react";
import {
  overviewData,
  benefitsData,
  partnersdata,
} from "../../components/data/developers/data";
import Layout from "../../components/Layout/layout";
import OtherPageOverview from "../../components/Overview/OtherPageOverview/otherPageOverview";
import Partners from "../../components/Partners/partners";
import Works from "../../components/Works/works";
import Benefits from "../../components/Benefits/benefits";
import DeveloperHero from "../../components/Hero/developerHero";
import Formats from "../../components/Formats/formats";
import RequestDemoForm from "../../components/Forms/requestDemo";

const Developers = () => {
  return (
    <Layout>
      <DeveloperHero active="developers" />
      <OtherPageOverview {...overviewData} />
      <Works />
      <Benefits {...benefitsData} />
      <Formats />
      <Partners {...partnersdata} />
      <RequestDemoForm />
    </Layout>
  );
};

export default Developers;
