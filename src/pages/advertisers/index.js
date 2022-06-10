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
import Seo from "../../components/Seo/seo";
import Formats from "../../components/Formats/formats";

const Advertisers = () => {
  return (
    <Layout page="advertisers">
      <Seo
        url="https://res.cloudinary.com/dqove2qhg/image/upload/v1654172465/Upzyde/banner_image_1_nzglwu.webp"
        title="Advertisers | Upzyde"
        description="Explore the S.M.A.R.T ways to connect to your audience via native ad placements blended intelligently into gameplay. Experience a cohesive advertising campaign across multiple in-game & in-stream ad formats (display/video/audio)."
      />
      <AdvertisersHero />
      <OtherPageOverview {...overviewData} />
      <Works />
      <Benefits {...benefitsData} />
      <Formats />
      <Partners heading="Trusted Partners" />
      <RequestDemoForm />
    </Layout>
  );
};

export default Advertisers;
