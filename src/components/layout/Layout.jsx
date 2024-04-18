import React from "react";
import Navbar from "../navbar/Navbar";
import Footer from "../../pages/blog/components/footer/Footer";
import Pagination from "../../pages/blog/components/pagination/Pagination";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
