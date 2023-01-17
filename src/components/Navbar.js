import React from "react";
// import { Link } from "react-router-dom";
import "./Navbar.css";
export default function Navbar({ siteName, mode, toggleDarkMode }) {
  return (
    <div className="">
      <nav className={`navbar navbar-expand-lg shadow navbar-dark bg-${mode} `}>
        <div className=" container-fluid mediaNavBar ">
          <a className="navbar-brand text-decoration-none fs-3" href="#">
            {siteName}
          </a>
          <div className="d-flex" id="navbarSupportedContent">
            <form className="" role="button">
              <ul className="navbar-nav d-flex flex-row me-auto mb-2 mb-lg-0">
                <li className="nav-item mx-3">
                  <a className="nav-link" href="#">
                    Home
                  </a>
                </li>
                {/*<li className="nav-item mx-3">
                  <a className="nav-link" href="#">
                    About
                  </a>
                </li>*/}
              </ul>
            </form>

            <div className="darkMode pt-2 ms-1 me-3">
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
                  {mode} Mode
                </label>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
