import React from "react";
import "./styles.scss";

const ScrollDown = () => {
  const handleClick = (selector) => {
    const element = document.querySelector(selector).offsetTop;

    window.scrollTo({ top: element, behavior: "smooth" });
  };
  return (
    <div className="scroll-container">
      <div
        onClick={() => handleClick("#scroll-section")}
        className="scroll-down"
      ></div>
      <div className="scroll-text">Scroll Down</div>
    </div>
  );
};

export default ScrollDown;
