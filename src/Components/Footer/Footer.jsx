
import React from "react";
import style from "./Footer.module.css";



export default function Footer() {
    return (
<footer className={style["footer-bg"]}>
  <div className="container">
    <div className="row">
      <div className="col-lg-4 mt-5">
        <div className="location">
          <h4 className="h3 fw-bolder mb-4">Location</h4>
          <p>
            2215 John Daniel Drive <br />
            Clark, MO 65243
          </p>
        </div>
      </div>
      <div className="col-lg-4 mt-5">
        <div className="links">
          <h4 className="h3 fw-bolder mb-5">Around the web</h4>
          <ul className="d-flex justify-content-center list-unstyled">
            <li className="mx-2 d-flex justify-content-center align-items-center">
              <a href="#">
                <i className="fa-brands fa-facebook-f"></i>
              </a>
            </li>
            <li className="mx-2 d-flex justify-content-center align-items-center">
              <a href="#">
                <i className="fa-brands fa-twitter"></i>
              </a>
            </li>
            <li className="mx-2 d-flex justify-content-center align-items-center">
              <a href="#">
                <i className="fa-brands fa-linkedin-in"></i>
              </a>
            </li>
            <li className="mx-2 d-flex justify-content-center align-items-center">
              <a href="#">
                <i className="fa-brands fa-youtube"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="col-lg-4 mt-5">
        <h4 className="h3 fw-bolder mb-4">About freelancer</h4>
        <p className="fw-bolder">
        Freelance is a free to use, licensed Bootstrap theme created by Route

        </p>
      </div>
    </div>
  </div>
  <div className={style["copy-right"]}>
    <p className="p-4 text-center">
    Copyright © Your Website 2021    </p>
  </div>
</footer>
    );
}
