import React from "react";
import NewProducts from "../home/NewProducts.js";
import Header from "../partials/Header.js";
import Blog from "../home/Blog.js";
import Footer from "../partials/Footer.js";
import Slide from "../home/Slide.js";
import Banner from "../home/Banner.js";

const Home = () => {
  return (
    <div className="home-pages">
      <Header />
      <div className="main">
        <Slide />
        <NewProducts />
        <Banner />
        <Blog />
      </div>
      <Footer />
    </div>
  );
};
export default Home;
