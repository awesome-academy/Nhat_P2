import React from "react";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import productsApi from "../../api/productsApi";
import userApi from "../../api/userApi";
import { removeUser } from "../../redux/slice/adminUserManagementSlice";
import { removeProduct } from "../../redux/slice/productsSlice";

export default function AdminEdit(props) {
  const { t } = useTranslation("common");
  const dispatch = useDispatch();
  const history = useHistory();

  const { userId, productId } = props;

  const handleRemove = (userId, productId) => {
    if (userId) {
      if (window.confirm("Bạn chắc chắn muốn xóa tài khoản này?")) {
        dispatch(removeUser(userId));
        userApi.deleteUser(userId);
      }
    }
    if (productId) {
      if (window.confirm("Bạn chắc chắn muốn xóa sản phẩm này?")) {
        dispatch(removeProduct(productId));
        productsApi.deleteProduct(productId);
      }
    }
  };

  const handleEdit = (userId, movieId) => {
    if (userId) {
      const editUserUrl = `/userManagement/edit/${userId}`;
      history.push(editUserUrl);
    }
    if (movieId) {
      const editMovieUrl = `/productManagement/edit/${movieId}`;
      history.push(editMovieUrl);
    }
  };

  return (
    <div className="admin__action">
      <button
        className="btn__common admin__action--edit"
        onClick={() => handleEdit(userId, productId)}
      >
        {t("admin.edit")}
      </button>
      <button
        className="btn__common admin__action--remove"
        onClick={() => handleRemove(userId, productId)}
      >
        {t("admin.remove")}
      </button>
    </div>
  );
}
