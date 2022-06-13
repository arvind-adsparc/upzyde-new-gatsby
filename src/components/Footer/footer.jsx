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
                  src="https://res.cloudinary.com/dqove2qhg/image/upload/v1655095600/Upzyde/s-2_c7vgbn.webp"
                  alt="Twitter"
                  title="Twitter"
                  placeholder="none"
                  width={30}
                />
              </div>
              <div className="social-link">
                <StaticImage
                  className=""
                  src="https://res.cloudinary.com/dqove2qhg/image/upload/v1655095599/Upzyde/s-1_cklb7e.webp"
                  alt="Facebook"
                  title="Facebook"
                  placeholder="none"
                  width={30}
                />
              </div>
              <div className="social-link">
                <StaticImage
                  className=""
                  src="https://res.cloudinary.com/dqove2qhg/image/upload/v1655095594/Upzyde/s-3_sdppkr.webp"
                  alt="Instagram"
                  title="Instagram"
                  placeholder="none"
                  width={30}
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

          <div className="links">
            <div className="link-head">
              Quick Links
              <span></span>
            </div>

            <div className="link-group">
              <div>
                <div className="link">Advertiser T&C</div>
                <div className="link">Brand Safety</div>
                <div className="link">Publisher T&C</div>
                <div className="link">Publisher Guidelines</div>
              </div>
              <div>
                <div className="link">Privacy Policy</div>
                <div className="link">Privacy Options</div>
                <div className="link">Cookie Policy</div>
                <div className="link">Contact</div>
              </div>
            </div>
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
