import React from "react";
import { StaticImage } from "gatsby-plugin-image";

import ContactForm from "../../Forms/contact/contact";
import "./styles.scss";

const ConactOverview = () => {
  return (
    <section className="contact-overview inner-container">
      <div className="form">
        <h2>Get in Touch</h2>

        <ContactForm />
      </div>

      <div className="location">
        <StaticImage
          className="location-image"
          src="https://res.cloudinary.com/dqove2qhg/image/upload/v1655724918/Upzyde/dummy_map-1_dhl34l.png"
          placeholder="none"
          width={300}
        />
        <h2>Location</h2>

        <div className="txt">
          <p>Fonteinlaan 5a, 2012 JT Haarlem,</p>
          <p>The Netherlands</p>
        </div>
      </div>
    </section>
  );
};

export default ConactOverview;
