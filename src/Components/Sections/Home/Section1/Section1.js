import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

import {
  heroSectionDropDownData,
  heroSectionDropDownData2,
} from "../../../../Constants/Data";
import SearchIcon from "@mui/icons-material/Search";

import HeroDropdown from "../../../Container/Dropdowns/HeroDropdown";
import HeroDropdown2 from "../../../Container/Dropdowns/HeroDropdown2";

import "./Section1.css";

function Section1() {
  return (
    <div>
      <div className="container">
        <div className="item1">
          <div className="text-container">
            <h1>
              RV Insights <br /> Discover the best RVs with in-depth <br />
              Reviews and Comparisons
            </h1>
          </div>
        </div>

        <div className="card-container">
          <div className="card1">
            <div className="card1-content">
              {heroSectionDropDownData.map((item, index) => {
                return (
                  <HeroDropdown
                    lastIndex={heroSectionDropDownData.length - 1}
                    index={index}
                    key={index}
                    name={item.name}
                    options={item.options}
                    text={item.text}
                  />
                );
              })}
            </div>
          </div>

          <div className="card2">
            <div className="card2-content">
              {heroSectionDropDownData2.map((item, index) => {
                return (
                  <HeroDropdown2
                    lastIndex={heroSectionDropDownData2.length - 1}
                    index={index}
                    key={index}
                    name={item.name}
                    options={item.options}
                    text={item.text}
                  />
                );
              })}
            </div>
            <button className="search-button">
              <SearchIcon />
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section1;
