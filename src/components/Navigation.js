import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="navigation">
      <ul>
        <NavLink to="/" exact className="hover" activeClassName="nav-active">
          <li>home</li>
        </NavLink>
        <li className="nav-portfolio hover">
          portfolio
          <ul className="nav-projects hover">
            <NavLink to="/project-1" activeClassName="nav-active">
              <li>project 1</li>
            </NavLink>
            <NavLink to="/project-2" activeClassName="nav-active">
              <li>project 2</li>
            </NavLink>
            <NavLink to="/project-3" activeClassName="nav-active">
              <li>project 3</li>
            </NavLink>
            <NavLink to="/project-4" activeClassName="nav-active">
              <li>project 4</li>
            </NavLink>
          </ul>
        </li>
        <NavLink
          to="/contact"
          exact
          className="hover"
          activeClassName="nav-active"
        >
          <li>contact</li>
        </NavLink>
      </ul>
    </div>
  );
};

export default Navigation;
