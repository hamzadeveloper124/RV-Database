import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import "../../Assets/Fonts/Fonts.css";
import { useState } from "react";

function Navbar1() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  return (
    <>
      <header>
        <div className="navbar1">
          <div className="nav-left">
            Need Helps. <br /> 012 3456 789
          </div>
          <div className="nav-center">
            FREE shipping over $99. <br />
            Good Sam members: FREE shipping over $69. | Join Now
          </div>
          <div className="nav-right">
            <div className="btn-container">
              <li className="btn-li">
                <button type="button" className="navBtn">
                  <NavLink to="/contact" className="btn-link">
                    CONTACT
                  </NavLink>
                </button>
              </li>
            </div>
          </div>
        </div>
        <div className="navbar2">
          <div className="nav2-left">
            <ul className="nav-list">
              <li className="links">
                <NavLink
                  to="/"
                  className="nav-link"
                  activeClassName="active"
                  eventKey="/"
                >
                  Home
                </NavLink>
              </li>
              <li className="links">
                <NavLink
                  to="/about"
                  className="nav-link"
                  activeClassName="active"
                  eventKey="/about"
                >
                  About
                </NavLink>
              </li>

              <li className="links">
                <NavLink
                  to="/faqs"
                  className="nav-link"
                  activeClassName="active"
                  eventKey="/faqs"
                >
                  Faqs
                </NavLink>
              </li>
              <li className="links">
                <NavLink
                  to="/reviews"
                  className="nav-link"
                  activeClassName="active"
                  eventKey="/reviews"
                >
                  My Reviews
                </NavLink>
              </li>
              <li className="links">
                <NavLink
                  to="/blog"
                  className="nav-link"
                  activeClassName="active"
                  eventKey="/blog"
                >
                  Blog
                </NavLink>
              </li>
            </ul>
            {/* <img
              src={require("../../Assets/Images/Logo.png")}
              alt=""
              className="logo"
            /> */}
          </div>
          <div className="nav2-center">
            <img
              src={require("../../Assets/Images/Logo.png")}
              alt=""
              className="logo"
            />
          </div>
          <div className="nav2-right">
            <div className="nav-div">
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className={`dropdown-button ${dropdownOpen ? "open" : ""}`}
              >
                Dropdown
              </button>
              {dropdownOpen && (
                <ul className="dropdown-content">
                  <li>Option 1</li>
                  <li>Option 2</li>
                  <li>Option 3</li>
                </ul>
              )}
            </div>
            <div className="nav-div">
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className={`dropdown-button ${dropdownOpen ? "open" : ""}`}
              >
                Dropdown
              </button>
              {dropdownOpen && (
                <ul className="dropdown-content">
                  <li>Option 1</li>
                  <li>Option 2</li>
                  <li>Option 3</li>
                </ul>
              )}
            </div>
            <div className="nav-div">Div 3</div>
            <div className="nav-div">Div 4</div>
            <div className="nav-div">Div 5</div>
            <div className="nav-div">Div 6</div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Navbar1;
