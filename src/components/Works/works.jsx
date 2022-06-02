import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import "./works.scss";

const Works = () => {
  return (
    <section className="works-container">
      <h2>Here’s How it Works</h2>

      <div className="content">
        <StaticImage
          src="https://res.cloudinary.com/dqove2qhg/image/upload/v1654147756/Upzyde/video_dummy-1_1_wvvxjf.webp"
          alt="videp"
          title="video"
          placeholder="none"
        />
      </div>

      <div className="cta">
        <button className="btn">Get Started</button>
      </div>
    </section>
  );
};

export default Works;
