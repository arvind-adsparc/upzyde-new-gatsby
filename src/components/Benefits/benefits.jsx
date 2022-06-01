import React from "react";
import "./benefits.scss";

const Benefits = ({ heading, subHeading, content, cta }) => {
  return (
    <section className="benefits-container">
      <h2>{heading}</h2>
      <h3>{subHeading}</h3>

      <div className="content-container"></div>

      <div className="cta">
        <button className="btn">{cta.text}</button>
      </div>
    </section>
  );
};

export default Benefits;
