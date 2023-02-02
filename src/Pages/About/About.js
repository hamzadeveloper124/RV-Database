import React from "react";
import Navbar from "../../Components/Header/Navbar";
import AboutHeroSection from "../../Components/Sections/About/AboutHeroSection/AboutHeroSection";
import AboutUsSection from "../../Components/Sections/About/AboutUsSection/AboutUsSection";
import OurStory from "../../Components/Sections/About/OurStory/OurStory";
import Footer from "../../Components/Footer/Footer";

function About() {
  return (
    <div>
      <Navbar />
      <AboutHeroSection />
      <AboutUsSection />
      <OurStory />
      <Footer />
    </div>
  );
}

export default About;
