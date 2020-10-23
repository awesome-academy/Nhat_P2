import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../redux/slice/productsSlice";
import { getType, getAddToCart } from "../../redux/slice/currentProduct";
import { Link } from "react-router-dom";

const ListProductChild = () => {
  const { t } = useTranslation("common");
  const dispatch = useDispatch();

  const { products, loading, error } = useSelector((state) => state.products);

  const category = [
    t("category.rose"),
    t("category.snapdragon"),
    t("category.sweetPea"),
    t("category.zennia"),
    t("category.peony"),
    t("category.callaLify"),
    t("category.spray"),
    t("category.hydrangea"),
  ];

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  const handleAddToCart = (value) => {
    const addQuantity = {
      ...value,
      quantity: 1,
    };
    dispatch(getAddToCart(addQuantity));
  };

  const handleSelectType = (e) => {
    dispatch(getType(e));
  };

  return (
    <div className="shop__background">
      <div className="breadcrumb">
        <div className="container">
          <ul className="breadcrumb__inner">
            <li>
              <Link to="/">{t("breadcrumb.home")}</Link>
            </li>
            <li>
              <Link to="/">{t("breadcrumb.listProduct")}</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="shop">
        <div className="container">
          <div className="shop__grid">
            <div className="shop__sidebar">
              <div className="category__sidebar">
                <div className="title__section">
                  <h2 className="title__green">{t("titleSection.category")}</h2>
                </div>
                <ul className="category__product">
                  <li>
                    {category.map((e, i) => (
                      <Link
                        key={i}
                        className="category__product--link"
                        onClick={() => handleSelectType(e)}
                      >
                        {e}
                      </Link>
                    ))}
                  </li>
                </ul>
              </div>
            </div>
            <div className="shop__content">
              <div className="shop__content--banner">
                <img src="assets/images/page-title/01.jpg" alt="images" />
              </div>
              <div className="shop__content--columns">
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
                            onClick={() => handleAddToCart(e)}
                            className="btn__common"
                          >
                            {t("product.buy")}
                          </Link>
                          <Link
                            to={`/products-detail/${e.id}`}
                            className="btn__search"
                          >
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
                            className={
                              e.ratings >= 2 ? "fa fa-star" : "fa fa-star-o"
                            }
                            aria-hidden="true"
                          ></i>
                          <i
                            className={
                              e.ratings >= 3 ? "fa fa-star" : "fa fa-star-o"
                            }
                            aria-hidden="true"
                          ></i>
                          <i
                            className={
                              e.ratings >= 4 ? "fa fa-star" : "fa fa-star-o"
                            }
                            aria-hidden="true"
                          ></i>
                          <i
                            className={
                              e.ratings >= 5 ? "fa fa-star" : "fa fa-star-o"
                            }
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListProductChild;
