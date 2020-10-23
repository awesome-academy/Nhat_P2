import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import AdminSidebar from "../partials/AdminSidebar";
import HeaderTopBar from "../partials/HeaderTopBar";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../../redux/slice/adminUserManagementSlice";
import AdminEdit from "../admin/AdminEdit";

const AdminUserManagement = () => {
  const { t } = useTranslation("common");
  const dispatch = useDispatch();

  const { user, loading, error } = useSelector((state) => state.user);

  const ADMIN_USERS_MANAGEMENT = [
    t("admin.id"),
    t("admin.name"),
    t("admin.email"),
    t("admin.phone"),
    t("admin.region"),
    t("admin.birthday"),
    t("admin.gender"),
    t("admin.editRemove"),
  ];

  useEffect(() => {
    dispatch(getUser());
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
                  <div className="admin__management user-management">
                    <table>
                      <thead>
                        <tr>
                          {ADMIN_USERS_MANAGEMENT.map((e, i) => (
                            <th key={i}>{e}</th>
                          ))}
                        </tr>
                      </thead>
                      <tbody className="cart__product">
                        {user.map((e, i) => (
                          <tr key={i}>
                            <td>{e.id}</td>
                            <td>{e.name}</td>
                            <td>{e.email}</td>
                            <td>{e.phone}</td>
                            <td>{e.region}</td>
                            <td>{e.birthday}</td>
                            <td>{e.gender}</td>
                            <td>
                              <AdminEdit userId={e.id} />
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                    {/* <button className="add">Add user</button> */}
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
export default AdminUserManagement;
