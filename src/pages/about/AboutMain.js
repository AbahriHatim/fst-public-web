import React from "react";
import Breadcrumb from "../../components/Breadcrumb";
import About from "./AboutSection";
import FunFact from "./FunFactSection";

const AboutMain = () => {
  return (
    <main>
      <Breadcrumb title="about us" />
      <About />
      <FunFact />
    </main>
  );
};
export default AboutMain;
