import React from "react";
import scrollFunction from "../../utlis/scrollFunction";
import "./benefits.scss";

const Benefits = ({
  heading,
  subHeading,
  columns,
  content,
  backgroundImage,
  cta,
}) => {
  return (
    <section
      className="benefits-container"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div></div>
      <div className="section-content inner-container">
        <h2>{heading}</h2>
        <h3>{subHeading}</h3>

        <div className={`content-container ${columns}`}>
          {content.map((info) => {
            return (
              <div key={info.title} className="card">
                <div className="card-title">{info.title}</div>
                <div className="card-txt">{info.text}</div>
              </div>
            );
          })}
        </div>

        <div className="cta">
          <button onClick={() => scrollFunction()} className="btn">
            {cta.text}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
