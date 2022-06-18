import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import "./styles.scss";

const ContactUsHero = () => {
  return (
    <section className="contactus-hero">
      <div className="hero-image">
        <StaticImage
          src="https://res.cloudinary.com/dqove2qhg/image/upload/v1655541992/Upzyde/contact_us-1_banner1_-_1_nh9asx.png"
          alt=""
          placeholder="none"
          layout="fullWidth"
          loading="eager"
        />
      </div>
    </section>
  );
};

export default ContactUsHero;
