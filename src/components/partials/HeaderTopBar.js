import React from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { getChange } from "../../redux/slice/i18nSlice";
// import { getNameLogOut } from "../../redux/slice/loginSlice";
import { Link, useHistory } from "react-router-dom";

const HeaderTopBar = () => {
  const { t, i18n } = useTranslation("common");

  const { status } = useSelector((state) => state.i18n);

  // const { getNameLogOut } = useSelector((state) => state.currentProduct);

  const history = useHistory();

  const dispatch = useDispatch();

  const token = localStorage.getItem("token");

  const handleLogOut = () => {
    localStorage.clear();
    history.push("/");
  };

  const handleVi = () => {
    i18n.changeLanguage("vi");
    dispatch(getChange(true));
  };

  const handleEn = () => {
    i18n.changeLanguage("en");
    dispatch(getChange(false));
  };

  return (
    <div className="topbar">
      <div className="container">
        <div className="topbar__inner">
          <div className="topbar__left">
            <div className="topbar__post-time">
              <span className="time">{t("topbar.time")}: 8:00 - 18:00</span>
              <span className="date">{t("topbar.date")}</span>
            </div>
            <div className="topbar__list-social">
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
          <div className="topbar__right">
            {token ? (
              <div className="topbar__lr">
                <Link to="/" onClick={handleLogOut}>
                  <i className="fa fa-sign-out"></i>
                </Link>
              </div>
            ) : (
              <div className="lr">
                <Link to="/login" className="icons-login">
                  {t("lr.login")}
                </Link>
                <Link to="/register" className="icons-register">
                  {t("lr.register")}
                </Link>
              </div>
            )}
            <div className="language">
              <button
                className={
                  status === true ? "language-vn active" : "language-vn"
                }
                onClick={handleVi}
              >
                VN
              </button>
              <button
                className={
                  status === false ? "language-en active" : "language-en"
                }
                onClick={handleEn}
              >
                EN
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderTopBar;
