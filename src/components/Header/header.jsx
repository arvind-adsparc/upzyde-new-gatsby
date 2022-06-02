import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby";
import "./header.scss";

const Header = ({ activeID }) => {
  return (
    <header className="page-header">
      <div className="inner-container flex-container">
        <div className="logo">
          <StaticImage
            className=""
            src="https://res.cloudinary.com/dqove2qhg/image/upload/v1654088761/Upzyde/log2_csjfn8.png"
            alt="Upzyde"
            title="Upzyde"
            placeholder="none"
          />
        </div>

        <div className="divider"></div>

        <nav className="nav-links flex-container">
          <Link
            to="/"
            className={`link ${activeID === "homepage" ? "active" : ""}`}
          >
            Home
          </Link>

          <Link
            className={`link ${activeID === "developers" ? "active" : ""}`}
            to="/developers"
          >
            Developers
          </Link>
          <Link
            to="/advertisers"
            className={`link ${activeID === "advertisers" ? "active" : ""}`}
          >
            Advertisers
          </Link>
          <div className="link">In Game Ads</div>
          <Link
            to="/contact-us"
            className={`link ${activeID === "contact" ? "active" : ""}`}
          >
            Contact Us
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
