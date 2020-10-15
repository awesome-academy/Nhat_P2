import React from "react";
import { useTranslation } from "react-i18next";
import { Link, useLocation } from "react-router-dom";

const AdminSideBar = () => {
  const { t } = useTranslation("common");

  const location = useLocation();

  const ADMIN_SLIDE_BAR = [
    { to: "/admin-user-management", title: t("admin.userManagement") },
    { to: "/admin-product-management", title: t("admin.productManagement") },
    { to: "/admin-revenue-management", title: t("admin.revenueManagement") },
  ];

  return (
    <ul className="admin-slide-bar">
      {ADMIN_SLIDE_BAR.map((e, i) => (
        <li key={i}>
          <Link
            to={e.to}
            className={location.pathname === e.to ? "active" : ""}
          >
            {e.title}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default AdminSideBar;
