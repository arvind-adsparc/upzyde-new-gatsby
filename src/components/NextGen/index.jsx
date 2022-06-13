import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import "./styles.scss";

const NextGen = () => {
  return (
    <section id="scroll-section" className="next-gen-container">
      <div className="content">
        <div className="group">
          <div className="card-head">
            The <span></span>Next-Gen <span></span> In-Game <span></span>{" "}
            Advertising Solution
          </div>

          <div className="card-content">
            <p>
              Don’t just simply monetize. <span></span> Engage in S.M.A.R.T
              monetization!
            </p>

            <p>
              Maximize Revenue. Boost User <span></span> Engagement. Improve
              Retention.
            </p>

            <p>
              Choose from an array of non-intrusive ad <span></span> units that
              fit right into your gameplay and <span></span> balance your
              in-game economy.
            </p>

            <div className="cta">
              <button className="btn">Start Monetizing</button>
            </div>
          </div>
        </div>

        <div className="vr-headset">
          <StaticImage
            src="https://res.cloudinary.com/dqove2qhg/image/upload/v1654867352/Upzyde/moving_icon-1_1_sxmobw.webp"
            alt=""
            placeholder="none"
            width={180}
          />
        </div>

        <div className="triangle">
          <StaticImage
            src="https://res.cloudinary.com/dqove2qhg/image/upload/v1654867690/Upzyde/moving_icon-4_kaooyu.webp"
            alt=""
            placeholder="none"
            width={180}
          />
        </div>

        <div className="plus">
          <StaticImage
            src="https://res.cloudinary.com/dqove2qhg/image/upload/v1654868051/Upzyde/moving_icon-2_hjodjh.webp"
            alt=""
            placeholder="none"
            width={80}
          />
        </div>

        <div className="controller">
          <StaticImage
            src="https://res.cloudinary.com/dqove2qhg/image/upload/v1654867874/Upzyde/moving_icon-3_1_io6wqk.webp"
            alt=""
            placeholder="none"
            width={180}
          />
        </div>
      </div>
    </section>
  );
};

export default NextGen;
