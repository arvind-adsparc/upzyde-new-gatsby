import React from "react";
import { overviewData, partnersdata } from "./data";
import Layout from "../../components/Layout/layout";
import OtherPageOverview from "../../components/Overview/OtherPageOverview/otherPageOverview";
import Partners from "../../components/Partners/partners";
import Works from "../../components/Works/works";

const Developers = () => {
  return (
    <Layout>
      <OtherPageOverview {...overviewData} />
      <Works />
      <Partners {...partnersdata} />
    </Layout>
  );
};

export default Developers;
