import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const Checkout = () => {
  const [values, setValues] = useState({
    name: "",
    number: "",
    expiry: "",
    cvv: "",
    street: "",
    city: "",
    state: "",
    zip: "",
  });
  const [showModal, setShowModal] = useState(false);

  const toastOptions = {
    position: "bottom-right",
    autoClose: 8000,
    pauseOnHover: true,
    draggable: true,
    theme: "dark",
  };

  const params = useParams();
  const { membership } = params;
  let price = "";
  if (membership == "beginner") {
    price = "700";
  } else if (membership == "premium") {
    price = "1100";
  } else {
    price = "1500";
  }
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  const handleValidation = () => {
    const { name, number, expiry, cvv, street, city, state, zip } = values;
    if (
      name == "" ||
      number == "" ||
      expiry == "" ||
      cvv == "" ||
      street == "" ||
      city == "" ||
      state == "" ||
      zip == ""
    ) {
      setShowModal(false);
      toast.error("Please fill all the inputs", toastOptions);
      return false;
    }
    return true;
  };

  const handleSubmit = () => {
    if (handleValidation()) {
      setShowModal(true);
    }
  };

  return (
    <div className="checkout">
      <div className="container mt-5 px-5 ">
        <div className="mb-4">
          <h2>Confirm order and pay</h2>
          <span>
            please make the payment, after that you can enjoy all the features
            and benefits.
          </span>
        </div>
        <div className="row">
          <div className="col justify-center">
            <div className="card p-3 px-0">
              <h4 className="text-uppercase">Payment details</h4>
              <div className="inputbox mt-3">
                <input
                  onChange={(e) => {
                    handleChange(e);
                  }}
                  type="text"
                  name="name"
                  className="form-control"
                  required="required"
                />

                <span>Name on card</span>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <div className="inputbox mt-3 mr-2">
                    <input
                      onChange={(e) => {
                        handleChange(e);
                      }}
                      type="number"
                      name="number"
                      className="form-control"
                      required="required"
                    />
                    <i className="fa fa-credit-card"></i>
                    <span>Card Number</span>
                  </div>
                </div>
                <div className="col-md-6 ">
                  <div className="d-flex flex-row ">
                    <div className="inputbox mt-3 mr-4">
                      <input
                        onChange={(e) => {
                          handleChange(e);
                        }}
                        type="number"
                        name="expiry"
                        className="form-control"
                        required="required"
                      />
                      <span>Expiry</span>
                    </div>
                    <div className="inputbox mt-3 mr-4 ">
                      <input
                        onChange={(e) => {
                          handleChange(e);
                        }}
                        type="number"
                        name="cvv"
                        className="form-control"
                        required="required"
                      />

                      <span>CVV</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-4 mb-4">
                <h6 className="text-uppercase">Billing Address</h6>
                <div className="row mt-3">
                  <div className="col-md-6">
                    <div className="inputbox mt-3 mr-2">
                      <input
                        onChange={(e) => {
                          handleChange(e);
                        }}
                        type="text"
                        name="street"
                        className="form-control"
                        required="required"
                      />
                      <span>Street Address</span>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="inputbox mt-3 mr-2">
                      <input
                        onChange={(e) => {
                          handleChange(e);
                        }}
                        type="text"
                        name="city"
                        className="form-control"
                        required="required"
                      />
                      <span>City</span>
                    </div>
                  </div>
                </div>
                <div className="row mt-2">
                  <div className="col-md-6">
                    <div className="inputbox mt-3 mr-2">
                      <input
                        onChange={(e) => {
                          handleChange(e);
                        }}
                        type="text"
                        name="state"
                        className="form-control"
                        required="required"
                      />
                      <span>State/Province</span>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="inputbox mt-3 mr-2">
                      <input
                        onChange={(e) => {
                          handleChange(e);
                        }}
                        type="number"
                        name="zip"
                        className="form-control"
                        required="required"
                      />
                      <span>Zip code</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-4 mb-4 d-flex justify-content-between">
              <span></span>
              <button
                className="pay-btn px-3 py-2 h4"
                type="button"
                data-toggle="modal"
                data-target="#success_tic"
                onClick={handleSubmit}
              >
                Pay ₹ {price}
              </button>
            </div>
          </div>
        </div>
      </div>
      {showModal ? (
        <div className="modal fade" role="dialog" id="success_tic">
          <div className="modal-dialog">
            <div className="modal-content">
              <a className="close" href="#" data-dismiss="modal">
                &times;
              </a>
              <div className="page-body">
                <h1 style={{ textAlign: "center" }}>
                  <div className="checkmark-circle">
                    <div className="background"></div>
                    <div className="checkmark draw"></div>
                  </div>
                </h1>
                <div className="head">
                  <h3>Purchase Successfull</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}

      <ToastContainer />
    </div>
  );
};
