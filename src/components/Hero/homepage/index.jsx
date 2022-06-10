import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import "./styles.scss";

const HomeHero = () => {
  return (
    <section className="homepage-hero">
      <div className="hero-image">
        <StaticImage
          src="https://res.cloudinary.com/dqove2qhg/image/upload/v1654849630/Upzyde/Header_banner_2_ovj3a0.webp"
          alt=""
          placeholder="none"
          loading="eager"
        />
      </div>

      {/* <div className="content">
        <h2>Higher Monetization.</h2>
        <h2>Better Retention.</h2>
        <h2>Incremental Revenue.</h2>
      </div> */}
    </section>
  );
};

export default HomeHero;
