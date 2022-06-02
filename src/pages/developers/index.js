import React from "react";
import {
  overviewData,
  benefitsData,
} from "../../components/data/developers/data";
import Layout from "../../components/Layout/layout";
import OtherPageOverview from "../../components/Overview/OtherPageOverview/otherPageOverview";
import Partners from "../../components/Partners/partners";
import Works from "../../components/Works/works";
import Benefits from "../../components/Benefits/benefits";
import DeveloperHero from "../../components/Hero/developer";
import Formats from "../../components/Formats/formats";
import RequestDemoForm from "../../components/Forms/requestDemo";

const Developers = () => {
  return (
    <Layout page="developers">
      <DeveloperHero active="developers" />
      <OtherPageOverview {...overviewData} />
      <Works />
      <Benefits {...benefitsData} />
      <Formats />
      <Partners />
      <RequestDemoForm />
    </Layout>
  );
};

export default Developers;
