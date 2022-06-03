import React from "react";
import Lazyload from "react-lazyload";
import { Carousel } from "antd";
import { StaticImage } from "gatsby-plugin-image";
import "./formats.scss";

const contentStyle = {
  height: "160px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};

const Formats = () => {
  return (
    <Lazyload once>
      <section className="formats-container">
        <h2>Ad Formats</h2>

        <div className="inner-container">
          <div className="slider-container">
            <Carousel dotPosition="right">
              <div>
                <h3 style={contentStyle}>1</h3>
              </div>
              <div>
                <h3 style={contentStyle}>2</h3>
              </div>
              <div>
                <h3 style={contentStyle}>3</h3>
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
