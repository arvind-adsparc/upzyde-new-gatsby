import React from "react";
// import { StaticImage } from "gatsby-plugin-image";
import scrollFunction from "../../utlis/scrollFunction";

import "./works.scss";

const Works = () => {
  return (
    <section className="works-container">
      <h2>Here’s How it Works</h2>

      <div className="content">
        <img
          // src="https://res.cloudinary.com/dqove2qhg/image/upload/v1655709768/Upzyde/ecosystem_sqbazq.webp"
          src="https://res.cloudinary.com/dqove2qhg/image/upload/v1659607077/Upzyde/Eco_system-1_rrbbtq.webp"
          alt="videp"
          title="video"
          placeholder="none"
        />
      </div>

      <div className="cta">
        <button onClick={() => scrollFunction()} className="btn">
          Get Started
        </button>
      </div>
    </section>
  );
};

export default Works;
