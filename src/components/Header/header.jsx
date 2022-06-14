import React, { useState } from "react";
import { StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby";
import headerData from "./data";
import "./header.scss";

const Header = ({ activeID }) => {
  const [openMobNav, setOpenMobNav] = useState(false);

  return (
    <header className="page-header">
      <div className=" flex-container">
        <div className="logo">
          {activeID === "homepage" ? (
            <div className="home-logo">
              <StaticImage
                className=""
                src="https://res.cloudinary.com/dqove2qhg/image/upload/v1655212868/Upzyde/log1_uss6nr.png"
                alt="Upzyde"
                title="Upzyde"
                placeholder="none"
                loading="eager"
              />
            </div>
          ) : (
            <div className="other-logo">
              <StaticImage
                className=""
                src="https://res.cloudinary.com/dqove2qhg/image/upload/v1654580565/Upzyde/log2_dromlw.webp"
                alt="Upzyde"
                title="Upzyde"
                placeholder="none"
                loading="eager"
              />
            </div>
          )}
        </div>

        <div className="divider"></div>

        <div
          onClick={() => setOpenMobNav(!openMobNav)}
          className="mobile-nav"
          aria-hidden="true"
        >
          <span></span>
          <span></span>
          <span></span>

          {openMobNav && (
            <nav className="mobile-nav-links">
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
          )}
        </div>

        <nav className="nav-links desktop-nav  flex-container">
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
