import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { getProductsHome } from "../../redux/slice/productsSlice";
import { getAddToCart } from "../../redux/slice/currentProduct";
import { Link } from "react-router-dom";
const NewProducts = () => {
  const { t } = useTranslation("common");
  const dispatch = useDispatch();
  const { products, loading, error } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(getProductsHome());
  }, [dispatch]);

  const handleAddToCart = (value) => {
    const abc = {
      ...value,
      quantity: 1,
    };

    dispatch(getAddToCart(abc));
  };

  return (
    <section className="new-products">
      <div className="container">
        <div className="title__section">
          <h2 className="title__green">{t("titleSection.listProduct")}</h2>
        </div>
        <div className="new-products__columns">
          {loading ? (
            <p>Loading...</p>
          ) : error ? (
            <p>{error.message}</p>
          ) : (
            products.map((e, i) => (
              <div className="product__box" key={i}>
                <div className="product__img">
                  <Link to="/">
                    <img src={e.image} alt="images" />
                  </Link>
                  <div className="product__overlay"></div>
                  <div className="product__link">
                    <Link
                      to="/"
                      onClick={() => handleAddToCart(e)}
                      className="btn__common"
                    >
                      {t("product.buy")}
                    </Link>
                    <Link to="/" className="btn__search">
                      <i className="fa fa-search"></i>
                    </Link>
                  </div>
                </div>
                <div className="product__content">
                  <h3 className="product__name">
                    <Link to="/">{e.name}</Link>
                  </h3>
                  <div className="product__evaluate">
                    <i className="fa fa-star" aria-hidden="true"></i>
                    <i
                      className={e.ratings >= 2 ? "fa fa-star" : "fa fa-star-o"}
                      aria-hidden="true"
                    ></i>
                    <i
                      className={e.ratings >= 3 ? "fa fa-star" : "fa fa-star-o"}
                      aria-hidden="true"
                    ></i>
                    <i
                      className={e.ratings >= 4 ? "fa fa-star" : "fa fa-star-o"}
                      aria-hidden="true"
                    ></i>
                    <i
                      className={e.ratings >= 5 ? "fa fa-star" : "fa fa-star-o"}
                      aria-hidden="true"
                    ></i>
                  </div>
                  <div className="product__price">
                    <span className="price">{e.price}</span>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
};
export default NewProducts;
