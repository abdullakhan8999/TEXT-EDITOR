import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = ({ siteName, mode, toggleDarkMode }) => {
  return (
    <nav
      className={`navbar navbar-expand-lg  navbar-dark bg-dark sticky-top shadow-lg `}
    >
      <div className="container-fluid d-flex justify-content-between">
        <div className="nav-col-media">
          <Link className="navbar-brand" to="/">
            {siteName}
          </Link>
        </div>
        <div className="nav-col-media">
          <ul className="navbar-nav d-flex flex-row me-auto mb-2 mb-lg-0">
            <li className="nav-item me-2">
              <Link className="nav-link " aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item me-2">
              <Link className="nav-link" to="/about">
                About
              </Link>
            </li>
            <li className="nav-item me-2">
              <div className="darkMode pt-2 ">
                <div className="form-check form-switch">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    role="switch"
                    aria-checked="true"
                    id="flexSwitchCheckDefault"
                    onClick={toggleDarkMode}
                  />
                  <label
                    className={`form-check-label text-light text-capitalize`}
                    htmlFor="flexSwitchCheckDefault"
                  >
                    {mode === "primary" ? "primary" : "Dark"} Mode
                  </label>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
