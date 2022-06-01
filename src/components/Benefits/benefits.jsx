import React from "react";
import "./benefits.scss";

const Benefits = ({ heading, subHeading, content, cta }) => {
  return (
    <section className="benefits-container">
      <div className="inner-container">
        <h2>{heading}</h2>
        <h3>{subHeading}</h3>

        <div className="content-container ">
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
          <button className="btn">{cta.text}</button>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
