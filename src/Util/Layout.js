import React from "react";
import Nav from "../Pages/Nav/Nav";
import Footer from "../Pages/Footer/Footer";

function Layout({ children }) {
  return (
    <div className="wrapper" >
      <Nav />
      {children}
      <Footer />
    </div>
  );
}

export default Layout;
