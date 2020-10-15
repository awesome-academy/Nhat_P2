import React from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
// import cartSelector from "../../redux/slice/slector";

const HeaderSearch = (props) => {
  const { t } = useTranslation("common");
  const { quantityItem } = useSelector((state) => state.currentProduct);

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
                  <input placeholder={t("search.search")} type="search" />
                  <button className="btn-search" type="submit">
                    <i className="fa fa-search"></i>
                  </button>
                </div>
              </form>
            </div>
            <div className="header__cart">
              <Link to="/cart">
                <i className="fa fa-shopping-basket"></i>
                <span className="header__cart--amount">{quantityItem}</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="header__img">
        <img src="assets/images/header/02.png" alt="images" />
      </div>
    </header>
  );
};

export default HeaderSearch;
