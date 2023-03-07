import React from "react";
import { useParams } from "react-router-dom";
import Navbar1 from "../../Components/Header/Navbar/Navbar";
import NavbarCollapsed from "../../Components/Header/NavbarCollapsed/NavbarCollapsed";
import RvDetailsDescription from "../../Components/Sections/RvDetails/RvDetailsDescription/RvDetailsDescription";
import RvDetailsHero from "../../Components/Sections/RvDetails/RvDetailsHero/RvDetailsHero";
import { useResponsive } from "../../Hooks/UseResponsive";
import "./RvDetails.css";

function RvDetails() {
  const { screenType } = useResponsive();
  // const { id } = useParams();
  return (
    <div className="RvDetails-container">
      {screenType === "TABLET" ? <NavbarCollapsed /> : <Navbar1 />}
      <RvDetailsHero />
      <RvDetailsDescription />
    </div>
  );
}

export default RvDetails;
