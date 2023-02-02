import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Footer from "../../Components/Footer/Footer";
import Navbar from "../../Components/Header/Navbar";
import Section1 from "../../Components/Sections/Home/Section1/Section1";
import Section2 from "../../Components/Sections/Home/Section2/Section2";
import Section3 from "../../Components/Sections/Home/Section3/Section3";
import Section4 from "../../Components/Sections/Home/Section4/Section4";
import { getData } from "../../Redux/Actions/ApiFetch";

function Home() {
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(getData());
  // }, []);
  // const data = useSelector((state) => state.auth.apiData);
  // console.log("aahbabhjabsaabsjsaa", data);
  return (
    <div className="hero-section">
      <Navbar />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Footer />
    </div>
  );
}

export default Home;
