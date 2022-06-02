import React from "react";
import { overviewData } from "../../components/data/advertisers/data";
import Layout from "../../components/Layout/layout";
import AdvertisersHero from "../../components/Hero/advertisers";
import OtherPageOverview from "../../components/Overview/OtherPageOverview/otherPageOverview";
import Works from "../../components/Works/works";

const Advertisers = () => {
  return (
    <Layout page="advertisers">
      <AdvertisersHero />
      <OtherPageOverview {...overviewData} />
      <Works />
    </Layout>
  );
};

export default Advertisers;
