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
          objectFit="fill"
        />
      </div>

      <div className="content">
        <h2> Engaging AD experiences </h2>
        <h2> via in-game display ADs </h2>
      </div>
    </section>
  );
};

export default VideoAdHero;
