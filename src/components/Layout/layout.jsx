import React from "react";
import Footer from "../Footer/footer";
import "./layout.scss";

const Layout = ({ children }) => {
  return (
    <div>
      <div className="page-content">{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
