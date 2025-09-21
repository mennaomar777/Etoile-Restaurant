import React from "react";
import MainSlider from "../MainSlider/MainSlider";
import FeaturedDishes from "../FeaturedDishes/FeaturedDishes";
import AboutTeaser from "../AboutTeaser/AboutTeaser";
import Testimonials from "../Testimonials/Testimonials";
import CTASection from "../CTASection/CTASection";

export default function Home() {
  return (
    <>
      <MainSlider />
      <FeaturedDishes />
      <AboutTeaser />
      <Testimonials />
      <CTASection />
    </>
  );
}
