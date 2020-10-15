import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
const Blog = () => {
  const { t } = useTranslation("common");

  return (
    <footer className="footer">
      <div className="widget__first">
        <div className="container">
          <div className="widget__first--wrap">
            <div className="widget__intro">
              <p>{t("footer.introTextSocial")}:</p>
              <div className="widget__intro--social">
                <Link to="/">
                  <i className="fa fa-facebook"></i>
                </Link>
                <Link to="/">
                  <i className="fa fa-twitter"></i>
                </Link>
                <Link to="/">
                  <i className="fa fa-instagram"></i>
                </Link>
                <Link to="/">
                  <i className="fa fa-vimeo"></i>
                </Link>
              </div>
            </div>
            <div className="widget__intro">
              <p>{t("footer.introTextEmail")}</p>
            </div>
            <div className="widget__search">
              <form className="form-subcribe" action="#" method="post">
                <input type="text" name="email" />
                <button className="btn-subcribe" name="subcribe">
                  <i className="fa fa-paper-plane"></i>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="widget__second">
        <div className="container">
          <div className="widget__detail--flex">
            <div className="widget__detail left">
              <div className="widget__detail--logo">
                <Link to="/" title="Logo">
                  <img src="assets/images/logo/01.png" alt="images" />
                </Link>
              </div>
              <p className="widget__detail--des">{t("footer.description")}</p>
              <ul className="widget__detail--contact">
                <li className="icon__footer-mobile">
                  {t("footer.phone")}: (84-4) 66.558.868
                </li>
                <li className="icon__footer-envelope">
                  {t("footer.email")}: info@dkt.com.vn
                </li>
              </ul>
            </div>
            <div className="widget__detail right">
              <div className="widget__detail--wrap">
                <div className="widget__col">
                  <h3 className="widget__title">
                    {t("footer.customerInformation")}
                  </h3>
                  <ul className="widget__list">
                    <li className="widget__list--link">
                      <Link to="/">{t("footer.myAccount")}</Link>
                    </li>
                    <li className="widget__list--link">
                      <Link to="/">{t("footer.favoriteProduct")}</Link>
                    </li>
                    <li className="widget__list--link">
                      <Link to="/">{t("footer.purchaseHistory")}</Link>
                    </li>
                    <li className="widget__list--link">
                      <Link to="/">{t("footer.returnPolicy")}</Link>
                    </li>
                    <li className="widget__list--link">
                      <Link to="/">{t("footer.suggestions")}</Link>
                    </li>
                  </ul>
                </div>
                <div className="widget__col">
                  <h3 className="widget__title">
                    {t("footer.serviceSupport")}
                  </h3>
                  <ul className="widget__list">
                    <li className="widget__list--link">
                      <Link to="/">{t("footer.shopSystem")}</Link>
                    </li>
                    <li className="widget__list--link">
                      <Link to="/">{t("footer.shoppingGuide")}</Link>
                    </li>
                    <li className="widget__list--link">
                      <Link to="/">{t("footer.paymentGuide")}</Link>
                    </li>
                    <li className="widget__list--link">
                      <Link to="/">{t("footer.redeemPoints")}</Link>
                    </li>
                    <li className="widget__list--link">
                      <Link to="/">{t("footer.question")}</Link>
                    </li>
                  </ul>
                </div>
                <div className="widget__col">
                  <h3 className="widget__title">{t("footer.incentives")}</h3>
                  <ul className="widget__list">
                    <li className="widget__list--link">
                      <Link to="/">{t("footer.deliveryPolicy")}</Link>
                    </li>
                    <li className="widget__list--link">
                      <Link to="/">{t("footer.productReturns")}</Link>
                    </li>
                    <li className="widget__list--link">
                      <Link to="/">{t("footer.warrantyPolicy")}</Link>
                    </li>
                    <li className="widget__list--link">
                      <Link to="/">{t("footer.newProducts")}</Link>
                    </li>
                    <li className="widget__list--link">
                      <Link to="/">{t("footer.paymentPolicy")}</Link>
                    </li>
                  </ul>
                </div>
                <div className="widget__col">
                  <h3 className="widget__title">{t("footer.new")}</h3>
                  <ul className="widget__list">
                    <li className="widget__list--link">
                      <Link to="/">{t("footer.newS")}</Link>
                    </li>
                    <li className="widget__list--link">
                      <Link to="/">{t("footer.promotion")}</Link>
                    </li>
                    <li className="widget__list--link">
                      <Link to="/">{t("footer.recruitment")}</Link>
                    </li>
                    <li className="widget__list--link">
                      <Link to="/">{t("footer.download")}</Link>
                    </li>
                    <li className="widget__list--link">
                      <Link to="/">{t("footer.tags")}</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="widget__thrid">
        <div className="container">
          <div className="widget__thrid--flex">
            <div className="widget__menu">
              <Link className="widget__menu--link" to="/">
                {t("footer.siteMap")}
              </Link>
              <Link className="widget__menu--link" to="/">
                {t("footer.productPortfolio")}
              </Link>
              <Link className="widget__menu--link" to="/">
                {t("footer.operate")}
              </Link>
              <Link className="widget__menu--link" to="/">
                {t("footer.info")}
              </Link>
              <Link className="widget__menu--link" to="/">
                {t("footer.qvsa")}
              </Link>
            </div>
            <div className="widget__payment">
              <img src="assets/images/footer/01.png" alt="images" />
            </div>
          </div>
        </div>
      </div>
      <div className="bottom">
        <div className="container">
          <p>{t("footer.welcome")}</p>
        </div>
      </div>
    </footer>
  );
};
export default Blog;
