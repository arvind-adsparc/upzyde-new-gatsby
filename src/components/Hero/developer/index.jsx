import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import "./styles.scss";

const DeveloperHero = () => {
  return (
    <section className="developer-hero container">
      <div className="hero-image">
        <StaticImage
          src="https://res.cloudinary.com/dqove2qhg/image/upload/v1654087901/Upzyde/Banner_image_1_bshcup.webp"
          alt=""
          placeholder="none"
        />
      </div>

      <div className="content">
        <h2>Higher Monetization.</h2>
        <h2>Better Retention.</h2>
        <h2>Incremental Revenue.</h2>
      </div>
    </section>
  );
};

export default DeveloperHero;
