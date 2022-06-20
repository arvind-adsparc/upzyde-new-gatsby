import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import "./styles.scss";

const Ecosystem = () => {
  return (
    <section className="ecosystem-container">
      <h2>Ecosystem</h2>

      <div className="image-div">
        <img
          src="https://res.cloudinary.com/dqove2qhg/image/upload/v1655709768/Upzyde/ecosystem_sqbazq.webp"
          alt=""
          placeholder="none"
          // width={800}
        />
      </div>
    </section>
  );
};

export default Ecosystem;
