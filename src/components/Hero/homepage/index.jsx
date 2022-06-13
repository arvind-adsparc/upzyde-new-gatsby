import React from "react";
import ScrollDown from "../../ScrollDown";
import "./styles.scss";

const HomeHero = () => {
  return (
    <section className="homepage-hero">
      <div className="hero-video">
        <video
          src="https://res.cloudinary.com/dqove2qhg/video/upload/v1655106698/Upzyde/banner_1_1_f2n00g.mp4"
          autoPlay
          loop
          muted
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

      <ScrollDown />
    </section>
  );
};

export default HomeHero;