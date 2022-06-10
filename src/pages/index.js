import * as React from "react";
import Ecosystem from "../components/Ecosystem";
import Layout from "../components/Layout/layout";
import OneSolution from "../components/OneSolution";
import Partners from "../components/Partners/partners";
import Seo from "../components/Seo/seo";

const IndexPage = () => {
  return (
    <Layout page="homepage">
      <Seo
        url=""
        title="Upzyde"
        description="With Upzyde, experience  one-of-a-kind tech involving dynamically adaptive in-game ads for advertisers & app developers"
      />
      <OneSolution />
      <Ecosystem />
      <Partners heading="Strategic Partners" />
    </Layout>
  );
};

export default IndexPage;
