import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
// import cartSelector from "../../redux/slice/slector";
import { getAddToCart } from "../../redux/slice/currentProduct";
import { getProductSearch } from "../../redux/slice/searchProductSlice";

const HeaderSearch = (props) => {
  const { t } = useTranslation("common");
  const dispatch = useDispatch();

  const { listProduct } = useSelector((state) => state.searchProduct);

  const { numberOfProduct } = useSelector((state) => state.currentProduct);

  const [search, setSearch] = useState("");

  const handleAddToCart = (value) => {
    const addQuantity = {
      ...value,
      quantity: 1,
    };
    dispatch(getAddToCart(addQuantity));
  };

  useEffect(() => {
    dispatch(getProductSearch(search));
  }, [dispatch, search]);

  const showProductSearch = () => {
    return listProduct.map((e, i) => (
      <div className="product__box" key={i}>
        <div className="product__img">
          <Link to="/">
            <img src={e.image} alt="images" />
          </Link>
          <div className="product__overlay"></div>
          <div className="product__link">
            <Link onClick={() => handleAddToCart(e)} className="btn__common">
              {t("product.buy")}
            </Link>
            <Link to={`/products-detail/${e.id}`} className="btn__search">
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
    ));
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header__grid">
          <div className="header__logo">
            <Link to="/" title="Logo">
              <img src="assets/images/logo/01.png" alt="images" />
            </Link>
          </div>
          <div className="header__content">
            <div className="header__search">
              <form action="#" method="post">
                <span className="header__search--hotline">
                  {t("support.support")} : (04) 6674 2332 - (04) 3786 8904
                </span>
                <div className="header__search--input">
                  <input
                    placeholder={t("search.search")}
                    type="search"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                  />
                  <button className="btn-search" type="submit">
                    <i className="fa fa-search"></i>
                  </button>
                </div>
              </form>
            </div>
            <div className="header__cart">
              <Link to="/cart">
                <i className="fa fa-shopping-basket"></i>
                <span className="header__cart--amount">{numberOfProduct}</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="header__img">
        <img src="assets/images/header/02.png" alt="images" />
      </div>
      {search ? (
        <div className="header__content-search">
          <div className="container">
            <div className="header__content-search--columns">
              {showProductSearch()}
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </header>
  );
};

export default HeaderSearch;
