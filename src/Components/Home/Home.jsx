import React, { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import "../Home/Home.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { Footer } from "../Footer/Footer";
import { Cart } from "../Cart/Cart";
import { useNavigate } from "react-router-dom";
import { Product } from "../Product/Product";
 import "bootstrap/dist/js/bootstrap.bundle.min";

const Home = () => {
  const image4 = require("../images/slider1.avif");
  const image5 = require("../images/slider2.avif");
  const image6 = require("../images/slider3.avif");

  const [products, setProducts] = useState([]);

  const navigate = useNavigate();
  const navigatecart = () => {
    navigate("/cart");
  };
  const productpage = (product) => {
    console.log(product);
    navigate("/productdetail", {
      state: {
        title: product.title,
        price: product.price,
        description: product.description,
        image: product.image,
        id : product.id
      },
    });
  };
  // "https://api.escuelajs.co/api/v1/products"
  
  // "https://fake-store-api.mock.beeceptor.com/api/products"
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(
          // "https://api.escuelajs.co/api/v1/products"
// "https://fake-store-api.mock.beeceptor.com/api/products"
    "https://fakestoreapi.com/products"
        );
        setProducts(response.data);
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchProducts();
  }, []);

  const addtocart = (product) => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const alreadyexits = cart.findIndex(item => item.id === product.id);

    if (alreadyexits !== -1) {
      cart[alreadyexits].quantity += 1;
    } else {
      const addcart = {
        title: product.title,
        image: product.image,
        price: product.price,
        description: product.description,
        id: product.id,
        quantity: 1
      };
      cart.push(addcart);
    }
    navigatecart();
    localStorage.setItem("cart", JSON.stringify(cart));
    console.log(JSON.stringify(cart));
    
    // const productInCart = cart.find(product => product.id === newProduct.id);
    // if (productInCart) {
    //   return cart.map(product =>
    //     product.id === newProduct.id
    //       ? { ...product, quantity: product.quantity + 1 }
    //       : product
    //   );
    // } else {
    //   return [...cart, { ...newProduct, quantity: 1 }];
    // }
  
  };

  
  return (
    <>
      <Navbar />
      <div
        id="carouselExampleAutoplaying"
        class="carousel slide"
        data-bs-ride="carousel"
      >
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src={image4} class="d-block w-100" alt="..." />
          </div>
          <div class="carousel-item">
            <img src={image5} class="d-block w-100" alt="..." />
          </div>
          <div class="carousel-item">
            <img src={image6} class="d-block w-100" alt="..." />
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
      {/* <div className="item">
        <img src="" alt="" />
        <div className="item-info"></div>
      </div> */}

      <div className="container-fluid  products">
        <div className="row">
          {products.map((product) => (
            <div className="col-md-4 item">
              <div className="cart">
                <img
                  src= {product.image}
                  alt=""
                  height="300px"
                  width="250px"
                  onClick={() => productpage(product)}
                />

                <p>{product.title}</p>
                <span className="price">${product.price}</span>

                {/* <span>{product.description}</span> */}
                <div className="buttons">
                  <a
                    className="addtocart bn3637 bn37"
                    onClick={() => addtocart(product)}
                  >
                    <FontAwesomeIcon icon={faCartShopping} className="facart" />
                    Add to cart
                  </a>
                 
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
};
export default Home;
// 238637c53abf0f439e0ef72867d447ae secretkey
// 24bca2f623361e03ce592ad35e48e836  apikey
