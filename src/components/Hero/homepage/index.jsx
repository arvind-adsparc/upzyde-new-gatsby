import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import "./styles.scss";

const HomeHero = () => {
  return (
    <section className="homepage-hero">
      {/* <div className="hero-image">
        <StaticImage
          src="https://res.cloudinary.com/dqove2qhg/image/upload/v1654849630/Upzyde/Header_banner_2_ovj3a0.webp"
          alt=""
          placeholder="none"
          loading="eager"
        />
      </div> */}

      <div className="hero-video">
        <video
          // src="https://res.cloudinary.com/dqove2qhg/video/upload/v1655098149/Upzyde/testvideo_f1fi2y.mp4"
          // src="https://d3tztbffe7pzlf.cloudfront.net/landing/master/747/themes/adverty/img/video.mp4"
          src="https://res.cloudinary.com/dqove2qhg/video/upload/v1655100455/Upzyde/production_ID_3722209_ava7zh.mp4"
          autoPlay
          loop
        ></video>
      </div>

      <div className="overlay"></div>

      <div className="content">
        <h1>
          Grab your gamers’ <span></span> attention, non-intrusively!
        </h1>

        <p>
          With Upzyde, experience one-of-a-kind tech involving <span></span>{" "}
          dynamically adaptive in-game ads <span></span> for advertisers & app
          developers
        </p>

        <div className="group">
          <div className="cta">
            <button className="btn">An Advertiser</button>
          </div>

          <div className="cta">
            <button className="btn">A Game Developer</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeHero;
