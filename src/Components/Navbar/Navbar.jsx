import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="nav navbar navbar-expand-lg sticky-top">
      <div className="container">
        <Link to="/" className="nav-brand fw-bolder">
          START REACT
        </Link>
        <button
          className="navbar-toggler display-flex align-items-center p-2"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          Menu <i className="fa-solid fa-bars fa-sm"></i>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav  ms-auto mb-2 mb-lg-0">
            <li>
              <Link to="/protofilio" className="nav-link active fw-bolder my-4 p-3">
                Portfolio
              </Link>
            </li>
            <li>
              <Link to="/about" className="nav-link fw-bolder my-4 p-3">
                About
              </Link>
            </li>
            <li>
              <Link to="/contact" className="nav-link fw-bolder my-4 p-3">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
