import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import "./styles.scss";

const AudioAdHero = () => {
  return (
    <section className="videoAd-hero">
      <div className="hero-image">
        <img
          src="https://res.cloudinary.com/dqove2qhg/image/upload/v1658922581/Upzyde/banner_image_1_fg5elt.png"
          alt=""
          placeholder="none"
          objectFit="fill"
        />
      </div>

      <div className="content">
        <h2>In-game audio</h2>
        <h2>advertising</h2>
      </div>
    </section>
  );
};

export default AudioAdHero;
