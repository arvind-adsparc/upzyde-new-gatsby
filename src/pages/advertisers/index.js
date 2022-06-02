import React from "react";
import {
  overviewData,
  benefitsData,
} from "../../components/data/advertisers/data";
import Layout from "../../components/Layout/layout";
import AdvertisersHero from "../../components/Hero/advertisers";
import OtherPageOverview from "../../components/Overview/OtherPageOverview/otherPageOverview";
import Works from "../../components/Works/works";
import Partners from "../../components/Partners/partners";
import RequestDemoForm from "../../components/Forms/requestDemo";
import Benefits from "../../components/Benefits/benefits";

const Advertisers = () => {
  return (
    <Layout page="advertisers">
      <AdvertisersHero />
      <OtherPageOverview {...overviewData} />
      <Works />
      <Benefits {...benefitsData} />
      <Partners />
      <RequestDemoForm />
    </Layout>
  );
};

export default Advertisers;
