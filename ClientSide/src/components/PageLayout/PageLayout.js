import React from "react";
import { Outlet } from "react-router-dom";

import Header from "../Header/Header.js";
import Footer from "../Footer/Footer.js";

const PageLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default PageLayout;
