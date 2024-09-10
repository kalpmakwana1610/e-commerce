import React, { useState } from "react";
import "./Navbar.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCartShopping } from '@fortawesome/free-solid-svg-icons';
const Navbar = () => {
  const image = require("../images/wordrobe2.png");
 
  return (
    <>
    <div className="container">
      <div className="row">
        <div className="navbar">
          <div className="col-md-3 home">
          <a href="/"><img src={image} alt="" height="50px" width="50px"/>
            wardrobe</a>
          </div>
          <div className="col-md-6">
            <div className="options">
              <a href="/Men">men </a>
              <a href="/Women">women</a>
              <a href="/Kids">kids</a>
              <a href="/About">about</a>
            </div>
          </div>
          <div className="col-md-2 login">
            <a href="/login">login</a>
            
          </div>
          <div className="col-md-1 icons">
          <a href="/cart"><FontAwesomeIcon icon={faCartShopping} className="facart"/>
          </a>
          </div>
        </div>
       
      </div>
    </div>
    <hr />
    </>
  );
};

export default Navbar;
