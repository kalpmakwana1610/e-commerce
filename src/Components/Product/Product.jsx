import { useLocation, useNavigate } from "react-router-dom";
import "../Product/Product.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import Navbar from "../Navbar/Navbar";
import { Footer } from "../Footer/Footer";
import { useState } from "react";
export const Product = (product) => {
  const location = useLocation();
  console.log("location", JSON.stringify(location.state.image));
  const navigate = useNavigate();
  const navigatecart = () => {
    navigate("/cart");
  };
  // const [mainimage,setMainimage] = useState(location.state.image[0]);
  const addtocart = () => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const alreadyexits = cart.findIndex((item) => item.id === location.state.id);

    if (alreadyexits !== -1) {
      cart[alreadyexits].quantity += 1;
    } else {
      const addcart = {
        title: location.state.title,
        image: location.state.image,
        price: location.state.price,
        // description: product.description,
        id: location.state.id,
        
      };
      cart.push(addcart);
    }

    navigatecart();
    localStorage.setItem("cart", JSON.stringify(cart));
    console.log(JSON.stringify(cart));
  };
  console.log("id =",location.state.id);
  console.log("location", JSON.stringify(location.state.id));
  return (
    <>
     
        <Navbar />
        <div className="container">
        <div className="arrow">
          <a href="/">
            <FontAwesomeIcon icon={faArrowLeft} />{" "}
          </a>
        </div>
        <h1>{location.state.title}</h1>
        <div className="images">
          {/* <div className="photos">
            <img
              src={location.state.image[0]}
              alt=""
              height="200px"
              width="200px"
            />
            <img
              src={location.state.image[1]}
              onClick={() => setMainimage(location.state.image[1])}
              alt=""
              height="200px"
              width="200px"
            />
            <img
              src={location.state.image[2]}
              onClick={() => setMainimage(location.state.image[2])}
              alt=""
              height="200px"
              width="200px"
            />
          </div> */}
          <img src={location.state.image} alt="" height="400px" />
        </div>
        <p>{location.state.description}</p>
        <h3>${location.state.price}</h3>
      
        
        <a className="addtocart bn3637 bn37" onClick={() => addtocart()}>
          <FontAwesomeIcon icon={faCartShopping} className="facart" />
          Add to cart
        </a>
        
      </div>
      <Footer />
    </>
  );
};
