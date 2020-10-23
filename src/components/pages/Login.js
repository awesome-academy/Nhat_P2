import React, { useState } from "react";
import Header from "../partials/Header.js";
import Footer from "../partials/Footer.js";
import { useTranslation } from "react-i18next";
import { Link, useHistory } from "react-router-dom";
import { postUserLogin } from "../../redux/slice/loginSlice.js";
import { useDispatch, useSelector } from "react-redux";

const Login = () => {
  const { t } = useTranslation("common");
  const dispatch = useDispatch();
  const history = useHistory();

  const [user, setUser] = useState({ email: "", password: "" });
  const { success, loading, error } = useSelector((state) => state.login);

  const { email, password } = useSelector((state) => state.login);

  const onSubmit = async (e) => {
    e.preventDefault();

    const response = await dispatch(postUserLogin(user));

    if (response.error) {
      alert(response.error.message);
      console.log(response.error);
    } else if (response.payload.length) {
      alert(response.payload);
      console.log(response.payload);
    } else {
      alert("Đăng nhập thành công");
      const token = localStorage.getItem("token");
      if (token) {
        const base64Url = token.split(".")[1];
        const getValueToToken = JSON.parse(atob(base64Url));
        const getEmailToToken = getValueToToken.email;
        if (getEmailToToken === "admin@gmail.com") {
          history.push("/admin-user-management");
        } else {
          history.push("/");
        }
      }
    }
  };

  return (
    <div>
      <Header />
      <div className="breadcrumb">
        <div className="container">
          <ul className="breadcrumb__inner">
            <li>
              <Link to="/">{t("breadcrumb.home")}</Link>
            </li>
            <li>
              <Link to="/">{t("breadcrumb.login")}</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="login">
        <div className="container">
          <div className="login__columns">
            <h2 className="title__head">{t("login.button")}</h2>
            <form className="login__form" action="#" onSubmit={onSubmit}>
              <fieldset className="form__group">
                <label>{t("login.email")}:</label>
                <input
                  type="text"
                  value={email}
                  onChange={(e) => setUser({ ...user, email: e.target.value })}
                />
              </fieldset>
              <fieldset className="form__group">
                <label>{t("login.password")}:</label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) =>
                    setUser({ ...user, password: e.target.value })
                  }
                />
              </fieldset>
              <div className="login__btn">
                <button className="btn__common">
                  {loading ? (
                    <i className="fas fa-spinner fa-spin"></i>
                  ) : error ? (
                    "Retry"
                  ) : success.length ? (
                    "Retry"
                  ) : (
                    t("login.button")
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Login;
