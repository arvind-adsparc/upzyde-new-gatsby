import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import "./styles.scss";

const VideoAdHero = () => {
  return (
    <section className="videoAd-hero">
      <div className="hero-image">
        <StaticImage
          src="https://res.cloudinary.com/dqove2qhg/image/upload/v1654495670/Upzyde/in_game-1_banner-1_1_vydfe2.webp"
          alt=""
          placeholder="none"
        />
      </div>
    </section>
  );
};

export default VideoAdHero;
