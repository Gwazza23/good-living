import React from "react";
import Nav from "../Pages/Nav/Nav";
import Footer from "../Pages/Footer/Footer";

function Layout({ children }) {
  return (
    <>
      <Nav />
      {children}
      <Footer />
    </>
  );
}

export default Layout;
