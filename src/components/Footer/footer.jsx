import React from "react";
import { StaticImage } from "gatsby-plugin-image";

import "./footer.scss";

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="inner-container grid-container">
        <div className="newsletter-section">
          <div className="mail-us">
            <h3>Mail Us</h3>
          </div>

          <div className="form">
            <h3>Newsletter</h3>
          </div>

          <div className="follow-us">Follow us</div>
        </div>
        <div className="quick-links">
          <div className="logo">
            <StaticImage
              className=""
              src="https://res.cloudinary.com/dqove2qhg/image/upload/v1654088761/Upzyde/log2_csjfn8.png"
              alt="Upzyde"
              title="Upzyde"
              placeholder="none"
            />
          </div>
        </div>
        <div className="copyright-section ">
          <div>2022 © Copyright. All rights reserved. Privacy Policy</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
