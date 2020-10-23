import React from "react";
import Header from "../partials/Header.js";
import ProductDetailChild from "../productdetail/ProductDetailChild.js";
import Footer from "../partials/Footer.js";

const ProductDetail = () => {
  return (
    <div className="product-detail-page">
      <Header />
      <div className="main">
        <ProductDetailChild />
      </div>
      <Footer />
    </div>
  );
};
export default ProductDetail;
