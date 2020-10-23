import React from "react";
import Header from "../partials/Header.js";
import ListProductChild from "../listProduct/ListProductChild.js";
import Footer from "../partials/Footer.js";

const ListProduct = () => {
  return (
    <div className="list-product-page">
      <Header />
      <ListProductChild />
      <Footer />
    </div>
  );
};
export default ListProduct;
