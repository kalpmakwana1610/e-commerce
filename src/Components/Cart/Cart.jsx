import Navbar from "../Navbar/Navbar";
import "../Cart/Cart.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrash,
  faPlus,
  faCheck,
  faMinus,
  faArrowLeft,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { Footer } from "../Footer/Footer";

export const Cart = () => {
  const [totalAmount, setTotalAmount] = useState(0);
  const [orderPlaced, setOrderPlaced] = useState(false);
  const location = useLocation();

  const calculateTotalAmount = () => {
    let total = cart.reduce((acc, product) => {
      return acc + product.price * product.quantity;
    }, 0);
    setTotalAmount(total);
  };

  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("cart");
    const parsedCart = savedCart ? JSON.parse(savedCart) : [];
    return parsedCart.map((product) => ({
      ...product,
      quantity: product.quantity || 1,
    }));
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
    calculateTotalAmount();
  }, [cart]);

  const increaseQuantity = (productId) => {
    setCart((prevCart) =>
      prevCart.map((product) =>
        product.id === productId
          ? { ...product, quantity: product.quantity + 1 }
          : product
      )
    );
  };

  const decreaseQuantity = (productId) => {
    setCart((prevCart) =>
      prevCart.map((product) =>
        product.id === productId && product.quantity > 1
          ? { ...product, quantity: product.quantity - 1 }
          : product
      )
    );
  };

  const removeItem = (productId) => {
    const updatedCart = cart.filter((product) => product.id !== productId);
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const buyProduct = () => {
    console.log("Congratulations! Your order is on process.");
    setOrderPlaced(true);
    // setCart([]);
    localStorage.removeItem("cart");
  };

  const navigate = useNavigate();
  const productPage = (product) => {
    console.log(product);
    navigate("/productdetail", {
      state: {
        title: product.title,
        price: product.price,
        description: product.description,
        image: product.image,
        id: product.id,
      },
    });
  };

  return (
    <>
      <Navbar />
      <div className="backtohome">
        <a href="/">
          <FontAwesomeIcon icon={faArrowLeft} />{" "}
        </a>
      </div>

      <div className="main">
        <div className="container">
       
        {orderPlaced ? (
          <div className="orderplaced">
            <h2>Congratulations! Your order is on process</h2>
            <span className="checkbtn">
              <FontAwesomeIcon icon={faCheck} />
            </span>
            <h3>Thank you for shopping with us</h3>
            <a href="/" className="gotohome">
              <b>Back to home</b>
            </a>
          </div>
        ) : (
          <>
            {cart.length > 0 ? (
              <div classname="container cartandprice">
                <div className="row">
                  <div className="cartmain">
                    {cart.map((product) => (
                      <div className="row product" key={product.id}>
                        <div className="items">
                          <div className="col-md-3">
                            <img
                              src={product.image}
                              alt=""
                              height="200px"
                              onClick={() => productPage(product)}
                            />
                          </div>
                          <div className="col-md-7 detail">
                            <div className="header">
                              <p>{product.title}</p>
                              <button
                                className="btn btn-danger"
                                onClick={() => removeItem(product.id)}
                              >
                                <FontAwesomeIcon icon={faTrash} />
                              </button>
                            </div>
                            <div className="detail2">
                              <div className="qty">
                                Select the Quantity:-
                                <a
                                  className="minusbutton"
                                  onClick={() => decreaseQuantity(product.id)}
                                >
                                  <FontAwesomeIcon icon={faMinus} />
                                </a>
                                <p className="productqty p">
                                  {product.quantity}
                                </p>
                                <a
                                  className="plusbutton"
                                  onClick={() => increaseQuantity(product.id)}
                                >
                                  <FontAwesomeIcon icon={faPlus} />
                                </a>
                              </div>
                              <span className="prices span">
                                <b>Price:</b> $
                                {product.price * product.quantity}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="col-md-2 details">
                    <div className="">
                    <p >
                      <hr></hr>PRICE DETAILS
                    </p>
                    <p>
                      <hr></hr>
                      <b>Price :-</b> <span>${totalAmount.toFixed(2)}</span>
                    </p>
                    <p >
                      <b>Discount :-</b> <span>10%</span>
                    </p>
                    <p >
                      <b>Delivery :-</b>
                      <span
                        style={{
                          textDecoration: "line-through",
                          color: "gray",
                        }}
                      >
                        $5
                      </span>{" "}
                      <span className="free">Free</span>
                    </p>
                    <p>
                      <hr></hr>
                      <b>Total : </b>$
                      {Math.floor(totalAmount - (totalAmount / 100) * 10)}
                    </p>
                    <button className="buybutton" onClick={buyProduct}>
                      Place Order
                    </button>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="cartempty">
                <h1>Cart is empty</h1>
                <a href="/" className="addproduct">
                  Add product to your cart
                </a>
              </div>
            )}
          </>
        )}
        </div>
      </div>
      <Footer />
    </>
  );
};
