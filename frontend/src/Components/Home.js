import React, { useState, useEffect } from "react";
import Mimg from "../images/11101.svg";
import { useNavigate } from "react-router-dom";
import { Link } from "react-scroll";

export const Home = () => {
  const navigate = useNavigate();
  const [checkUser, setCheckUser] = useState(false);
  const handleJoin = (e) => {
    e.preventDefault();
    if (localStorage.getItem("app-user")) {
    } else {
      navigate("/login");
    }
  };
  useEffect(() => {
    if (localStorage.getItem("app-user")) {
      setCheckUser(true);
    }
  }, []);

  return (
    <div id="home">
      <section id="header" className="d-flex align-items-center ">
        <div className="container-fluid">
          <div className="row">
            <div className="col-11 pt-5 mx-auto">
              <div className="row">
                <div className="col-sm-5 pt-5 mr-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                  <h2
                    data-aos="slide-right"
                    data-aos-duration="1500"
                    data-aos-once="true"
                  >
                    <strong className="brand ">Fithub</strong>
                  </h2>
                  <h5
                    className="my-3 wow bounceIn"
                    data-aos="fade-in"
                    data-aos-duration="2500"
                    data-aos-once="true"
                  >
                    Push your fitness further with our mix of facilities and
                    we'll support you with advice on new and better ways to
                    train.
                  </h5>

                  <div
                    className="mt-3"
                    data-aos="fade-in"
                    data-aos-duration="2500"
                    data-aos-once="true"
                  >
                    <Link
                      href=""
                      className="join-btn "
                      data-wow-delay="2s"
                      onClick={handleJoin}
                      to={`${checkUser == true ? "courses" : ""}`}
                    >
                      Join Now
                    </Link>
                  </div>
                </div>
                <div
                  className="col-sm-7 order-1 order-lg-2 header-img ml-5"
                  data-aos="zoom-in"
                  data-aos-duration="1700"
                  data-aos-once="true"
                >
                  <img src={Mimg} className="img-fluid" alt="main image" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
