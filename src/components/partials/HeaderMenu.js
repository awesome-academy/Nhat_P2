import React from "react";
import { useTranslation } from "react-i18next";
import { Link, useLocation } from "react-router-dom";

const HeaderMenu = () => {
  const { t } = useTranslation("common");

  const location = useLocation();

  return (
    <div className="menubar">
      <div className="container">
        <div className="menu__flex">
          <div className="menu__inner">
            <div className="menu__mobile">
              <Link to="/">
                <i className="fa fa-bars"></i>
              </Link>
            </div>
            <nav className="menu__nav">
              <ul className="menu">
                <li className="menu__list">
                  <Link
                    to="/"
                    className={
                      location.pathname === "/"
                        ? "menu__list--link active"
                        : "menu__list--link"
                    }
                  >
                    {t("menu.home")}
                  </Link>
                </li>
                <li className="menu__list">
                  <Link
                    to="/list-product-sidebar"
                    className={
                      location.pathname === "/list-product-sidebar"
                        ? "menu__list--link active"
                        : "menu__list--link"
                    }
                  >
                    {t("menu.product")}
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
          <div className="mobile__header">
            <div className="mobile__search">
              <Link to="/">
                <i className="fa fa-search"></i>
              </Link>
              <div className="mobile__search-form">
                <form action="#" method="post">
                  <input placeholder="Gõ tìm kiếm ..." type="text" />
                  <button className="btn-search" type="search">
                    <i className="fa fa-search"></i>
                  </button>
                </form>
              </div>
            </div>
            <div className="mobile__cart">
              <Link to="/">
                <i className="fa fa-shopping-basket"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderMenu;
