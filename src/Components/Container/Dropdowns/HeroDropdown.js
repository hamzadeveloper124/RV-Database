import React, { useState } from "react";
import "./HeroDropdown.css";
import { IconButton } from "@material-ui/core";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
function HeroDropdown({ name, text, options, index, lastIndex }) {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  console.log("aaaa", lastIndex);
  return (
    <div className={index === lastIndex ? "lastItem" : "item"}>
      {name} <br />
      <button
        onClick={() => setDropdownOpen((prev) => !prev)}
        className={
          index === 6
            ? "last-btn1"
            : `dropdown_button ${dropdownOpen ? "open" : ""}`
        }
      >
        {text}
        <IconButton edge="end">
          <ArrowDropDownIcon />
        </IconButton>
      </button>
      {dropdownOpen && (
        <ul className={index === lastIndex ? "lastMenu-card1" : "menu-card1"}>
          {options.map((item, index) => {
            return <li key={index}>{item.name}</li>;
          })}
        </ul>
      )}
    </div>
  );
}

export default HeroDropdown;
