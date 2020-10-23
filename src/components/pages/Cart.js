import React from "react";
import Header from "../partials/Header.js";
import CartChild from "../cart/CartChild.js";
import Footer from "../partials/Footer.js";

const Cart = () => {
  return (
    <div className="cart-page">
      <Header />
      <CartChild />
      <Footer />
    </div>
  );
};
export default Cart;
