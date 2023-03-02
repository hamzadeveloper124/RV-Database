import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Footer from "../../Components/Footer/Footer";
import Navbar from "../../Components/Header/Navbar/Navbar";
import NavbarCollapsed from "../../Components/Header/NavbarCollapsed/NavbarCollapsed";
import Section1 from "../../Components/Sections/Home/Section1/Section1";
import Section2 from "../../Components/Sections/Home/Section2/Section2";
import Section3 from "../../Components/Sections/Home/Section3/Section3";
import { useResponsive } from "../../Hooks/UseResponsive";
import "./Home.css";

import { getData } from "../../Redux/Actions/ApiFetch";

function Home() {
  const { screenType } = useResponsive();
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(getData());
  // }, []);
  // const data = useSelector((state) => state.auth.apiData);
  // console.log("aahbabhjabsaabsjsaa", data);
  return (
    <div className="hero-section">
      {screenType === "TABLET" ? <NavbarCollapsed /> : <Navbar />}
      <Section1 />
      <Section2 />
      <Section3 />
      <Footer />
    </div>
  );
}

export default Home;
