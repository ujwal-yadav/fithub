import React from "react";
import logo from "../images/slogo.svg";

export const Contact = () => {
  return (
    <div id="contact">
      <div className="container text-center align-items-center justify-content-center pb-5 p-5 ">
        <h3
          className="contact-heading text-center pt-5"
          data-aos="fade-right"
          data-aos-duration="1800"
          data-aos-once="true"
        >
          Contact Us
        </h3>
        <br />
        <div className="row">
          <div
            className="col-md-8 "
            data-aos="fade-in"
            data-aos-duration="1800"
            data-aos-once="true"
          >
            <form>
              <input
                className="form-control"
                name="name"
                placeholder="Name..."
              />
              <br />
              <input
                className="form-control"
                name="phone"
                placeholder="Phone..."
              />
              <br />
              <input
                className="form-control"
                name="email"
                placeholder="E-mail..."
              />
              <br />
              <textarea
                className="form-control"
                name="text"
                placeholder="How can we help you ?"
              ></textarea>
              <br />
              <input
                className="btn btn-primary m-3 px-5 py-2"
                type="submit"
                value="SEND"
              />
              <br />
              <br />
            </form>
          </div>
          <div
            className="details col-md-4"
            data-aos="fade-in"
            data-aos-duration="1800"
            data-aos-once="true"
          >
            <div className="navbar-brand mx-3">
              <h1>
                <i className="fa">
                  <img src={logo} width="30" height="30" />
                  <span className="px-2 fw-bold">
                    FIT<span className="hub">HUB</span>
                  </span>
                </i>
              </h1>
            </div>
            <b>Customer service:</b> <br />
            +91 123 456 7890
            <br />
            <a href="mailto:support@fithub.com">support@fithub.com</a>
            <br />
            <br />
            <br />
            <b>Headquarter:</b>
            <br />
            Fithub, <br />
            Sector-2,CDA
            <br />
            Cuttack, India
            <br />
            Phone: +91 987 654 3210
            <br />
          </div>
        </div>

        <div className="social-icons container text-center align-items-center justify-content-center pt-4">
          <a
            target="_blank"
            href="https://www.facebook.com"
            className="px-3 fab fa-facebook"
          ></a>

          <a
            target="_blank"
            href="https://www.youtube.com"
            className="px-3 fab fa-youtube"
          ></a>
          <a
            target="_blank"
            href="https://www.twitter.com"
            className="px-3 fab fa-twitter"
          ></a>
          <a
            target="_blank"
            href="https://www.instagram.com"
            className="px-3 fab fa-instagram"
          ></a>
        </div>
      </div>
    </div>
  );
};
