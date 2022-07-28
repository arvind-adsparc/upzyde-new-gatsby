import React, { useRef } from "react";
import { Carousel } from "antd";
// import { StaticImage } from "gatsby-plugin-image";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import "./styles.scss";

const HelpingPublisher = ({ publisherContent, background }) => {
  console.log("publisherContent", publisherContent);
  const slider = useRef(null);

  return (
    <section
      style={{ backgroundColor: `${background ? background : ""}` }}
      className="publisher-container"
    >
      <div className="inner-container">
        <h2>
          Helping publishers make the most{" "}
          <span className="sentence-break"> of their audience </span>
        </h2>
      </div>

      <div className="inner-container">
        <div className="slider-container slider-desktop">
          <div
            className="prev-arrow arrow"
            onClick={() => slider.current.prev()}
          >
            <LeftOutlined />
          </div>

          <Carousel effect="fade" dots={false} ref={slider}>
            {publisherContent.map((info) => {
              return (
                <div
                  key={info.title}
                  className={background ? "slider blueBG" : "slider"}
                >
                  <div className="slider-title">{info.title}</div>
                  <div className="slider-description">{info.description}</div>
                </div>
              );
            })}
          </Carousel>
          <div
            className="next-arrow arrow"
            onClick={() => slider.current.next()}
          >
            <RightOutlined />
          </div>
        </div>

        <div className="slider-mobile">
          <Carousel effect="fade" autoplay>
            {publisherContent.map((info) => {
              return (
                <div key={info.title} className="slider">
                  <div className="slider-title">{info.title}</div>
                  <div className="slider-description">{info.description}</div>
                </div>
              );
            })}
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default HelpingPublisher;
