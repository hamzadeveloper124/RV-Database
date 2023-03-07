import React from "react";
import "./RvDetailsDescription.css";
import { DescriptionTableColumn1 } from "../../../../Constants/Data";
import { DescriptionTableColumn2 } from "../../../../Constants/Data";

function RvDetailsDescription() {
  return (
    <div className="RvDetailsDescription-container">
      <div className="RvDetailsDescription-h1">Description</div>
      <div className="RvDetailsTable-container">
        <div className="description-table">
          <tbody>
            {DescriptionTableColumn1.map((item, index) => (
              <tr key={index}>
                <td>
                  <img src={item.icon} alt={item.icon} />
                  <div className="cell-div">
                    <h1>{item.heading}</h1>
                    <p>{item.text}</p>
                  </div>
                </td>
              </tr>
            ))}
            {DescriptionTableColumn2.map((item, index) => (
              <tr key={index}>
                <td>
                  <img src={item.icon} alt={item.icon} />
                  <div className="cell-div">
                    <h1>{item.heading}</h1>
                    <p>{item.text}</p>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </div>
      </div>
    </div>
  );
}

export default RvDetailsDescription;
