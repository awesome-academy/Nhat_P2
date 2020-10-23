import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import AdminSidebar from "../partials/AdminSidebar";
import HeaderTopBar from "../partials/HeaderTopBar";
import { getNewCart } from "../../redux/slice/adminNewCartManagementSlice";
import AdminProductManagement from "./AdminProductManagement";

const AdminRevenueManagement = () => {
  const { t } = useTranslation("common");
  const dispatch = useDispatch();

  const { listNewCart, loading, error } = useSelector(
    (state) => state.listNewCart
  );

  const ADMIN_REVENUE_MANAGEMENT = [
    t("admin.id"),
    t("admin.email"),
    t("admin.payment"),
    t("admin.total"),
  ];

  useEffect(() => {
    dispatch(getNewCart());
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
                  <div className="admin__management revenue-management">
                    <table>
                      <thead>
                        <tr>
                          {ADMIN_REVENUE_MANAGEMENT.map((e, i) => (
                            <th key={i}>{e}</th>
                          ))}
                        </tr>
                      </thead>
                      <tbody className="cart__product">
                        {listNewCart.map((e, i) => (
                          <tr key={i}>
                            <td>{e.id}</td>
                            <td>{e.email}</td>
                            <td>{e.currentPayment}</td>
                            <td>{e.totalPayment}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
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
export default AdminRevenueManagement;
