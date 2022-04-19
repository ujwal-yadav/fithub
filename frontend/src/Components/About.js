import React from "react";
import Mimg from "../images/8225.svg";

export const About = () => {
  return (
    <div id="about">
      <div className="container-fluid d-flex justify-content-center flex-column">
        <div className="row text-center d-flex align-items-center">
          <div className="col-11 p-2 mx-auto">
            <div className="col ">
              <h2
                data-aos="fade-up"
                data-aos-duration="1500"
                data-aos-once="true"
              >
                <strong className="about-heading">About Us</strong>
              </h2>
              <div
                className="about-desc"
                data-aos="fade-up"
                data-aos-duration="1500"
                data-aos-once="true"
              >
                <h3 className="my-5 p-5">
                  Fithub feature progressive programs with world class fitness
                  equipment, trainers and nutrition counselors to help you your
                  fitness further. We have the widest range of group fitness
                  classes such Yoga, Aerobics, Zumba, Les Mills favorites & much
                  more.
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
