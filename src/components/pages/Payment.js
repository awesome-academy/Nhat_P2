import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import Header from "../partials/Header.js";
import PaymentChild from "../payment/PaymentChild.js";
import Footer from "../partials/Footer.js";

const Payment = () => {
  const history = useHistory();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      alert("Bạn chưa đăng nhập");
      history.push("/login");
    }
  }, [history]);

  return (
    <div className="payment-page">
      <Header />
      <div className="main">
        <PaymentChild />
      </div>
      <Footer />
    </div>
  );
};
export default Payment;
