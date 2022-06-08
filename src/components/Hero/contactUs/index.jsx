import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import "./styles.scss";

const ContactUsHero = () => {
  return (
    <section className="contactus-hero">
      <div className="hero-image">
        <StaticImage
          src="https://res.cloudinary.com/dqove2qhg/image/upload/v1654494853/Upzyde/contact_us-1_banner1_-_1_ycqajx.webp"
          alt=""
          placeholder="none"
          layout="fullWidth"
          loading="eager"
          objectFit="fill"
        />
      </div>
    </section>
  );
};

export default ContactUsHero;
