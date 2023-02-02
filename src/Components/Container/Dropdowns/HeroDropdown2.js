import React, { useState, useRef } from "react";
import "./HeroDropdown2.css";

import dropDown_icon from "../../Svg/dropDown_icon.svg";
function HeroDropdown2({ name, text, options, index }) {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const menuRef = useRef();
  const iconRef = useRef();
  window.addEventListener("click", (e) => {
    if (e.target !== menuRef.current && e.target !== iconRef.current) {
      setDropdownOpen(false);
    }
  });

  return (
    <div className="_item">
      {name} <br />
      <button
        ref={menuRef}
        onClick={() => setDropdownOpen((prev) => !prev)}
        className={`dropdown_button ${dropdownOpen ? "open" : ""}`}
      >
        {text}
        <img
          src={dropDown_icon}
          alt="icon"
          className="dropDown-icon"
          ref={iconRef}
          onClick={() => setDropdownOpen((prev) => !prev)}
        />
      </button>
      {dropdownOpen && (
        <ul className="menu-card2">
          {options.map((item, index) => {
            return <li key={index}>{item.name}</li>;
          })}
        </ul>
      )}
    </div>
  );
}

export default HeroDropdown2;
