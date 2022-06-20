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
import Seo from "../../components/Seo/seo";

const Developers = (props) => {
  return (
    <Layout page="developers">
      <Seo
        url="https://res.cloudinary.com/dqove2qhg/image/upload/v1654087901/Upzyde/Banner_image_1_bshcup.webp"
        title=" Developers | Upzyde"
        description="Use Upzyde’s advanced tech to maximize revenue with in-app bidding. Our innovative ad monetization features safeguard your brand, improve UX, and serve you with maximum return on inventory."
      />
      <DeveloperHero active="developers" />
      <OtherPageOverview {...overviewData} />
      <Works />
      <Benefits {...benefitsData} />
      <Formats />
      <Partners heading="Trusted Partners" />
      <RequestDemoForm page={props.location.pathname} />
    </Layout>
  );
};

export default Developers;
