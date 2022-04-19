import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
import logo from "../images/slogo.svg";

export const Navbar = () => {
  const [checkUser, setCheckUser] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("app-user")) {
      setCheckUser(true);
    }
  }, []);
  const logout = () => {
    localStorage.clear();
    window.location.reload(false);
    window.scrollTo(0, 0);
  };

  return (
    <div id="nav">
      <nav className="navbar navbar-expand-lg  fixed-top" id="navbar-whole">
        <div className="container-fluid col-10">
          <Link to="nav" className="navbar-brand ">
            <h1>
              {/* <i className="fab fa-servicestack "></i> */}

              <i className="fa">
                <img src={logo} width="30" height="30" />
                <span className="px-2 fw-bold">
                  FIT<span className="hub">HUB</span>
                </span>
              </i>
            </h1>
          </Link>

          <div
            className="toogle-button navbar-toggler navbar"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fad fa-align-right h4  text-primary"></i>
          </div>

          <div className="collapse navbar-collapse " id="navbarNav">
            <div className="navbar-nav ms-auto ">
              <li className="nav-item px-3">
                <Link
                  className="nav-link hover-bg-danger"
                  aria-current="page"
                  to="nav"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item px-3 ">
                <Link className="nav-link" to="about">
                  About
                </Link>
              </li>
              <li className="nav-item px-3">
                <Link className="nav-link" to="courses">
                  Courses
                </Link>
              </li>
              <li className="nav-item px-3">
                <Link className="nav-link" to="pricing">
                  Pricing
                </Link>
              </li>
              <li className="nav-item px-3">
                <Link className="nav-link" to="contact">
                  Contact
                </Link>
              </li>
              {checkUser && checkUser == true ? (
                <div className="profile px-3">
                  <ul className="navbar-nav">
                    <li className="nav-item dropdown">
                      <a
                        className="nav-link dropdown-toggle"
                        href="#"
                        id="navbarDropdownMenuLink"
                        role="button"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <img
                          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeQ-HkOk0nyWwdR6GNhI19KyuIDOyg-_w_tQ&usqp=CAU"
                          width="30"
                          height="30"
                          className="rounded-circle"
                        />
                      </a>
                      <div
                        className="dropdown-menu"
                        aria-labelledby="navbarDropdownMenuLink"
                      >
                        <a className="dropdown-item " href="" onClick={logout}>
                          Log Out
                        </a>
                      </div>
                    </li>
                  </ul>
                </div>
              ) : (
                ""
              )}

              {/* profile dropdown */}
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};
