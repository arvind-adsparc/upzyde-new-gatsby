import React from "react";
import { overviewData } from "./data";
import Layout from "../../components/Layout/layout";
import OtherPageOverview from "../../components/Overview/OtherPageOverview/otherPageOverview";

const Developers = () => {
  return (
    <Layout>
      <OtherPageOverview {...overviewData} />
    </Layout>
  );
};

export default Developers;
