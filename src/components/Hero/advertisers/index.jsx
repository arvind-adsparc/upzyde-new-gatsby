import React from "react";
import { StaticImage } from "gatsby-plugin-image";
// import "./styles.scss";

const AdvertisersHero = () => {
  return (
    <section className="advertisers-hero container">
      <div className="hero-image">
        <StaticImage
          src="https://res.cloudinary.com/dqove2qhg/image/upload/v1654172465/Upzyde/banner_image_1_nzglwu.webp"
          alt=""
          placeholder="none"
        />
      </div>
    </section>
  );
};

export default AdvertisersHero;
