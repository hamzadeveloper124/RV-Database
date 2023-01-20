import React, { useState } from "react";
import "./HeroDropdown2.css";
import { IconButton } from "@material-ui/core";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
function HeroDropdown2({ name, text, options, index }) {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <div className={index === 0 ? "first_Item" : "_item"}>
      {name} <br />
      <button
        onClick={() => setDropdownOpen((prev) => !prev)}
        className={
          index === 0
            ? "first-btn1"
            : `dropdown_button ${dropdownOpen ? "open" : ""}`
        }
      >
        {text}
        <IconButton edge="end">
          <ArrowDropDownIcon />
        </IconButton>
      </button>
      {dropdownOpen && (
        <ul className={index === 0 ? "firstMenu-card2" : "menu-card2"}>
          {options.map((item, index) => {
            return <li key={index}>{item.name}</li>;
          })}
        </ul>
      )}
    </div>
  );
}

export default HeroDropdown2;
