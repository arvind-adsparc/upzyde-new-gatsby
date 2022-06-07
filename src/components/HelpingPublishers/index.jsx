import React, { useRef } from "react";
import { Carousel } from "antd";
// import { StaticImage } from "gatsby-plugin-image";
import "./styles.scss";

const HelpingPublisher = () => {
  const slider = useRef(null);

  return (
    <section className="publisher-container">
      <h2>
        Helping publishers make the most{" "}
        <span className="sentence-break"> of their audience</span>
      </h2>

      <div className="inner-container">
        <div className="slider-container">
          <div className="prev-arrow" onClick={() => slider.current.prev()}>
            Prev
          </div>

          <Carousel effect="fade" dots={false} ref={slider}>
            <div className="slider">
              <div className="slider-title">Scalable Ad Solutions:</div>
              <div className="slider-description">
                Our exemplary tools and strategies ensure your goals are
                accomplished. Be it revenue generation or user acquisition, our
                turnkey solutions have the entire ad ecosystem covered.
              </div>
            </div>
            <div className="slider">
              <div className="slider-title">TRestScalable Ad Solutions:</div>
              <div className="slider-description">
                Our exemplary tools and strategies ensure your goals are
                accomplished. Be it revenue generation or user acquisition, our
                turnkey solutions have the entire ad ecosystem covered.
              </div>
            </div>
          </Carousel>
          <div className="next-arrow" onClick={() => slider.current.next()}>
            Next
          </div>
        </div>
      </div>
    </section>
  );
};

export default HelpingPublisher;
