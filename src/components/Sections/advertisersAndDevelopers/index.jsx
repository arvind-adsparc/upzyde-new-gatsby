import React from "react";
import { Link } from "gatsby";
import "./styles.scss";

const AdvertisersAndDeveloers = () => {
  return (
    <section className="ad-dev-container">
      <div className="advertisers">
        <div className="inner-container">
          <h2>Brand Advertisers</h2>
          <p>
            Enter the untapped premium & brand-safe{" "}
            <span>environment of the gaming world.</span>
          </p>
          <p>
            Connect to millions of gamers & players for <span></span> dynamic
            brand communication.
          </p>

          <div className="cta">
            <Link to="/advertisers">
              <button className="btn">Learn more</button>
            </Link>
          </div>
        </div>
      </div>

      <div className="developers">
        <div className="inner-container">
          <h2>Game Developers</h2>
          <p>
            Get incremental revenue via flexible business <span></span> models &
            maximize your return on inventory.
          </p>
          <p>
            Grab opportunities for cross-promotion and <span></span> revenue via
            esport tournaments monetization.
          </p>

          <div className="cta">
            <Link to="/developers">
              <button className="btn">Learn more</button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdvertisersAndDeveloers;
