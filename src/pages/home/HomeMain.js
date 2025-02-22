import React from "react";
import About from "./AboutSection";
import Blog from "./BlogSection";
import Career from "./CareerSection";
import Category from "./CategorySection";
import Course from "./CourseSection";
import FunFact from "./FunFactSection";
import HomeBanner from "./HomeBanner";
import Testimonial from "./TestimonialSection";
import WhyChooseUs from "./WhyChooseUsSection";
import Video from "./VideoSection";

const HomeMain = () => {
  return (
    <main>
      <HomeBanner />
      <Category />
      <Course />
      <About />
      <Video />
      <WhyChooseUs />
      <FunFact />
      <Testimonial />
      <Career />
      <Blog />
    </main>
  );
};
export default HomeMain;
