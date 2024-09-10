import React from "react";
import Navbar from "../Navbar/Navbar";
import "./Signup.css";
import { useState } from "react";
import { validateEmail } from "../../utils/comman";
import { useNavigate } from "react-router-dom";
import { Footer } from "../Footer/Footer";
const Signup = () => {
  const images = require("../images/regitrarimage.avif");
  //   const image = require("../images/signup img.png");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [birthdate, setBirthdate] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repassword, setRepassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const homepage = () => {
    navigate("/");
  };

  const handlesubmit = () => {
    if (firstname === "") {
      setError("please enter first name");
    } else if (lastname === "") {
      setError("please enter last name");
    } else if (birthdate === "") {
      setError("please enter birthdate");
    } else if (!validateEmail(email)) {
      setError("please enter valid email id");
    } else if (password === "" || password.length <= 4) {
      setError("password must be more than 4 digit");
    } else if (repassword !== password) {
      setError("password and confirm password are not same");
    } else {
      localStorage.setItem("firstname", firstname);
      localStorage.setItem("lastname", lastname);
      localStorage.setItem("birthdate", birthdate);
      localStorage.setItem("email", email);
      localStorage.setItem("password", password);
      localStorage.setItem("repassword", repassword);

      alert("form submitted");

      console.log("first name :-" + firstname);
      console.log("last name :-" + lastname);
      console.log("bithdate :-" + birthdate);
      console.log("email :-" + email);
      console.log("password :-" + password);
      console.log("confirm password :-" + repassword);
      homepage();
    }
  };
  const bgimage = {
    backgroundImage: `url(${images})`,
    height: "100vh",

    width: "1500px",

    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };
  return (
    <div className="signuppage">
      <Navbar />
      <div className="container signupmain" style={bgimage}>
        <div className="row ">
          <div className="formsignup">
            <div className="register">
              <h3>Register here!!</h3>
            </div>
            <div className="detail">
              <label htmlFor="" className="col-md-6">
                First Name:-
              </label>
              <input
                type="text"
                className="col-md-6"
                onChange={(e) => {
                  setFirstname(e.target.value);
                }}
              />
            </div>
            <div className="detail">
              <label htmlFor="" className="col-md-6">
                Last Name:-
              </label>
              <input
                type="text"
                className="col-md-6"
                onChange={(e) => {
                  setLastname(e.target.value);
                }}
              />
            </div>
            <div className="detail">
              <label htmlFor="" className="col-md-6">
                Birthdate:-
              </label>
              <input
                type="date"
                className="col-md-6"
                onChange={(e) => {
                  setBirthdate(e.target.value);
                }}
              />
            </div>
            <div className="detail">
              <label htmlFor="" className="col-md-6">
                Email:-
              </label>
              <input
                type="email"
                className="col-md-6"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </div>
            <div className="detail">
              <label htmlFor="" className="col-md-6">
                Password:-
              </label>
              <input
                type="password"
                className="col-md-6"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </div>
            <div className="detail">
              <label htmlFor="" className="col-md-6">
                Confirm Password:-
              </label>
              <input
                type="password"
                className="col-md-6"
                onChange={(e) => {
                  setRepassword(e.target.value);
                }}
              />
            </div>
            <div className="error">{error}</div>
            <div className="btm">
              <button className="signup" onClick={() => handlesubmit()}>
                Signup
              </button>
            </div>
            <div className="logipage">
              you have already registred? <a href="/Login">login</a>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Signup;
