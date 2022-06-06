import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import "./styles.scss";

const VideoAdHero = () => {
  return (
    <section className="videoAd-hero container">
      <div className="hero-image">
        <div className="mobile">
          <StaticImage
            src="https://res.cloudinary.com/dqove2qhg/image/upload/v1654518936/Upzyde/in_game-1_banner-1_1_1_1_n0u85o.png"
            alt=""
            placeholder="none"
          />
        </div>
        <div className="desktop">
          <StaticImage
            src="https://res.cloudinary.com/dqove2qhg/image/upload/v1654495670/Upzyde/in_game-1_banner-1_1_vydfe2.webp"
            alt=""
            placeholder="none"
          />
        </div>
      </div>
    </section>
  );
};

export default VideoAdHero;
