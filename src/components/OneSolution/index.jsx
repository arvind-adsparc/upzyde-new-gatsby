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
            // src="https://res.cloudinary.com/dqove2qhg/image/upload/v1654842788/Upzyde/one_solution-icon-1_zociqr.webp"
            src="https://res.cloudinary.com/dqove2qhg/image/upload/v1655212342/Upzyde/one_solution-icon-1_1_ja8zsh.png"
            alt=""
            placeholder="none"
            width={120}
            // height={150}
          />

          <div className="card-txt">Game Streaming</div>
        </div>

        <div className="card">
          <StaticImage
            // src="https://res.cloudinary.com/dqove2qhg/image/upload/v1654842786/Upzyde/one_solution-icon-2_tz8afh.webp"
            src="https://res.cloudinary.com/dqove2qhg/image/upload/v1655212341/Upzyde/one_solution-icon-2_wtzk4m.png"
            alt=""
            placeholder="none"
            width={120}
          />

          <div className="card-txt">Console & PC</div>
        </div>

        <div className="card">
          <StaticImage
            // src="https://res.cloudinary.com/dqove2qhg/image/upload/v1654842785/Upzyde/one_solution-icon-3_k5f5qa.webp"
            src="https://res.cloudinary.com/dqove2qhg/image/upload/v1655212340/Upzyde/one_solution-icon-3_oaifoi.png"
            alt=""
            placeholder="none"
            width={120}
          />

          <div className="card-txt">Mobile & Esports</div>
        </div>
      </div>
    </section>
  );
};

export default OneSolution;
