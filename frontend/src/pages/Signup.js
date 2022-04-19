import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import logo from "../images/slogo.svg";

export const Signup = () => {
  const [loader, setLoader] = useState(false);

  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const toastOptions = {
    position: "bottom-right",
    autoClose: 8000,
    pauseOnHover: true,
    draggable: true,
    theme: "dark",
  };

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleValidation = () => {
    const { name, email, password } = values;
    if (name == "" || email == "" || password == "") {
      toast.error("Please fill all the inputs", toastOptions);
      setLoader(false);
      return false;
    } else if (password.length < 7) {
      setLoader(false);
      toast.error("Password must contain atleast 7 characters", toastOptions);
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, password } = values;
    if (handleValidation()) {
      setLoader(true);
      const { data } = await axios.post("http://localhost:5000/signup", {
        name,
        email,
        password,
      });
      if (data.status == true) {
        localStorage.setItem("app-user", JSON.stringify(data.user));
        navigate("/");
      } else {
        setLoader(false);
        toast.error(data.msg, toastOptions);
      }
    }
  };

  return (
    <div className="signuppage">
      <div className="container">
        <div className="content-contenaire">
          <div className="top-container">
            <h1>
              <i class="fa">
                <img src={logo} width="30" height="30" />
                <span class="px-2 fw-bold">
                  FIT<span className="hub">HUB</span>
                </span>
              </i>
            </h1>
            <h2> signup </h2>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="input">
              <input
                name="name"
                type="text"
                placeholder="Name"
                onChange={(e) => {
                  handleChange(e);
                }}
              />
              <input
                name="email"
                type="email"
                placeholder="Email"
                onChange={(e) => {
                  handleChange(e);
                }}
              />
              <input
                name="password"
                type="password"
                placeholder="Password"
                onChange={(e) => {
                  handleChange(e);
                }}
              />
            </div>

            {loader ? (
              <button type="submit" className="loader-btn">
                <div class="spinner-border spinner-border-sm" role="status">
                  <span class="sr-only">Loading...</span>
                </div>
              </button>
            ) : (
              <input type="submit" value="signup" />
            )}
          </form>
          <p>
            Already have an account ?<Link to="/login">Login</Link>
          </p>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};
