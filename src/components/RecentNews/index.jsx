import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import "./styles.scss";

const RecentNews = () => {
  return (
    <section className="recentNews-container">
      <h2>Recent News</h2>

      <div className="cards">
        {[1, 2, 3].map((info) => {
          return (
            <div key={info} className="card">
              <div className="card-content">
                <StaticImage
                  src="https://res.cloudinary.com/dqove2qhg/image/upload/v1655123590/Upzyde/recent_bg2_1_srpz5h.png"
                  alt=""
                  placeholder=""
                  width={300}
                />
                <h3>News Title</h3>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit
                  asperiores deserunt, placeat illum eius veniam provident
                  ratione libero! Odio fugit quibusdam distinctio obcaecati,
                  excepturi nemo quasi? Voluptates commodi veritatis modi.
                </p>

                <div className="read-more">
                  <button>Read More</button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default RecentNews;
