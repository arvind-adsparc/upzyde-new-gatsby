import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import "./styles.scss";

const AdvertisersHero = () => {
  return (
    <section className="advertisers-hero">
      <div className="hero-image">
        <StaticImage
          src="https://res.cloudinary.com/dqove2qhg/image/upload/v1654172465/Upzyde/banner_image_1_nzglwu.webp"
          alt=""
          placeholder="none"
          loading="eager"
        />
      </div>

      <div className="content">
        <h2>Gaming is the new age source </h2>
        <h2>of Connection, Engagement </h2>
        <h2> and Entertainment</h2>
      </div>
    </section>
  );
};

export default AdvertisersHero;
