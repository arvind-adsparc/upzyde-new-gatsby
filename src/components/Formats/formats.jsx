import React from "react";
import Lazyload from "react-lazyload";
import { StaticImage } from "gatsby-plugin-image";
import "./formats.scss";

const Formats = () => {
  return (
    <Lazyload once>
      <section className="formats-container">
        <h2>Ad Formats</h2>

        <div className="inner-container">
          <div className="slider-container"></div>

          <div className="content-container">
            <div className="content-txt">
              Our non-intrusive ad formats integrate IAB-supported ad placements
              for display, audio & video, custom ads, and numerous streaming
              prospects.
            </div>

            <div className="content-images">
              <StaticImage
                src="https://res.cloudinary.com/dqove2qhg/image/upload/v1654151197/Upzyde/Group_1_ota528.webp"
                alt=""
                placeholder="none"
              />
            </div>
          </div>
        </div>
      </section>
    </Lazyload>
  );
};

export default Formats;
