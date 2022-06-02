import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby";
import headerData from "./data";
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
          {headerData.map((info) => (
            <Link
              key={info.id}
              to={info.to}
              className={`link ${activeID === info.id ? "active" : ""}`}
            >
              {info.text}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
