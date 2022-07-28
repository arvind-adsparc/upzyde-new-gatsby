import React from "react";
import HelpingPublisher from "../../../components/HelpingPublishers";
import AudioAdHero from "../../../components/Hero/inGameAds/audio";
import JoinUs from "../../../components/JoinUs";
import Layout from "../../../components/Layout/layout";
import OtherPageOverview from "../../../components/Overview/OtherPageOverview/otherPageOverview";
import Revenue from "../../../components/Revenue";
import Seo from "../../../components/Seo/seo";

export const overviewData = {
  content:
    "<p>Reach a diverse and engaged audience with <span class='line-break'></span> non-intrusive in-game audio ads. </p>",
  cta: {
    text: "Sounds Good",
    link: "",
  },
};

const publisherContent = [
  {
    title: "Non-Intrusive Advertisements",
    description:
      "Deploy powerful yet non-intrusive audio advertisements for your players without hampering the gaming experience.",
  },
  {
    title: "Increase Revenues",
    description:
      "Build a bigger and better audience while maximizing engagement and ad revenues with game-friendly audio ads",
  },
  {
    title: "Limitless Reach",
    description:
      "Join Upzyde to connect with premium advertisers around the globe that pay top-of-the-market rates for your ad inventory.",
  },
];

const AudioAds = () => {
  return (
    <Layout page="inGameAds">
      <Seo
        url="https://res.cloudinary.com/dqove2qhg/image/upload/v1654495670/Upzyde/in_game-1_banner-1_1_vydfe2.webp"
        title=" Audio - In Game Ads | Upzyde"
        description="With Upzyde’s comprehensive in-game monetization solutions, we help publishers grow revenues, without compromising on player experience. Work with numerous demand sources and ad networks across the world to maximize the value of every impression."
      />
      <AudioAdHero />
      <OtherPageOverview {...overviewData} />
      <HelpingPublisher publisherContent={publisherContent} background="blue" />
      <JoinUs />
      <Revenue />
    </Layout>
  );
};

export default AudioAds;
