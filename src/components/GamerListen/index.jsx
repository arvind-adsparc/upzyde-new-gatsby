import React from "react";
import { Link } from "gatsby";

import "./styles.scss";

const GamerListen = () => {
  return (
    <section className="gamer-listen inner-container request-demo">
      <div className="form-container">
        <div className="form-content">
          <h2>Ready to make gamers LISTEN to you? Join Us!</h2>

          <div className="cta">
            <Link to="/contact-us">
              <button className="btn">Sign-Up</button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GamerListen;
