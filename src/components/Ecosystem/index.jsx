import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import "./styles.scss";

const Ecosystem = () => {
  return (
    <section className="ecosystem-container">
      <h2>Ecosystem</h2>

      <StaticImage
        src="https://res.cloudinary.com/dqove2qhg/image/upload/v1655709888/Upzyde/ecosystem_1_zdcsfk.png"
        // src="https://res.cloudinary.com/dqove2qhg/image/upload/v1655709768/Upzyde/ecosystem_sqbazq.webp"
        // src="https://res.cloudinary.com/dqove2qhg/image/upload/v1654843326/Upzyde/ecosystem_1_rrjdgv.webp"
        // src="https://res.cloudinary.com/dqove2qhg/image/upload/v1655210615/Upzyde/ecosystem_y7j1nl.png"
        alt=""
        placeholder="none"
        width={800}
        // height={350}
      />
    </section>
  );
};

export default Ecosystem;
