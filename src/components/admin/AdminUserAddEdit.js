import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import HeaderTopBar from "../partials/HeaderTopBar";
import {
  getUsers,
  postUser,
  putUser,
} from "../../redux/slice/adminUserAddEditSlice";

export default function AdminUserAddEdit() {
  const { t } = useTranslation("common");
  const history = useHistory();
  const dispatch = useDispatch();

  const { userId } = useParams();

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    region: "",
    birthday: "",
    gender: "",
  });

  const [token, setToken] = useState("");

  useEffect(() => {
    if (userId) {
      async function getDataUser() {
        const response = await dispatch(getUsers(userId));
        if (!response.error) {
          setUser({
            name: response.payload.name,
            email: response.payload.email,
            password: response.payload.password,
            phone: response.payload.phone,
            region: response.payload.region,
            birthday: response.payload.birthday,
            gender: response.payload.gender,
          });
          console.log(response.payload.name);
        }
      }
      getDataUser();
    } else {
      const tokenAdmin = localStorage.getItem("token");
      setToken(tokenAdmin);
    }
  }, [dispatch, userId]);

  const onSubmit = async (e) => {
    e.preventDefault();

    if (!userId) {
      const response = await dispatch(postUser(user));
      if (response.error) {
        alert(response.error.message);
      } else if (response.payload.length) {
        alert(response.payload);
      } else {
        alert("Register Success");
        // reset again to add token admin
        localStorage.setItem("token", token);
        history.push("/admin-user-management");
      }
    } else {
      await dispatch(putUser({ userId, user }));
      alert("Edit Success");
      history.push("/admin-user-management");
    }
  };

  return (
    <div>
      <HeaderTopBar />
      <div className="admin__add-edit">
        <div className="container">
          <div className="admin__frames">
            <form onSubmit={onSubmit}>
              <div className="admin__frames--grid">
                <fieldset className="form__group">
                  <label>
                    {t("register.name")}
                    <span className="required">*</span>
                  </label>
                  <input
                    type="text"
                    value={user.name}
                    onChange={(e) => setUser({ ...user, name: e.target.value })}
                  />
                </fieldset>
                <fieldset className="form__group">
                  <label>
                    {t("register.email")}
                    <span className="required">*</span>
                  </label>
                  <input
                    type="text"
                    value={user.email}
                    onChange={(e) =>
                      setUser({ ...user, email: e.target.value })
                    }
                  />
                </fieldset>
                <fieldset className="form__group">
                  <label>
                    {t("register.password")}
                    <span className="required">*</span>
                  </label>
                  <input
                    type="password"
                    value={user.password}
                    onChange={(e) =>
                      setUser({ ...user, password: e.target.value })
                    }
                  />
                </fieldset>
                <fieldset className="form__group">
                  <label>
                    {t("register.phone")}
                    <span className="required">*</span>
                  </label>
                  <input
                    type="text"
                    value={user.phone}
                    onChange={(e) =>
                      setUser({ ...user, phone: e.target.value })
                    }
                  />
                </fieldset>

                <fieldset className="form__group">
                  <input
                    type="date"
                    value={user.birthday}
                    onChange={(e) =>
                      setUser({ ...user, birthday: e.target.value })
                    }
                  />
                </fieldset>
                <fieldset className="form__group">
                  <select
                    value={user.gender}
                    onChange={(e) =>
                      setUser({ ...user, gender: e.target.value })
                    }
                  >
                    <option value="" disabled="">
                      {t("register.gender")}
                    </option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                  </select>
                </fieldset>
              </div>
              <fieldset className="form__group">
                <select
                  value={user.region}
                  onChange={(e) => setUser({ ...user, region: e.target.value })}
                >
                  <option value="" disabled="">
                    {t("register.region")}
                  </option>
                  <option value="Ho Chi Minh">Ho Chi Minh</option>
                  <option value="Ha Noi">Ha Noi</option>
                  <option value="Da Nang">Da Nang</option>
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
    </div>
  );
}
