import React from "react";

import { StaticImage } from "gatsby-plugin-image";
import "./styles.scss";
import { Link } from "gatsby";

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
              <Link to="/contact-us">
                <button className="btn">Start Monetizing</button>
              </Link>
            </div>
          </div>
        </div>

        <div className="vr-headset icons">
          <StaticImage
            src="https://res.cloudinary.com/dqove2qhg/image/upload/v1655536580/Upzyde/moving_icon-1_1_uycmuv.webp"
            // src="https://res.cloudinary.com/dqove2qhg/image/upload/v1655193543/Upzyde/moving_icon-1_bmbv7a.webp"
            alt=""
            placeholder="none"
            width={180}
          />
        </div>

        <div className="triangle icons">
          <StaticImage
            src="https://res.cloudinary.com/dqove2qhg/image/upload/v1655193590/Upzyde/moving_icon-4_qcpfcw.webp"
            alt=""
            placeholder="none"
            width={180}
          />
        </div>

        <div className="plus icons">
          <StaticImage
            // src="https://res.cloudinary.com/dqove2qhg/image/upload/v1655536408/Upzyde/moving_icon-2_bi3dl8.webp"
            src="https://res.cloudinary.com/dqove2qhg/image/upload/v1655710004/Upzyde/moving_icon-2_ajnagd.png"
            // src="https://res.cloudinary.com/dqove2qhg/image/upload/v1654868051/Upzyde/moving_icon-2_hjodjh.webp"
            alt=""
            placeholder="none"
            width={80}
          />
        </div>

        <div className="controller icons">
          <StaticImage
            src="https://res.cloudinary.com/dqove2qhg/image/upload/v1655536508/Upzyde/moving_icon-3_1_ai2da5.webp"
            // src="https://res.cloudinary.com/dqove2qhg/image/upload/v1655193589/Upzyde/moving_icon-3_rvmgiq.webp"
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
