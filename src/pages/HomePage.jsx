import React from "react";

import {
  Header,
  Home,
  About,
  Certificates,
  Products,
  Contact,
  Footer,
} from "../components";

const HomePage = () => {
  return (
    <>
      <Header />
      <main>
        <Home />
        <About />
        <Certificates />
        <Products />
        <Contact />
      </main>
      <Footer />
    </>
  );
};

export default HomePage;
