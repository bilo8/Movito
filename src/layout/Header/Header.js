import React from "react";
import { NavLink, Link } from "react-router-dom";

import './Header.css';

const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="inner-content">
          <div className="brand">
            <NavLink exact to="/">Movito</NavLink>
          </div>

          <ul className="nav-links">
            <li>
              <NavLink to="/MyList">My List</NavLink>
            </li>

            <li>
              <Link to="/add" className="btn btn-main">
                + Add
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;

