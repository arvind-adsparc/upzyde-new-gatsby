import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import "./styles.scss";

const OneSolution = () => {
  return (
    <section className="one-sol-container">
      <h2>One Solution that Serves All</h2>

      <div className="content">
        <div className="card">
          <StaticImage
            src="https://res.cloudinary.com/dqove2qhg/image/upload/v1654842788/Upzyde/one_solution-icon-1_zociqr.webp"
            alt=""
            placeholder="none"
            width={150}
            height={150}
          />

          <div className="card-txt">Game Streaming</div>
        </div>

        <div className="card">
          <StaticImage
            src="https://res.cloudinary.com/dqove2qhg/image/upload/v1654842786/Upzyde/one_solution-icon-2_tz8afh.webp"
            alt=""
            placeholder="none"
            width={150}
            height={150}
          />

          <div className="card-txt">Console & PC</div>
        </div>

        <div className="card">
          <StaticImage
            src="https://res.cloudinary.com/dqove2qhg/image/upload/v1654842785/Upzyde/one_solution-icon-3_k5f5qa.webp"
            alt=""
            placeholder="none"
            width={150}
            height={150}
          />

          <div className="card-txt">Mobile & Esports</div>
        </div>
      </div>
    </section>
  );
};

export default OneSolution;
