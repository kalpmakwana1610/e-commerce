import React from "react";
import Navbar from "../Navbar/Navbar";
import "../Login/Login.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Footer } from "../Footer/Footer";

const Login = () => {
  const image = require("../images/shirt-mockup-concept-with-plain-clothing.jpg");
  const [emailid, setEmailid] = useState("");
  const [passwordid, setPasswordid] = useState("");
  const [notification, setNotification] = useState("");

  const navigate = useNavigate();
  const homepage = () => {
    navigate("/");
  };
  const loginbtn = () => {
    if (emailid === "" && passwordid === "") {
      setNotification("please enter the email and password");
    } else if (
      localStorage.getItem("email") === emailid &&
      localStorage.getItem("password") === passwordid
    ) {
      homepage();
      alert("login successfully");
    } else {
      setNotification("please enter the correct email and password");
    }
  };
  const myStyle = {
    backgroundImage: `url(${image})`,
    height: "100vh",

    width: "1500px",

    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };
  return (
    <div>
      <Navbar />
      <div className="container loginform " style={myStyle}>
        <div className="row loginmain">
          <div className="form">
            <div className="register">
              <h3>Login Here!!</h3>
            </div>

            <div className="detailformail">
              <label htmlFor="" className="col-md-6">
                Email:-
              </label>
              <input
                type="email"
                className="col-md-6"
                onChange={(e) => {
                  setEmailid(e.target.value);
                }}
              />
            </div>
            <div className="detailforpass">
              <label htmlFor="" className="col-md-6">
                Password:-
              </label>
              <input
                type="password"
                className="col-md-6"
                onChange={(e) => {
                  setPasswordid(e.target.value);
                }}
              />
            </div>
            <div className="error">{notification}</div>
            <div className="btm">
              <button className="signin" onClick={() => loginbtn()}>
                Signin
              </button>
            </div>
            <div className="logipage">
              Didn't have registred ? <a href="/signup">signup</a>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};
export default Login;
