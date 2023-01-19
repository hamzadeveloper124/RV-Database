import React from "react";

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
            <div>Model</div>
            <div>Manufacturer</div>
            <div>Min Year</div>
            <div>Max Year</div>
            <div>Min Length</div>
            <div>Max Length</div>
            <div>Prime Pooping Position</div>
          </div>

          <div className="card2">Card 2</div>
        </div>
      </div>
    </div>
  );
}

export default Section1;
