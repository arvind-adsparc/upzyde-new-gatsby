import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import "./styles.scss";

const ContactUsHero = () => {
  return (
    <section className="contactus-hero container">
      <div className="hero-image">
        <StaticImage
          src="https://res.cloudinary.com/dqove2qhg/image/upload/v1654494853/Upzyde/contact_us-1_banner1_-_1_ycqajx.webp"
          alt=""
          placeholder="none"
          layout="fullWidth"
        />
      </div>
    </section>
  );
};

export default ContactUsHero;
