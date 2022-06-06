import React from "react";
// import { StaticImage } from "gatsby-plugin-image";
import IncreaseRevenueForm from "../Forms/increaseRevenue";
import "./styles.scss";

const Revenue = () => {
  return (
    <section className="revenue-container inner-container">
      <div className="form-container">
        {/* <StaticImage
          src="https://res.cloudinary.com/dqove2qhg/image/upload/v1654507449/Upzyde/increase_your_revenue_1_wox80x.webp"
          alt=""
          placeholder="none"
        /> */}

        <div className="form-content">
          <h2>
            Crafting goal-oriented solutions for publishers{" "}
            <span className="sentence-break">across the globe</span>
          </h2>

          <p>Join Upzyde and start making the most of your games today.</p>

          <IncreaseRevenueForm />
        </div>
      </div>
    </section>
  );
};

export default Revenue;
