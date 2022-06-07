import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import Newsletter from "../Forms/newsletter";

import "./footer.scss";

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="inner-container grid-container">
        <div className="newsletter-section">
          <div className="mail-us">
            <h3>Mail us</h3>
            <div className="border-red"></div>
            <div className="content">
              <a className="mail-txt" href="mailto:up@upzyde.com">
                up@upzyde.com
              </a>
            </div>
          </div>

          <div className="form">
            <h3 className="color-red">Subscribe to Newsletter</h3>
            <Newsletter />
          </div>

          <div className="follow-us">
            <h3>Follow us</h3>
            <div className="border-red"></div>

            <div className="content">
              <div className="social-link">
                <StaticImage
                  className=""
                  src="https://res.cloudinary.com/dqove2qhg/image/upload/v1654166514/Upzyde/twit1_axsy40.webp"
                  alt="Twitter"
                  title="Twitter"
                  placeholder="none"
                />
              </div>
              <div className="social-link">
                <StaticImage
                  className=""
                  src="https://res.cloudinary.com/dqove2qhg/image/upload/v1654166516/Upzyde/fb1_ogopuq.webp"
                  alt="Facebook"
                  title="Facebook"
                  placeholder="none"
                />
              </div>
              <div className="social-link">
                <StaticImage
                  className=""
                  src="https://res.cloudinary.com/dqove2qhg/image/upload/v1654166515/Upzyde/insta1_ouhjrb.webp"
                  alt="Instagram"
                  title="Instagram"
                  placeholder="none"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="quick-links">
          <div className="logo">
            <StaticImage
              className=""
              src="https://res.cloudinary.com/dqove2qhg/image/upload/v1654580565/Upzyde/log2_dromlw.webp"
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
