import React from "react";
import Mimg from "../images/8225.svg";

export const Courses = () => {
  return (
    <div id="courses">
      <div className="container-fluid">
        <h2
          className="offer-heading text-center"
          data-aos="fade"
          data-aos-duration="2000"
          data-aos-once="true"
        >
          We Offer
        </h2>
        <div className="row">
          <div className="col-11 mx-auto ">
            <div className="row">
              <div className="col-sm-3 pt-1 mr-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                <div className="offer-desc my-5">
                  <p
                    data-aos="slide-right"
                    data-aos-duration="1000"
                    data-aos-once="true"
                    className="p1"
                  >
                    Cardio Training
                  </p>
                  <p
                    data-aos="slide-right"
                    data-aos-duration="1200"
                    data-aos-once="true"
                    className="p2"
                  >
                    Aerobics
                  </p>
                  <p
                    data-aos="slide-right"
                    data-aos-duration="1300"
                    data-aos-once="true"
                    className="p3"
                  >
                    Yoga
                  </p>
                  <p
                    data-aos="slide-right"
                    data-aos-duration="1400"
                    data-aos-once="true"
                    className="p4"
                  >
                    Body Building
                  </p>
                  <p
                    data-aos="slide-right"
                    data-aos-duration="1500"
                    data-aos-once="true"
                    className="p5"
                  >
                    pilates
                  </p>
                </div>
              </div>
              <div
                className="col-sm-9 order-1 order-lg-2 header-img ml-5"
                data-aos="fade"
                data-aos-duration="2700"
                data-aos-once="true"
              >
                <img src={Mimg} className="img-fluid" alt="main image" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
