import React, { useRef } from "react";
import { Carousel } from "antd";
// import { StaticImage } from "gatsby-plugin-image";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import "./styles.scss";

const HelpingPublisher = () => {
  const slider = useRef(null);

  return (
    <section className="publisher-container">
      <div className="inner-container">
        <h2>
          Helping publishers make the most{" "}
          <span className="sentence-break"> of their audience</span>
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
            <div className="slider">
              <div className="slider-title">Scalable Ad Solutions</div>
              <div className="slider-description">
                Our exemplary tools and strategies ensure your goals are
                accomplished. Be it revenue generation or user acquisition, our
                turnkey solutions have the entire ad ecosystem covered.
              </div>
            </div>
            <div className="slider">
              <div className="slider-title">Earn More With Your Games</div>
              <div className="slider-description">
                Upzyde’s monetization solutions help you make the most of your
                games and convert them into revenue-generating businesses. With
                innovative ad formats and advanced technology, we ensure you
                earn higher CPMs for your ad inventory.
              </div>
            </div>

            <div className="slider">
              <div className="slider-title">Know Your User</div>
              <div className="slider-description">
                With real-time reporting and tracking the Upzyde dashboard
                enables publishers to deep-dive into analytics about user
                engagement, ad performance, and more. Know your user in detail
                and optimize your ads on the go to provide an unmatched gaming
                experience.
              </div>
            </div>
            <div className="slider">
              <div className="slider-title">Ads For Everyone</div>
              <div className="slider-description">
                Not every game is the same, and not every user should see the
                same ad. Our innovative monetization strategies and diverse ad
                offerings help you choose ad types best suited to your
                playerbase.
              </div>
            </div>
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
            <div className="slider">
              <div className="slider-title">Scalable Ad Solutions</div>
              <div className="slider-description">
                Our exemplary tools and strategies ensure your goals are
                accomplished. Be it revenue generation or user acquisition, our
                turnkey solutions have the entire ad ecosystem covered.
              </div>
            </div>
            <div className="slider">
              <div className="slider-title">Earn More With Your Games</div>
              <div className="slider-description">
                Upzyde’s monetization solutions help you make the most of your
                games and convert them into revenue-generating businesses. With
                innovative ad formats and advanced technology, we ensure you
                earn higher CPMs for your ad inventory.
              </div>
            </div>

            <div className="slider">
              <div className="slider-title">Know Your User</div>
              <div className="slider-description">
                With real-time reporting and tracking the Upzyde dashboard
                enables publishers to deep-dive into analytics about user
                engagement, ad performance, and more. Know your user in detail
                and optimize your ads on the go to provide an unmatched gaming
                experience.
              </div>
            </div>
            <div className="slider">
              <div className="slider-title">Ads For Everyone</div>
              <div className="slider-description">
                Not every game is the same, and not every user should see the
                same ad. Our innovative monetization strategies and diverse ad
                offerings help you choose ad types best suited to your
                playerbase.
              </div>
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default HelpingPublisher;
