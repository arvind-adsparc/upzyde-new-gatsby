import React from "react";
import Lazyload from "react-lazyload";
import { Carousel } from "antd";
import { StaticImage } from "gatsby-plugin-image";
import "./formats.scss";

const Formats = () => {
  return (
    <Lazyload once>
      <section className="formats-container">
        <h2>Ad Formats</h2>

        <div className="inner-container">
          <div className="slider-container">
            <Carousel autoplay effect="fade" dotPosition="right">
              <div className="slider">
                <img
                  src="https://res.cloudinary.com/dqove2qhg/image/upload/v1654243593/Upzyde/iphone-_1_w43h6z.webp"
                  alt=""
                  placeholder="none"
                />
              </div>

              <div className="slider">
                <img
                  src="https://res.cloudinary.com/dqove2qhg/image/upload/v1654245035/Upzyde/iphone-empty-1_1_asqoxs.webp"
                  alt=""
                  placeholder="none"
                />
              </div>
            </Carousel>
          </div>

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
