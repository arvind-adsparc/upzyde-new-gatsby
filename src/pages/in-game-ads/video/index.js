import React from "react";
import HelpingPublisher from "../../../components/HelpingPublishers";
import VideoAdHero from "../../../components/Hero/inGameAds/video";
import Layout from "../../../components/Layout/layout";
import OtherPageOverview from "../../../components/Overview/OtherPageOverview/otherPageOverview";
import Seo from "../../../components/Seo/seo";

export const overviewData = {
  content:
    "<p>With Upzyde’s comprehensive in-game monetization solutions, we help publishers grow revenues, without compromising on player experience. Work with numerous demand sources and ad networks across the world to maximize the value of every impression. </p>",

  cta: {
    text: "Get Started",
    link: "",
  },
};

const VideoAds = () => {
  return (
    <Layout page="inGameAds">
      <Seo
        url="https://res.cloudinary.com/dqove2qhg/image/upload/v1654495670/Upzyde/in_game-1_banner-1_1_vydfe2.webp"
        title=" Video - In Game Ads | Upzyde"
        description="With Upzyde’s comprehensive in-game monetization solutions, we help publishers grow revenues, without compromising on player experience. Work with numerous demand sources and ad networks across the world to maximize the value of every impression."
      />
      <VideoAdHero />
      <OtherPageOverview {...overviewData} />
      <HelpingPublisher />
    </Layout>
  );
};

export default VideoAds;
