import React from "react";
import scrollFunction from "../../../utlis/scrollFunction";
import "./styles.scss";

const OtherPageOverview = ({ content, cta, btnVariant }) => {
  return (
    <section className="overview-containerOther">
      <div className="inner-container">
        <div
          className="section-content"
          dangerouslySetInnerHTML={{ __html: content }}
        />

        <div className="cta">
          <button
            onClick={() => scrollFunction(".request-demo")}
            className={btnVariant ? `btn ${btnVariant}` : "btn"}
          >
            {cta.text}
          </button>
        </div>
      </div>
    </section>
  );
};

export default OtherPageOverview;
