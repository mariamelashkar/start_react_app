import React from "react";
import style from "./Contact.module.css";

export default function Contact() {
  return (
    <section className={style["contact"]}>
      <div className="container">
        <h2 className>CONTACT ME</h2>
        <div className="Contact_divider">
          <i className="fa-solid fa-star fa-xlg"></i>
        </div>
        <div className="row">
          <div className="col-lg-8 mx-auto mt-5">
            <div>
              <div className="form-group ">
                <input
                  type="text"
                  placeholder="Name"
                  className={style["form-control"]}
                />
              </div>
              <div className="form-group ">
                <input
                  type="email"
                  placeholder="Email Address"
                  className={style["form-control"]}
                />
              </div>
              <div className="form-group ">
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className={style["form-control"]}
                />
              </div>
              <div className="form-group ">
                <textarea className="form-control" placeholder="Message"></textarea>
              </div>
              <div className="form-group">
                <input type="submit" className="btn btn-primary" value="send" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
