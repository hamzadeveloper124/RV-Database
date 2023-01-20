import React from "react";

import {
  heroSectionDropDownData,
  heroSectionDropDownData2,
} from "../../../../Constants/Data";
import HeroDropdown from "../../../Container/Dropdowns/HeroDropdown";
import HeroDropdown2 from "../../../Container/Dropdowns/HeroDropdown2";

import "./Section1.css";

function Section1() {
  return (
    <div>
      <div className="container">
        <div className="item1">
          <div className="hero-content">
            <div className="text-container">
              <h1>
                We Have A Great Selection of <br /> New And Used RV Cars
              </h1>
            </div>
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
            <button type="button" className="searchBtn">
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section1;
