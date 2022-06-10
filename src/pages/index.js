import * as React from "react";
import Ecosystem from "../components/Ecosystem";
import HomeHero from "../components/Hero/homepage";
import Layout from "../components/Layout/layout";
import OneSolution from "../components/OneSolution";
import Partners from "../components/Partners/partners";
import AdvertisersAndDeveloers from "../components/Sections/advertisersAndDevelopers";
import PlayersAndDevelopers from "../components/Sections/playersAndDevelopers";
import Seo from "../components/Seo/seo";
import WhyChoose from "../components/WhyChoose";

const IndexPage = () => {
  return (
    <Layout page="homepage">
      <Seo
        url=""
        title="Upzyde"
        description="With Upzyde, experience  one-of-a-kind tech involving dynamically adaptive in-game ads for advertisers & app developers"
      />
      <HomeHero />
      <PlayersAndDevelopers />
      <WhyChoose />
      <OneSolution />
      <AdvertisersAndDeveloers />
      <Ecosystem />
      <Partners heading="Strategic Partners" />
    </Layout>
  );
};

export default IndexPage;
