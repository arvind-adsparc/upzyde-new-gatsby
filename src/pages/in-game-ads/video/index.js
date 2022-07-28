import React from "react";
import HelpingPublisher from "../../../components/HelpingPublishers";
import VideoAdHero from "../../../components/Hero/inGameAds/video";
import Layout from "../../../components/Layout/layout";
import OtherPageOverview from "../../../components/Overview/OtherPageOverview/otherPageOverview";
import Revenue from "../../../components/Revenue";
import Seo from "../../../components/Seo/seo";

export const overviewData = {
  content:
    "<p>With Upzyde’s comprehensive in-game monetization solutions, we help publishers grow revenues, without compromising on player experience. Work with numerous demand sources and ad networks across the world to maximize the value of every impression. </p>",

  cta: {
    text: "Get Started",
    link: "",
  },
};

const publisherContent = [
  {
    title: "Scalable Ad Solutions",
    description:
      " Our exemplary tools and strategies ensure your goals are accomplished. Be it revenue generation or user acquisition, our turn key solutions have the entire ad ecosystem covered.",
  },
  {
    title: "Earn More With Your Games",
    description:
      "Upzyde’s monetization solutions help you make the most of your games and convert them into revenue-generating businesses. With innovative ad formats and advanced technology, we ensure you earn higher CPMs for your ad inventory.",
  },
  {
    title: "Know Your User",
    description:
      "With real-time reporting and tracking the Upzyde dashboard enables publishers to deep-dive into analytics about user engagement, ad performance, and more. Know your user in detail and optimize your ads on the go to provide an unmatched gaming experience.",
  },
  {
    title: "Ads For Everyone",
    description:
      " Not every game is the same, and not every user should see the same ad. Our innovative monetization strategies and diverse ad offerings help you choose ad types best suited to your playerbase.",
  },
];

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
      <HelpingPublisher publisherContent={publisherContent} />
      <Revenue />
    </Layout>
  );
};

export default VideoAds;
