import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import "./partners.scss";

const Partners = ({ heading }) => {
  return (
    <section className="partners-container">
      <h2>{heading}</h2>

      <div className="content">
        <StaticImage
          // src="https://res.cloudinary.com/dqove2qhg/image/upload/v1654076189/Upzyde/brand_logos_-img-1_miri5w.webp"
          src="https://res.cloudinary.com/dqove2qhg/image/upload/v1655211984/Upzyde/brand_logos_-img-1_rb0zpj.png"
          alt=""
          placeholder="none"
          width={800}
        />
      </div>
    </section>
  );
};

export default Partners;
