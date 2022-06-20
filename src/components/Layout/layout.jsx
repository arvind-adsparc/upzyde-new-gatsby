import React from "react";
import Footer from "../Footer/footer";
import Header from "../Header/header";
import "./layout.scss";

const Layout = ({ children, page }) => {
  return (
    <div className="page-layout">
      <Header activeID={page} />
      <div className="page-content">{children}</div>
      <Footer page={page} />
    </div>
  );
};

export default Layout;
