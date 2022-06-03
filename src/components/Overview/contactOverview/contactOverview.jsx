import React from "react";
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
        <h2>Location</h2>
      </div>
    </section>
  );
};

export default ConactOverview;
