import React from "react";
import "./styles.scss";

const OtherPageOverview = ({ content, cta }) => {
  return (
    <section className="overview-containerOther">
      <div className="inner-container">
        <div
          className="section-content"
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </div>
    </section>
  );
};

export default OtherPageOverview;
