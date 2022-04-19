import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

export const Login = () => {
  const [loader, setLoader] = useState(false);

  const navigate = useNavigate();
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const toastOptions = {
    position: "bottom-right",
    autoClose: 8000,
    pauseOnHover: true,
    draggable: true,
    theme: "dark",
  };

  const handleValidation = () => {
    setLoader(true);
    const { email, password } = values;
    if (email === "" || password === "") {
      setLoader(false);
      toast.error("Email and Password is required", toastOptions);
      return false;
    } else if (password.length < 7) {
      setLoader(false);
      toast.error("Password must contain atleast 7 characters", toastOptions);
      return false;
    }
    return true;
  };

  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = values;
    if (handleValidation()) {
      const { data } = await axios.post("http://localhost:5000/login", {
        email,
        password,
      });
      if (data.status == false) {
        setLoader(false);
        toast.error(data.msg, toastOptions);
      } else {
        toast.success(data.msg, toastOptions);
        localStorage.setItem("app-user", JSON.stringify(data.user));
        navigate("../");
      }
    }
  };

  return (
    <div className="loginpage">
      <div className="container">
        <div className="content-contenaire">
          <div className="top-container">
            <h1>
              <i className="fab fa-servicestack ">
                <span className="px-2 fw-bold">
                  FIT<span className="hub">HUB</span>
                </span>
              </i>
            </h1>
            <h2> login</h2>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="input">
              <input
                name="email"
                onChange={(e) => {
                  handleChange(e);
                }}
                type="email"
                placeholder="Email"
              />
              <input
                name="password"
                onChange={(e) => {
                  handleChange(e);
                }}
                type="password"
                placeholder="Password"
              />
            </div>

            {loader ? (
              <button type="submit" className="loader-btn">
                <div class="spinner-border spinner-border-sm" role="status">
                  <span class="sr-only">Loading...</span>
                </div>
              </button>
            ) : (
              <input type="submit" value="login" />
            )}
          </form>

          <p>
            Dont't have an account ?<Link to="/signup">Signup</Link>
          </p>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};
