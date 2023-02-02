import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import "../../Assets/Fonts/Fonts.css";
import SignUp_icon from "../Svg/SignUp_icon.svg";

function Navbar1() {
  return (
    <>
      <header>
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
                  About Us
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
            </ul>
          </div>
          <div className="nav2-center">
            <h1 className="logo">ASKRVDB</h1>
          </div>
          <div className="nav2-right">
            <img src={SignUp_icon} alt="icon" className="SignUp-icon" />
            <li className="btn-li">
              <button type="button" className="navBtn">
                <NavLink to="/contact" className="btn-link">
                  CONTACT
                </NavLink>
              </button>
            </li>
          </div>
        </div>
      </header>
    </>
  );
}

export default Navbar1;
