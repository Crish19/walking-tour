import React from "react";
import {
  Navbar,
  Hero,
  About,
  Howitworks,
  Stockholm,
  Pricing,
  Touch,
  Footer,
} from "../components";

export const IndexPage = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Howitworks />
      <Stockholm />
      <Pricing />
      <Touch />
      <Footer />
    </>
  );
};

export default IndexPage;