import React from "react";
import Lazyload from "react-lazyload";
import "./benefits.scss";

const Benefits = ({ heading, subHeading, content, backgroundImage, cta }) => {
  return (
    <Lazyload once>
      <section
        className="benefits-container"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div></div>
        <div className="section-content inner-container">
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
    </Lazyload>
  );
};

export default Benefits;
