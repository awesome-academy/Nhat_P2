import React from "react";
// import Login from "./components/pages/Login";
// import Register from "./components/pages/Register";
// import Cart from "./components/pages/Cart";
import Home from "./components/pages/Home";
// import ListProduct from "./components/pages/ListProduct";
// import ProductDetail from "./components/pages/ProductDetail";
// import AdminProductManagement from "./components/pages/AdminProductManagement";
// import AdminUsersManagement from "./components/pages/AdminUserManagement";
// import AdminRevenueManagement from "./components/pages/AdminRevenueManagement";

const routers = [
  // {
  //   path: "/login",
  //   exact: true,
  //   main: () => <Login />,
  // },
  // {
  //   path: "/register",
  //   exact: true,
  //   main: () => <Register />,
  // },
  // {
  //   path: "/admin-page",
  //   exact: true,
  //   main: () => <AdminProductManagement />,
  // },
  // {
  //   path: "/admin-product-management",
  //   exact: true,
  //   main: () => <AdminProductManagement />,
  // },
  // {
  //   path: "/admin-user-management",
  //   exact: true,
  //   main: () => <AdminUsersManagement />,
  // },
  // {
  //   path: "/admin-revenue-management",
  //   exact: true,
  //   main: () => <AdminRevenueManagement />,
  // },
  // {
  //   path: "/list-product-sidebar",
  //   exact: true,
  //   main: () => <ListProduct />,
  // },
  // {
  //   path: "/products-detail/:productId",
  //   exact: true,
  //   main: () => <ProductDetail />,
  // },
  // {
  //   path: "/cart",
  //   exact: true,
  //   main: () => <Cart />,
  // },
  {
    path: "/",
    exact: true,
    main: () => <Home />,
  },
];

export default routers;
