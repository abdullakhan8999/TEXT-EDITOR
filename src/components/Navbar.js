import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = ({ siteName, mode, toggleDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav
      className={`navbar navbar-expand-lg  navbar-dark bg-dark sticky-top shadow-lg `}
    >
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          {siteName}
        </Link>
        <button className="navbar-toggler" type="button" onClick={handleToggle}>
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className={`collapse navbar-collapse ${isOpen ? "show" : ""}`}
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link " aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                About
              </Link>
            </li>
            <li>
              <div className="darkMode pt-2 ms-1 ms-3">
                <div className="form-check form-switch">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    role="switch"
                    aria-checked="true"
                    style={{ fontSize: "1rem" }}
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

          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            ></input>
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
