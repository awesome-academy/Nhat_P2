import React, { useEffect } from "react";
import AdminSidebar from "../partials/AdminSidebar";
import AdminEdit from "../admin/AdminEdit";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { getProducts } from "../../redux/slice/productsSlice";
import HeaderTopBar from "../partials/HeaderTopBar";

const AdminProductManagement = () => {
  const { t } = useTranslation("common");
  const dispatch = useDispatch();
  const history = useHistory();

  const { products, loading, error } = useSelector((state) => state.products);

  const ADMIN_PRODUCT_MANAGEMENT = [
    t("admin.id"),
    t("admin.image"),
    t("admin.name"),
    t("admin.evaluate"),
    t("admin.price"),
    t("admin.description"),
    t("admin.categories"),
    t("admin.editRemove"),
  ];

  const handleAddProduct = () => {
    const addProductUrl = `/productManagement/add`;
    history.push(addProductUrl);
  };

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>{error.message}</p>
      ) : (
        <div>
          <HeaderTopBar />
          <div className="admin__background">
            <div className="container">
              <div className="admin">
                <div className="admin__sidebar">
                  <div className="admin__sidebar--left">
                    <AdminSidebar />
                  </div>
                </div>
                <div className="admin__content">
                  <div className="admin__management product-management">
                    <table>
                      <thead>
                        <tr>
                          {ADMIN_PRODUCT_MANAGEMENT.map((e, i) => (
                            <th key={i}>{e}</th>
                          ))}
                        </tr>
                      </thead>
                      <tbody className="cart__product">
                        {products.map((e, i) => (
                          <tr key={i}>
                            <td>{e.id}</td>
                            <td>
                              <img src={e.image} alt="images" />
                            </td>
                            <td>{e.name}</td>
                            <td>{e.ratings}</td>
                            <td>{e.price}</td>
                            <td>{e.description}</td>
                            <td>{e.categories}</td>
                            <td>
                              <AdminEdit productId={e.id} />
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                    <button className="add" onClick={handleAddProduct}>
                      {t("admin.addProduct")}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminProductManagement;
