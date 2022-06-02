import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import "./header.scss";

const Header = ({ active }) => {
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

        <nav className="nav-links flex-container">
          <div className="link">Home</div>
          <div className="link">Developers</div>
          <div className="link">Advertisers</div>
          <div className="link">In Game Ads</div>
          <div className="link">Contact Us</div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
