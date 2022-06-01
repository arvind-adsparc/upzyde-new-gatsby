import React from "react";

const Layout = ({ children }) => {
  return (
    <div>
      <div className="page-content">{children}</div>
    </div>
  );
};

export default Layout;
