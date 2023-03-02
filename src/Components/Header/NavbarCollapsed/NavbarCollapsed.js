import React from "react";
import { NavLink } from "react-router-dom";
import useCollapse from "react-collapsed";
import "./NavbarCollapsed.css";
import { Spin as Hamburger } from "hamburger-react";
import SignUp_icon from "../../Svg/SignUp_icon.svg";
function NavbarCollapsed() {
  const { getCollapseProps, getToggleProps } = useCollapse();
  return (
    <div className="collapsedFilter-container collapsed-container">
      <div className="hamBtn-container">
        <h1 className="logo">ASKRVDB</h1>
        <div className="hamBurger" {...getToggleProps()}>
          <Hamburger className="hamBtn" />
        </div>
      </div>
      <div className="NavbarCollapsed" {...getCollapseProps()}>
        <ul className="nav-listCollapsed">
          <li className="linksCollapsed">
            <NavLink
              to="/"
              className="nav-linkCollapsed"
              activeClassName="active"
              eventKey="/"
            >
              Home
            </NavLink>
          </li>
          <li className="linksCollapsed">
            <NavLink
              to="/about"
              className="nav-linkCollapsed"
              activeClassName="active"
              eventKey="/about"
            >
              About Us
            </NavLink>
          </li>
          <li className="linksCollapsed">
            <NavLink
              to="/reviews"
              className="nav-linkCollapsed"
              activeClassName="active"
              eventKey="/reviews"
            >
              My Reviews
            </NavLink>
          </li>
          <li className="linksCollapsed-bottom">
            <img src={SignUp_icon} alt="icon" className="SignUp-icon" />
            <button type="button" className="navBtn">
              <NavLink to="/contact" className="btn-link">
                CONTACT
              </NavLink>
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default NavbarCollapsed;
