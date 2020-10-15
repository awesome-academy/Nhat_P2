import React, { useEffect } from "react";
import Header from "../partials/Header.js";
import Footer from "../partials/Footer.js";
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import authApi from "../../api/authApi";
import {
  getAll,
  getBirthday,
  getEmail,
  getGender,
  getName,
  getPassword,
  getPhone,
  getRegion,
} from "../../redux/slice/registerSlice";

const Register = () => {
  const { t } = useTranslation("common");

  const history = useHistory();

  const dispatch = useDispatch();

  const {
    name,
    email,
    password,
    phone,
    region,
    birthday,
    gender,
  } = useSelector((state) => state.register);

  useEffect(() => {
    const emptyUser = {
      name: "",
      email: "",
      password: "",
      phone: "",
      region: "",
      birthday: "",
      gender: "",
    };
    dispatch(getAll(emptyUser));
  }, [dispatch]);

  const onSubmit = async (e) => {
    e.preventDefault();
    const newUser = {
      name,
      email,
      password,
      phone,
      region,
      birthday,
      gender,
    };
    const res = await authApi.postUserRegister(newUser);

    if (res.length) {
      alert(res);
    } else {
      alert("Register Success");
      history.push("/login");
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
              <Link to="/">{t("breadcrumb.register")}</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="register">
        <div className="container">
          <div className="register__columns">
            <form className="register__form" action="#" onSubmit={onSubmit}>
              <h2 className="title__head">{t("register.button")}</h2>
              <fieldset className="form__group">
                <label>
                  {t("register.name")}
                  <span className="required">*</span>
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => dispatch(getName(e.target.value))}
                />
              </fieldset>
              <fieldset className="form__group">
                <label>
                  {t("register.email")}
                  <span className="required">*</span>
                </label>
                <input
                  type="text"
                  value={email}
                  onChange={(e) => dispatch(getEmail(e.target.value))}
                />
              </fieldset>
              <fieldset className="form__group">
                <label>
                  {t("register.password")}
                  <span className="required">*</span>
                </label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => dispatch(getPassword(e.target.value))}
                />
              </fieldset>
              <fieldset className="form__group">
                <label>
                  {t("register.phone")}
                  <span className="required">*</span>
                </label>
                <input
                  type="text"
                  value={phone}
                  onChange={(e) => dispatch(getPhone(e.target.value))}
                />
              </fieldset>
              <fieldset className="form__group">
                <select
                  value={region}
                  onChange={(e) => dispatch(getRegion(e.target.value))}
                >
                  <option value="" disabled="">
                    {t("register.region")}
                  </option>
                  <option value="Ho Chi Minh">Ho Chi Minh</option>
                  <option value="Ha Noi">Ha Noi</option>
                  <option value="Da Nang">Da Nang</option>
                </select>
              </fieldset>
              <fieldset className="form__group">
                <input
                  type="date"
                  value={birthday}
                  onChange={(e) => dispatch(getBirthday(e.target.value))}
                ></input>
              </fieldset>
              <fieldset className="form__group">
                <select
                  value={gender}
                  onChange={(e) => dispatch(getGender(e.target.value))}
                >
                  <option value="" disabled="">
                    {t("register.gender")}
                  </option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
              </fieldset>
              <div className="register__btn">
                <button className="btn__common" type="submit">
                  {t("register.button")}
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

export default Register;
